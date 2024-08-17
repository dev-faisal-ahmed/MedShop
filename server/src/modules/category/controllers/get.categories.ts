import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { Category } from '../model';

export const getCategories = tryCatch(async (_, res) => {
  // getting primary categories firs
  const primaryCategories = await Category.find({
    type: 'PRIMARY',
    isDeleted: false,
  });

  const result = [];
  for (const primaryCategory of primaryCategories) {
    const secondaryCategory = await Category.aggregate([
      { $match: { primaryCategoryId: primaryCategory._id, isDeleted: false } },
      {
        $lookup: {
          from: 'categories',
          localField: '_id',
          foreignField: 'secondaryCategoryId',
          as: 'tertiaryCategories',
          let: {
            secondaryId: '$_id',
          },
          // to prevent any deleted tertiary category to retrieved
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$secondaryCategoryId', '$$secondaryId'] },
                    { $eq: ['$isDeleted', false] },
                  ],
                },
              },
            },
          ],
        },
      },
    ]);

    result.push({
      ...primaryCategory.toObject(),
      secondaryCategories: secondaryCategory,
    });
  }

  sendSuccessResponse(res, {
    status: 200,
    message: 'Categories retrieved successfully',
    data: result,
  });
});
