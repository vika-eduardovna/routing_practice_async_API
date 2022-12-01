import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './style.module.sass'

export default function DescriptionCard() {
  const [products, setProducts] = useState({ status: 'loading...' });
  const { id } = useParams();

  useEffect(() => {
    const handler = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await response.text();
      if (data === '') {
        console.log('Error!');
        setProducts({
          status: 'error'
        })
      } else {
        data = JSON.parse(data);
        setProducts({
          status: 'loaded',
          data
        });
      }
    };
    handler()
  }, []);


  const render = () => {
    if (products.status === 'loading') {

      return <p>Data id loading...</p>
    } else if (products.status === 'loaded') {

      let { image, title, category, price, description } = products.data;
      return <div className={s.card}>
        <div className={s.img_block}>
          <img src={image} alt={title} />
        </div>
        <div className={s.info_block}>
          <h2>({category}) {title}</h2>
          <p>{description}</p>
          <p>price: <span>{price}</span></p>
        </div>
      </div>
    } else if (products.status === 'error') {
      return <p>Error</p>
    }
  }



  return (
    render()
  )
}
