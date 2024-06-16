import { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "../utils/Context";
import Loading from "./Loader";

const Home = () => {
  const [products] = useContext(ProductContext);
  
  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products ? (
          products.map((p) => (
            <Link
              to={`/details/${p.id}`}
              key={p.id}
              className="mr-3 mb-3 p-3 border rounded shadow card w-[18%] h-[30vh] flex flex-col justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-400">{p.title}</h1>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Home;
