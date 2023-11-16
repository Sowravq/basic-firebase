import { Outlet } from "react-router-dom";
import Heder from "../components/heder/Heder";

 

const Layout = () => {
    return (
        <div>
            <Heder></Heder>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;