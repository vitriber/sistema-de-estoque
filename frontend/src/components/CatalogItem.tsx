import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IState } from '../store';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
    product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
    const dispatch = useDispatch();

    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failedStockCheck.includes(product.id);
    })
    
    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product));
    }, [dispatch, product]);
    
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
                <button type="button" data-testid="remove-task-button" >
                    Excluir
                </button>
            </td>
        </tr>
    );
}

export default CatalogItem;