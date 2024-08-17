import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { productStatuses } from '../constant';
import { TProductStatus } from '../interface';
import { Product } from '../model';

export const getProducts = tryCatch(async (req, res) => {
  const { query } = req;
  // search queries
  const name = query.name;
  const metaKey = query.metaKey;
  const stockStatus = query.stockStatus as string;
  const status = query.status as string;

  const dbQuery: Record<string, any> = {};
  if (name) dbQuery.name = { $regex: name, $options: 'i' };
  if (metaKey) dbQuery.metaKey = metaKey;
  if (stockStatus && stockStatus.toLowerCase() === 'true')
    dbQuery.stockStatus = true;
  if (stockStatus && stockStatus.toLowerCase() === 'false')
    dbQuery.stockStatus = false;

  if (
    status &&
    productStatuses.includes(status.toUpperCase() as TProductStatus)
  )
    dbQuery.status = status;
  // pagination
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 20;

  const products = await Product.aggregate([
    {
      $match: {
        ...dbQuery,
        isDeleted: false,
      },
    },
    {
      $lookup: {
        from: 'variants',
        localField: '_id',
        foreignField: 'productId',
        as: 'variants',
        let: {
          prodId: '$_id',
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$productId', '$$prodId'] },
                  { $eq: ['$isDeleted', false] },
                ],
              },
            },
          },
        ],
      },
    },
  ])
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Product.countDocuments({ ...dbQuery, isDeleted: false });
  const totalPages = Math.ceil(total / limit);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Products retrieved successfully',
    meta: { page, limit, total, totalPages },
    data: products,
  });
});
