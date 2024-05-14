import React from "react";

const Product = ({ item, onClick }) => {
  const { title, description, thumbnail } = item;

  return (
    <div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg"
            src={thumbnail}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => onClick(item)}>Add to cart</button>
          
        </div>
        
      </div>

      {/* <h1>{title}</h1>
      <p>{description}</p>
      <img src={thumbnail} alt="" /> */}
      <br />
      <br />
      <br />
    </div> 
  );
};

export default Product;
