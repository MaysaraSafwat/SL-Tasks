import {NavLink} from "react-router-dom";

export default function Products (){
    return (<div>
        Products!!!
        <button>
        <NavLink to={`/createProduct`}>Add Product</NavLink>
        </button>
    </div>)
}