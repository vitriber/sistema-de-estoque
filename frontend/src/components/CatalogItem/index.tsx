import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi'
import { IProduct } from '../../store/modules/product/types';
import api from '../../services/api';

interface CatalogItemProps {
    product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {

    // const handleRemoveProduct = useCallback(() => {
    //     dispatch(removeProduct(product.id));
    // }, [dispatch, product]);

    async function handleRemoveProduct(id: any) {
        await api.delete(`product/${id}`);
    }
    
    return (
         <tr 
            key={product.id}
         >
            <td style={{padding: "10px"}}>{product.title}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            

            <td>
                <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                >
                <p>Editar</p>
                </Link>   
            </td>
            <td>
                 <FiTrash 
                    size={16}
                    onClick={() => handleRemoveProduct(product.id)}
                />
            </td>
        </tr>
    );
}

export default CatalogItem;