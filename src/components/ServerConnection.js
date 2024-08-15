import React, { useEffect, useState} from 'react'
import Cart from './Cart'
import style from '../css/serverConnection.module.css'
import {v4 as uuidv4} from 'uuid'
import { type } from '@testing-library/user-event/dist/type'

function ServerConnection(props) {
  let [highest,setHighest]=useState(false)
  let [loser,setLoser]=useState(false)
  let score=props.score
  
  function handleAvatarClicked(item){
    props.chosenOnes.find((element)=>element===item.name)?
    lost()
    :winRound(item)
  }
  let lost =()=>{
    setLoser(true)
    LostGame()
    // return(
    //   <div>
    //     <h4>You Lost!!</h4>
    //     <button onClick={()=>props.setStart(false)}>Try again</button>
    //   </div>
    // )
  }
   
  let winRound=(item)=>{
    props.setChosenOnes([...props.chosenOnes,item.name])
    score++
    props.setScore(props.score+1)
    // high score updating
    props.highScore<=props.score?props.setHighScore(props.score+1):props.setHighScore(props.highScore)
    console.log(props.score+1," ",props.amount);
    
    score===props.amount?setHighest(true):props.rearrange()
    console.log(score===props.amount);
    }
  let wonGame = () =>{
    return(
    <>
      <h1>Congrats You Won </h1>
      <button onClick={()=>props.reset()}>Play Again</button>   
    </>)
  }
  let LostGame = () =>{
    return(
    <>
      <h1>Hard Luck you lost </h1>
      <button onClick={()=>props.reset()}>Play Again</button>   
    </>)
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
      {props.pokes&&!highest&&!loser&&props.pokes.map(item=>(
         <button
          key={uuidv4()}
          onClick={()=>handleAvatarClicked(item)}>
           <Cart id={item.url.split("/").slice(-2)}
                 poke={item}
                 />
         </button>
      
      ))}
      {highest&&wonGame()}
      {loser&&LostGame()}
      </div>
    )
}

export default ServerConnection
