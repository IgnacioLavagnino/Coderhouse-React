import { Link } from "react-router-dom"
import "./style.css"

function ProductoItem({nombre,precio,id}) {
    return (
        <div className="card">
            <Link to={`/item/${id}`}>
                <h2>{nombre}</h2>
                <p>Precio: ${precio}</p>
            </Link>
        </div>
    )
}

export default ProductoItem