import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <div>This is a products</div>
            <Link to="/">Dashboard</Link>
        </div>
    );
}

export default Products;