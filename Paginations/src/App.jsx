import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      if (data) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const totalPages = Math.ceil(products.length / 10);

  return (
    <>
      <h1 className="uppercase text-center text-4xl font-semibold p-10">
        All Products
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {products.slice((page - 1) * 10, page * 10).map((item, index) => (
          <div key={index} className="min-w-[300px] max-w-[300px] text-center">
            <img
              src={item.thumbnail}
              alt=""
              className="w-full min-h-[300px] max-h-[300px]"
            />
            <h1 className="font-bold">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className="p-10 text-xl font-medium flex justify-center items-center">
        {page > 1 && (
          <button
            className="bg-white text-black px-4 font-bold cursor-pointer "
            onClick={(e) => setPage(page - 1)}
          >{`<`}</button>
        )}
        <button className="p-2 px-4 mx-2 text-black  cursor-pointer font-bold bg-white rounded-full">{`${page}`}</button>
        {page < totalPages && (
          <button
            className="bg-white text-black px-4 font-bold cursor-pointer "
            onClick={(e) => setPage(page + 1)}
          >{`>`}</button>
        )}
      </div>
    </>
  );
}

export default App;
