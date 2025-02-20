import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function navHandler () {
        navigate('/product')
    }

    return (
        <>
            <h2>home</h2>
            <p>
                click here to vist <Link to="/product">product page</Link>

            </p>
            <button onClick={navHandler}>Navigate</button>
        </>
    );
}

export default Home;
