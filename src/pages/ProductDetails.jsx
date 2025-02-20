import { useParams } from "react-router-dom";

function ProductDetails() {
    const url = useParams()

    return (
        <>
            <h1>Product Details page</h1>
            <p>{url.productId}</p>
        </>
    );
}

export default ProductDetails;
