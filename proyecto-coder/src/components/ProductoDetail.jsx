import { Link, useParams } from "react-router-dom"
import productos from '../productos'
import "./style.css"

function ProductoDetail({nombre,precio,descripcion,categoria,id}) {
    const {idItem} = useParams();
    const producto = productos.find(prod => prod.id === parseInt(idItem));

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default ProductoDetail