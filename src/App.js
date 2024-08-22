import style from './css/App.module.css';
import { useState } from 'react';
import MainContainer from './components/MainContainer';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import {awsExports} from './aws-exports'
Amplify.configure(awsExports)
function App() {
  // chosen pokes
  let [newShuffle,setNewShuffle]=useState([])
  let [chosenOnes,setChosenOnes]=useState([])
  let handleDropdown = (item) =>{
    setChosenHardness(Number(item))
  }
  let [pokes,setPokes]=useState([])
  
  let handleStart = () =>{
    setStart(true)
  }
  const random = (Arr) =>{
    return Arr[Math.floor(Math.random()*Arr.length)]
  }
  const rearrange = () =>{
    let shuffler=[]
    let shuffleList=[]
    for(let i=0;i<pokes.length;i++){
      shuffleList=[...shuffleList,i]
    }
    for(let i=0; i<pokes.length;i++){
      let rand=random(shuffleList)
      shuffler=[...shuffler,pokes[rand]]
      shuffleList=[...shuffleList.filter((e)=>e!==rand)]
    }
    setPokes(shuffler)
  }
  const reset = () =>{
    setStart(false)
    setScore(0)
    setPokes([])
    setChosenOnes([])
  }
  const hardness=[
    {
      name:'Easy',
      total:3
    },
    {
      name:'Normal',
      total:6
    },
    {
      name:'Hard',
      total:9 
    }]
  let [chosenHardness,setChosenHardness]=useState(3)
  let [start,setStart]=useState(false)
  // Gaming records 
  let [highScore,setHighScore]=useState(0)
  let [score,setScore]=useState(0)
  return (
    <Authenticator>
      {({signOut,user})=>(

        <div className={style.container}>
          <button onClick={signOut}>sign out</button>
      <h1>HELLO, to the memory game</h1>
      <p>let's start</p>
      {!start&&<div>
        <select className={style.dropDown} onChange={(e)=>handleDropdown(e.target.value)} name='Hardness' id='hardnessDropDown'>
          {hardness.map((item)=>{
            return <option key={item.total} value={Number(item.total)}>{item.name}</option>
          })}
        </select>
        <button className={style.startButton} onClick={()=>{handleStart()}}>Start</button>
      </div>}
      {start
      &&<MainContainer  highScore={highScore} setHighScore={setHighScore}
      score={score} setScore={setScore}
      pokes={pokes} setPokes={setPokes}
      chosenOnes={chosenOnes} setChosenOnes={setChosenOnes}
      hardness={chosenHardness}
      newShuffle={newShuffle} setNewShuffle={setNewShuffle}
      setStart={setStart}
      rearrange={rearrange}
      reset={reset}
      />
    }
    </div>
    )}
    </Authenticator>
  );
}

export default App;
