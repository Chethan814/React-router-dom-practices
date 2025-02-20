import { Link } from "react-router-dom";

const products = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
];

function Product() {
    return (
        <>
            <h2>Product page</h2>
            <ul className="list">
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                {product.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Product;
