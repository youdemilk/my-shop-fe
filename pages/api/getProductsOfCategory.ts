export const getProductsOfCategory = async (categoryId: number) => {
  return await fetch(`http://localhost:1337/api/products?filters[category][id][$eq]=${categoryId}`);
};
