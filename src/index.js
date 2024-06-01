import ReactDOM from "react-dom";
import App from "./components/App";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Cart from "./components/Cart";
import Form from "./components/Form";
import One from "./components/One";
import Two from "./components/Two";
import Error from "./components/Error";
import Cart1 from "./components/Cart1";

import "./Style.css";

//React routing start

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";

var projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
        
        {
            path: "",
            element: <Home></Home>,
          },
        {
        path: "aboutus",
        element: <Aboutus></Aboutus>,
      },
      
    
      {
        path: "Cart",
        element: <Cart></Cart>,
      },

    
    {
        path: "Login",
        element: <Login></Login>,
      },
      {
        path: "Form",
        element:<Form></Form>
      },

      {
        path: "One",
        element:<One></One>
      },
      {
        path: "Two",
        element:<Two x1="100"></Two>
      },

      {
        path: "Error",
        element:<Error></Error>
      },
      {
        path: "Main",
        element:<Main></Main>
      },
      {
        path: "Cart1",
        element:<Cart1></Cart1>
      },

    ]
  },

  
]);

//React routing end

// console.log(ReactDOM)
const ans = ReactDOM.createRoot(document.getElementById("root"));

//ans.render("hello world");
// var username="Admin"
// ans.render(<h1>xyz {username}</h1>
// );

// var product=(
//     <>
//     <div className="col-3">
//         <h2>Price 2000</h2>
//         <button>Add to cart</button>
//     </div>
//     <div className="col-3">
//         <h2>Price 2000</h2>
//         <button>Add to cart</button>
//     </div>
//     </>

// )
//ans.render(product);

ans.render(
    <RouterProvider router={projectroute}>

    </RouterProvider>
);
