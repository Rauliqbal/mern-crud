import logoReact from "./assets/react.svg";
import CreateProduct from "./components/CreateProduct";
import ListProduct from "./components/ListProduk";

function App() {
  return (
    <>
      <header className="bg-slate-900 py-12">
        <img
          className="animate-spin mx-auto "
          width={64}
          height={64}
          src={logoReact}
          alt=""
        />
        <h1 className="text-center text-white text-4xl font-semibold mt-8">
          MERN CRUD
        </h1>
      </header>
      <div className="max-w-5xl mx-auto mt-10">
        <CreateProduct/>
        <h2 className="text-lg font-semibold my-4 ">List Product</h2>
        <ListProduct />
      </div>
    </>
  );
}

export default App;
