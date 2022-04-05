import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./componets/Home";
import Navbar from "./componets/Nanbar";
import Error from "./elements/Error";
import Loading from "./elements/Loading";
import "./SASS/App.css";
import { useAppSelector } from "./store/state";




const ProductFull = lazy(() => import("./componets/ProducrFull"));
const Login = lazy(() => import("./componets/Login"));
const Register = lazy(() => import("../src/componets/Register"));
const Basket = lazy(() => import("./componets/Basket"));
const Product = lazy(() => import("./componets/Product"));
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/*  <Route path="/product" element={<Product />} /> */}
            <Route path="/basket" element={<Basket />} />
            <Route
              path="/product"
              element={
                <Isauth>
                  <Product />
                </Isauth>
              }
            ></Route>
            <Route path="/product/:title" element={<ProductFull />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productinfo" element={<ProductFull />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;


const Isauth:FC<any> = ({ children }) => {
  const loacation = useLocation();
  const { users } =  useAppSelector((state) => state.data);
  if (users.length===0) {
  
    return <Navigate to="/login" state={{ form: loacation }} replace />;
  }
    else if(users[0].isLoggedIn===false) 
  {
 
     return <Navigate to="/login" state={{ form: loacation }} replace />;
  }
  return children;
};



