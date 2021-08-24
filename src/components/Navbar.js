const Navbar = (props) => {
    return (
        <div>
            <nav>
                <ul>
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