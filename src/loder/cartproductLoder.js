import { getShoppingCart } from "../utlitis/fakdb";

const cartproductLoder = async () => {
  const lodeproducts = await fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
  );
  const products = await lodeproducts.json();

  const storCard = getShoppingCart();

  const savedCart = [];
  console.log(storCard);
  for (const id in storCard) {
    const addPostCart = products.find((pd) => pd.id === id);
    if (addPostCart) {
      const quantity = storCard[id];
      addPostCart.quantity = quantity;
      savedCart.push(addPostCart);
    }
  }
  return savedCart;
};
export default cartproductLoder;
