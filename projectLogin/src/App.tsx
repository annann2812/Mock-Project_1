import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import EditProduct from "./pages/EditProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { ProductProps } from "./interface/Product";
import instance from "./service";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductProps[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      setProducts(data);
    })();
  }, []);

  const HandleDeleteProduct = (id: number) => {
    (async () => {
      const isConfirm = confirm("Are you sure you want to delete");
      if (isConfirm) {
        await instance.delete(`/products/${id}`);
        setProducts(products.filter((product) => product.id !== id && product));
      }
    })();
  };
  const handleAddProduct = (product: ProductProps) => {
    (async () => {
      const { data } = await instance.post("/products", product);
      setProducts([...products, data]);
    })();
    navigate("/");
  };
  const handleEditProduct = (product: ProductProps) => {
    (async () => {
      const { data } = await instance.put(`/products/${product.id}`, product);
      setProducts(products.map((item) => (item.id === data.id ? data : item)));
    })();
    navigate("/");
  };
  return (
    <>
      <header className="mb-5">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add new product</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route
          index
          element={<Home products={products} onDelete={HandleDeleteProduct} />}
        ></Route>
        <Route
          path="/add"
          element={<Product onSubmit={handleAddProduct} />}
        ></Route>
        <Route
          path="/edit/:id"
          element={<EditProduct onSubmit={handleEditProduct} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
