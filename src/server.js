const mockProducts = [
  {
    id: 1,
    name: "product One",
    price: 1000,
    hasOff: true,
  },
  {
    id: 2,
    name: "product Two",
    price: 2000,
    hasOff: false,
  },
  {
    id: 3,
    name: "product Three",
    price: 3000,
    hasOff: false,
  },
];

const getMockProducts = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(mockProducts);
    }, 3000)
  );

const getProdutById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = mockProducts.filter((product) => product.id === id);
      if (products[0]) {
        resolve(products[0]);
      } else {
        reject("no product found");
      }
    }, 3000);
  });

export { getMockProducts, getProdutById, mockProducts };
