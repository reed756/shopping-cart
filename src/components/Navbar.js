const Navbar = (props) => {
    return (
        <div>
            <nav className={props.class}>
                <ul className={props.class}>
                    <li>
                        <a 
                            href={props.homeUrl}
                        >
                            {props.home}
                        </a>
                    </li>
                    <li>
                        <a 
                            href={props.shopUrl}
                        >
                            {props.shop}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar