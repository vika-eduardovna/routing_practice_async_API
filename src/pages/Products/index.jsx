import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';

export default function Products() {
    
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    
    //const category = 'jewelery'

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(resp => resp.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            {
                products.map(prod => <ProductCard key={prod.id} {...prod}/>)
            }
        </div>
    )
}
