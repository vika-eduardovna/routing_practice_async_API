import React from 'react'
import s from './style.module.sass'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  const link = `/product/${category}`
  return (

    <Link
      className={s.card}
      to={link}>
      <p>{category}</p>
    </Link>
  )
}
