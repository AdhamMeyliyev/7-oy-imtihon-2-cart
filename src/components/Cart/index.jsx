import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, onClick, setCart }) => {
  const deleteToCart = (id) => {
    const element = cart.filter((item) => item.id !== id);
    setCart(element);
  };
  return (
    <div>
      <h1>Cart:</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={`${item.id}-${Math.random() * 100}`}>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={item.thumbnail} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                  
                  <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => deleteToCart(item.id)}
                  >
                    delete ToCart
                  </button>
                </div>
              </div>
              <br />
              <br />
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}

      <Link to={"/"}>product</Link>
    </div>
  );
};

export default Cart;
