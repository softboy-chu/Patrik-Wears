import React from 'react'
import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/timbuAPI';

export default function Products() {
  const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchProducts(page)
            .then(data => {
                setProducts(data.products);
                setLoading(false);
                console.log(data.products, "chu's things");
            })
            .catch(error => {
                setError(error);
                setLoading(false);
                console.log(error);
            });
    }, [page]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
  return (
    <>
      
    </>
  )
}
