import React from 'react';

const Cart: React.FC = () => {
    const cart:any = [];

    return (
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {/* {cart.map(item => (
                    <tr key={item.product.id}>
                        <td>{item.product.title}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{(item.product.price * item.quantity).toFixed(2)}</td>
                        <td>
                            <button type="button" data-testid="remove-task-button" >
                                Editar
                            </button>
                        </td>
                        <td>
                            <button type="button" data-testid="remove-task-button" >
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    );
}

export default Cart;