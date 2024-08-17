import { sendSuccessResponse, TSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { Category } from '../model';

const categoryTypes = ['PRIMARY', 'SECONDARY', 'TERTIARY'];
const ALL = 'ALL';

export const getCategoriesForAdmin = tryCatch(async (req, res) => {
  const { query } = req;

  // filter query
  const dbQuery: Record<string, any> = { isDeleted: false };

  // handling filter
  const type = query.type as string;
  if (type && categoryTypes.includes(type.toUpperCase()))
    dbQuery.type = type.toUpperCase();

  // model query
  const CategoryQuery = Category.find(dbQuery);
  CategoryQuery.populate('primaryCategoryId');
  CategoryQuery.populate('secondaryCategoryId');

  // handling pagination
  const get = query.get as string;

  //  skip pagination when get = all
  const isAll = get ? get.toUpperCase() === ALL : false;
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 20;

  // applying pagination when get !== all
  if (!isAll) {
    CategoryQuery.skip((page - 1) * limit).limit(limit);
  }

  // console.log((await CategoryQuery).toString());

  // executing query
  const categories = await CategoryQuery;

  // preparing meta
  const total = await Category.countDocuments(dbQuery);
  const totalPages = Math.ceil(total / limit);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Categories retrieved successfully',
    meta: { page, limit, total, totalPages },
    data: categories,
  });
});
