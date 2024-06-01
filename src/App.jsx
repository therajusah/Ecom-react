import "./App.css";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a
          className="px-5 py-2 text-blue-300 border border-blue-200 rounded"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="w-[80%] my-5" />
        <h1 className="text-2xl w-[80%]">Category</h1>
        <ul className="w-[80%]">
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
            Category 1
          </li>
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-red-100"></span>
            Category 2
          </li>
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-green-100"></span>
            Category 3
          </li>
        </ul>
      </nav>
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-hidden">
        <div className="mr-3 mb-3 p-3 border rounded shadow card w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-300 ">Product 1</h1>
          
        </div>
      </div>
    </div>
  );
}

export default App;
