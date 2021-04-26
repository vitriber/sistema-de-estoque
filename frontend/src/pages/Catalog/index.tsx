import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CatalogItem from '../../components/CatalogItem';
import api from '../../services/api';
import { getProducts } from '../../store/modules/product/actions';

import { IProduct } from '../../store/modules/product/types';

import './styles.scss';

const Catalog: React.FC = () => {

    const dispatch = useDispatch();
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    const history = useHistory();

    useEffect(() => {
        api.get('products').then( response => {
            setCatalog(response.data);
        })
        dispatch(getProducts({
            items: catalog
        }));
    }, [catalog, dispatch]);

    return (
        <section className="catalog container">
            <header>
            <h2>Meus produtos</h2>
    
            <div className="input-group">
                <button type="submit" onClick={() => history.push('/product')} >
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