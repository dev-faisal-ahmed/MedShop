import { z } from 'zod';

export const addPrimaryCategorySchema = z.object({
  name: z.string({ required_error: 'Category name is required' }),
  slug: z.string({ required_error: 'Slug is required' }),
  thumbnail: z.string({ required_error: 'Thumbnail is required' }),
});

export const addSecondaryCategorySchema = z.object({
  name: z.string({ required_error: 'Category name is required' }),
  slug: z.string({ required_error: 'Slug is required' }),
  thumbnail: z.string({ required_error: 'Thumbnail is required' }),
  primaryCategoryId: z.string({
    required_error: 'PrimaryCategoryId is required',
  }),
});

export const addTertiaryCategorySchema = z.object({
  name: z.string({ required_error: 'Category name is required' }),
  slug: z.string({ required_error: 'Slug is required' }),
  thumbnail: z.string({ required_error: 'Thumbnail is required' }),
  secondaryCategoryId: z.string({
    required_error: 'SecondaryCategoryId is required',
  }),
});

export const updateCategorySchema = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
  thumbnail: z.string().optional(),
});
