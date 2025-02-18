import { Link } from "react-router-dom";
import classes from './style.module.css'

function MainNav() {
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <ul className={classes.list}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MainNav;
