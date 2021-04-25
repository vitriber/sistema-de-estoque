import React, { useEffect, useState } from 'react';
import CatalogItem from '../../components/CatalogItem';
import api from '../../services/api';
import { IProduct } from '../../store/modules/cart/types';

import './styles.scss';

const Catalog: React.FC = () => {
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    console.log(catalog);

    useEffect(() => {
        api.get('products').then( response => {
            setCatalog(response.data);
        })
    }, []);

    return (
        <section className="task-list container">
            <header>
            <h2>Meus produtos</h2>
    
            <div className="input-group">
                <button type="submit" data-testid="add-task-button">
                    <p>Adicionar Produto</p>
                </button>
            </div>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                            {catalog.map(product => (
                                <CatalogItem key={product.id} product={product} />
                            ))}
                    </tbody>
                </table>
            </main>
        </section>
    );
}

export default Catalog;