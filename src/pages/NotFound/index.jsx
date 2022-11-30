import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <p>404 Error Page not found </p>
      <p>Go to <Link to='/'>home page</Link></p>
    </div>
  )
}
