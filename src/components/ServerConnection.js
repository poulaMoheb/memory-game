import React, { useEffect} from 'react'
import Cart from './Cart'
import style from '../css/serverConnection.module.css'
import {v4 as uuidv4} from 'uuid'
import { type } from '@testing-library/user-event/dist/type'

function ServerConnection(props) {
  function handleAvatarClicked(item){
    props.chosenOnes.find((element)=>element===item.name)?
    lost()
    :winRound(item)
  }
  let lost =()=>{
    console.log("you lost");
  }
   
  let winRound=(item)=>{
    props.setChosenOnes([...props.chosenOnes,item.name])
    props.setScore(props.score+1)
    props.highScore<=props.score?props.setHighScore(props.score+1):props.setHighScore(props.highScore)
    props.rearrange()
  }
    // API response receiver 
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${props.amount}/`)
      .then(response=>response.json())
      .then(data =>{
        props.setPokes(data.results)
      }) 
    }, [props.amount])

    return(
      <div className={style.container}>
      {props.pokes&&props.pokes.map(item=>(
         <button
          key={uuidv4()}
          onClick={()=>handleAvatarClicked(item)}>
           <Cart id={item.url.split("/").slice(-2)}
                 poke={item}
                 />
         </button>
              
      ))}
      </div>
    )
}

export default ServerConnection
