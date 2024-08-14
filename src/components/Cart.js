import React from 'react'
import style from '../css/cart.module.css'


function Cart(props) {
  let id=String(props.id)
  return (
    <div className={style.container}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.replace(/,/g,'')}.png`}></img> 
      <p>{props.poke.name}</p>
    </div>
  )
}

export default Cart
