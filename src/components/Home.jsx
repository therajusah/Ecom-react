import Nav from './Nav';

const Home = () => {
  return (
    <>
    <Nav />
    
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
    </>
  );
};

export default Home;
