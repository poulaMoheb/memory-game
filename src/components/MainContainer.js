import React, { useState } from 'react'
import ServerConnection from './ServerConnection'
import Cart from './Cart'

function MainContainer(props) {  
  return (
    <>
      <div className='scoring'>
        <h6><span>High Score :</span>{props.highScore}</h6>
        <h6><span>Score:</span>{props.score}</h6>
      </div> 
      <ServerConnection 
        amount={props.hardness}
        pokes={props.pokes} setPokes={props.setPokes}
        chosenOnes={props.chosenOnes} setChosenOnes={props.setChosenOnes}
        highScore={props.highScore} setHighScore={props.setHighScore}
        score={props.score} setScore={props.setScore}
        handleAvatarClicked={props.handleAvatarClicked}
        newShuffle={props.newShuffle} setNewShuffle={props.setNewShuffle}
        rearrange={props.rearrange}
        // handleAvatarClicked={props.handleAvatarClicked}
      />
    </>
  )
}

export default MainContainer
