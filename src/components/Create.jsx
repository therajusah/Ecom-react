import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategroy] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 4 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every field must have atleast four character");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    toast.success("Product Added Successfully");
    navigate("/");
    // toast.success("New Product Added");
    // console.log(product);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      action=""
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h2 className="text-3xl w-1/2 mb-5">Add New Product</h2>
      <input
        type="url"
        placeholder="image link"
        className="text-1.5xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1.5xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1.5xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setcategroy(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1.5xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-1.5xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name=""
        id=""
        rows="10"
        placeholder="Enter the product description here..."
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button className="px-5 py-2 text-blue-300 border border-blue-200 rounded">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
