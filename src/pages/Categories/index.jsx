import React, { useEffect, useState } from 'react'
import CategoryCard from '../../components/CategoryCard'
import s from './style.module.sass'


export default function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(resp => resp.json())
      .then(data => setCategories(data))
  })
  return (
    <div className={s.container}>
      {
        categories.map(category => <CategoryCard key={category} category={category} />)
      }
    </div>
  )
}
