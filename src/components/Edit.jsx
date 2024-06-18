import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { useContext, useEffect, useState } from "react";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
 
  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  useEffect(() => {
    const productToEdit = products.find((p) => p.id === parseInt(id));
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [id, products]);

  const UpdateProductHandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 4 ||
      product.price.toString().trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each field must have at least four characters");
      return;
    }

    const updatedProducts = products.map((p) =>
      p.id === parseInt(id) ? product : p
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate(`/details/${id}`);
  };

  return (
    <form
      onSubmit={UpdateProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h2 className="text-3xl w-1/2 mb-5">Edit Product</h2>
      <input
        type="url"
        placeholder="image link"
        className="text-1.5xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={ChangeHandler}
        value={product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1.5xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={ChangeHandler}
        value={product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1.5xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="category"
          onChange={ChangeHandler}
          value={product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1.5xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="price"
          onChange={ChangeHandler}
          value={product.price}
        />
      </div>
      <textarea
        className="text-1.5xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
        placeholder="Enter the product description here..."
        name="description"
        onChange={ChangeHandler}
        value={product.description}
      ></textarea>
      <div className="w-1/2">
        <button className="px-5 py-2 text-blue-300 border border-blue-200 rounded">
          Update Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
