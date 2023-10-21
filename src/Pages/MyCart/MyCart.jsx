import { useEffect, useState } from "react";
import Cart from "./Cart";

const MyCart = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState(products);

  useEffect(() => {
    fetch(
      "https://touchup-brand-server.vercel.app/cardInfo"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // console.log(items)
  // console.log(products)

  return (
    <div>
      {products.length < 1 ? (
        <div>
          <img
            className="h-[80vh] my-10 w-full md:w-2/5 mx-auto"
            src="https://i.ibb.co/zH3Vdxr/11669671-20943865.jpg"
          />
          <p className="text-center mb-16 text-3xl font-bold text-gray-500">
            You dont have any product in your cart. <br />{" "}
            <span>Please add one.</span>
          </p>
        </div>
      ) : (
        <div className="grid my-20 mx-auto grid-cols-1 md:grid-cols-2  gap-4">
          {products.length > 0 &&
            products?.map((product) => (
              <Cart
                key={product._id}
                products={products}
                setProducts={setProducts}
                product={product}
              ></Cart>
            ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
