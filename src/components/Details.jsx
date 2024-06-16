import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import Loader from "./Loader";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="w-[70%] justify-between items-center flex h-full m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={product.image}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-3xl">{product.title}</h1>
        <h3 className="my-5 text-zinc-400">{product.category}</h3>
        <h2 className="text-red-300">₹ {product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link
          to={`/edit/${id}`}
          className="px-5 py-2 mr-5 text-blue-300 border border-blue-200 rounded"
        >
          Edit
        </Link>
        <Link
          to={`/delete/${id}`}
          className="px-5 py-2 text-blue-300 border border-red-200 rounded"
        >
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Details;
