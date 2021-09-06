import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <nav className={props.class}>
                <ul className={props.class}>
                    <li>
                        <Link to="/">
                            {props.home}
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop">
                            {props.shop}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar