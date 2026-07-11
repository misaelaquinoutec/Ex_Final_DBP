import { useEffect, useState } from 'react';
import { apiservises } from '../services/api';
import type { PageProductsResponse } from '../types/types';

export default function Products() {
  const [data, setData] = useState<PageProductsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    apiservises.getProducts(page, 8)
      .then(res => setData(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div>
      <header>
        <h1>Productos</h1>
        <p></p>
      </header>
      
      {loading ? (
        <div>
          <p>Loading products...</p>
        </div>
      ) : (
        <>
          <div>
            {data?.content.map(product => (
              <div key={product.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                <div>
                  <img 
                    src={product.imageUrl || ''} 
                    alt={product.name}
                    width={200}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '';
                    }}
                  />
                  <span>
                    Availability: {product.availability}
                  </span>
                </div>
                <div>
                  <span>Category: {product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div>
                    <span>Price: ${product.price.toFixed(2)}</span>
                    <br />
                    <button disabled={product.availability === 'AGOTADO'}>
                      {product.availability === 'AGOTADO' ? 'sin stock' : 'añade al carrito'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {data?.content.length === 0 && (
              <div>
                <p>No products found .</p>
              </div>
            )}
          </div>
          
          {data && data.totalPages > 1 && (
            <div>
              <button 
                disabled={data.first} 
                onClick={() => setPage(p => Math.max(0, p - 1))}
              >
                Previous
              </button>
              <span> Page {data.number + 1} of {data.totalPages} </span>
              <button 
                disabled={data.last} 
                onClick={() => setPage(p => p + 1)}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
