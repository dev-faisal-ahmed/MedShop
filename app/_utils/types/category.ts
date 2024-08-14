export type TAddPrimaryCategoryPayload = {
  name: string;
  slug: string;
  thumbnail: string;
};

export type TCategoryType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
export type TCategory = {
  _id: string;
  primaryCategoryId?: TCategory;
  secondaryCategoryId?: TCategory;
  name: string;
  slug: string;
  thumbnail: string;
  type: TCategoryType;
  isDeleted: boolean;
};

export type TCategoryQuery = {
  type?: string | undefined;
  get?: 'ALL';
};
