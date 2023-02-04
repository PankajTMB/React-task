import {Link} from "react-router-dom";
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav_bar">
                        <div className="logo">
                            <h1>
                                Pankaj
                            </h1>
                        </div>
                        <ul className="nav_list">
                            <li className="nav_item">
                                <Link to="bid-price">Bid Price</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="table-data">Table Data</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;