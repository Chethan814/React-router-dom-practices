import "./App.css";
import {
    createBrowserRouter,
    RouterProvider,
    // createRoutesFromElements,
    // Route,
} from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Product from "./pages/ProductPages";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

// const routeDef = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<Home />} />
//         <Route path="Product" element={<Product />} />

//     </Route>
// )

// const router = createBrowserRouter(routeDef)

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage/> ,
        children: [
            { path: "/", element: <Home /> },
            { path: "/contact", element: <Contact /> },
            { path: "/product", element: <Product /> },
            { path: "/product/:productId", element: <ProductDetails /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
