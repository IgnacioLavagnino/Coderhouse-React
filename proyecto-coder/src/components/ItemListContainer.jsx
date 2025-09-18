import productos from '../productos'
import ProductoItem from './ProductoItem'

function ItemListContainer() {
    return (
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
            {productos.map(prod => (
                <ProductoItem key={prod.id} {...prod}/>  
            ))}
        </div>
    )
}

export default ItemListContainer