import  {Link, Outlet} from "react-router-dom";

function Layout(){
    return(
        <div className="layout">
            <nav>
                <ul>
                    <li>
                    <Link to={"/"}>Individuals</Link>
                    </li>
                    <li>
                    <Link to={"/species"}>Species</Link>
                    </li>
                    <li>
                    <Link to={"/sightings"}>Sightings</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
} 

export default Layout;