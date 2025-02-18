import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h2>home</h2>
            <p>click here to vist <Link to='/product'>product page</Link></p>

            
        </>
    );
}

export default Home;
