import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] justify-between items-center flex h-full m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[40%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-3xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="my-5 text-zinc-400 ">men &apos;s clothing</h3>
        <h2 className="text-red-300">₹ 109.95</h2>
        <p className="mb-[5%]">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <Link className="px-5 py-2 mr-5 text-blue-300 border border-blue-200 rounded">Edit</Link>
        <Link className="px-5 py-2 text-blue-300 border border-red-200 rounded">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Details;
