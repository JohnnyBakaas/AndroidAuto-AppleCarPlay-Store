const testDataFroGetProductCard = [
  {
    productId: "1",
    name: '11" F-serie stil skjerm til BMW 3-serie E9X',
    price: 10000,
    img: [
      "https://www.mncarparts.com/cdn/shop/products/image_c157d603-8523-4813-a06b-90efcc05b52f.jpg?v=1677519730",
      "https://www.carplay.lt/wp-content/uploads/2023/07/carplay-e90.jpg",
    ],
  },
];

export const getProductCard = async (productId: string) => {
  return testDataFroGetProductCard.find((e) => e.productId === productId);
};
