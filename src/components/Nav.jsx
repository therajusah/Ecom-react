const Nav = () => {
  return (
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
  );
};

export default Nav;