import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import api from '../../services/api';

import './styles.scss';

interface ProductParams {
  product: string;
}

interface ProductItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const Product: React.FC = () => {
  const history = useHistory();

  const { params } = useRouteMatch<ProductParams>();
  const [product, setProduct] = useState<ProductItem>();

  const [title, setTitle] = useState(product?.title || '');
  const [quantity, setQuantity] = useState(product?.quantity || '');
  const [price, setPrice] = useState(product?.price || '');

  useEffect(() => {
    if(params.product){
      api.get(`product/${params.product}`).then(response => {
        setProduct(response.data);
        setTitle(response.data.title);
        setQuantity(response.data.quantity);
        setPrice(response.data.price);
      });
    }
    
  }, [params.product])

  async function handleAddProduct() {
    await api.post('products', {
        title,
        price,
        quantity
    });

    history.push("/")
  }

  async function handleEditProduct(id: any) {
    await api.put(`product/${id}`, {
        title,
        price,
        quantity
    });

    history.push("/")
  }


  return (
    <section className="product container">
      <h1>Produto</h1>
      <div className="form">
        <div className="input">
          <p>Nome:</p>
          <input 
            type="text"
            placeholder="Nome"
            defaultValue={params.product ? product?.title : ''}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="input">
        <p>Preço:</p>
          <input 
            type="text"
            placeholder="Preço"
            defaultValue={params.product ? product?.price : ''}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="input">
          <p>Quantidade:</p>
          <input 
            type="text"
            placeholder="Quantidade"
            defaultValue={params.product ? product?.quantity : ''}
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
        
          {params.product ? (
            <button type="submit" onClick={() => handleEditProduct(product?.id)}>
             <p>Editar Produto</p>
            </button>
          ): (
            <button type="submit" onClick={handleAddProduct}>
             <p>Adicionar Produto</p>
            </button>
          )}
        
      </div>
    </section>
    
  )
}

export default Product;