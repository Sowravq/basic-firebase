import { Link } from "react-router-dom";
 

 

const Heder = () => {
    return (
        <div>
           <Link to="/">Home</Link>
           <Link to="/login">Login</Link>
        </div>
    );
};

export default Heder;