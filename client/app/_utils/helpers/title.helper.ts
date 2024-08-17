const title: Record<string, any> = {
  '/categories': 'Categories',
  '/products': 'Products',
};

export const generateTitle = (url: string) => {
  let pageTitle = title[url];
  if (pageTitle) return pageTitle;
};
