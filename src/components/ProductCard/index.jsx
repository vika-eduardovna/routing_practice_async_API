import React from 'react'
import s from './style.module.sass'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, image, title }) {
  const link = `/product/${id}`
  return (
    <Link
      className={s.card}
      to={link}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </Link>
  )
}
