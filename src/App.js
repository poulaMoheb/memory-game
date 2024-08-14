import style from './css/App.module.css';
import { useState } from 'react';
import MainContainer from './components/MainContainer';

function App() {
  let count
  // chosen pokes
  let [newShuffle,setNewShuffle]=useState([])
  let [chosenOnes,setChosenOnes]=useState([])
  let handleDropdown = (item) =>{
    setChosenHardness(item)
  }
  let [pokes,setPokes]=useState([])
  
  let handleStart = () =>{
    setStart(true)
  }
  const random = () =>{
    return pokes[Math.floor(Math.random()*pokes.length)]
  }
  const rearrange = () =>{
    for(let i=0; i<pokes.length;i++){
      let rand=random()
      setPokes([...pokes.splice(rand)])
      setNewShuffle([...newShuffle,rand])
      console.log(...pokes);
      setNewShuffle([...newShuffle])
    }
    setPokes(newShuffle)
    setStart(false)

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
    <div className={style.container}>
      <h1>HELLO, to the memory game</h1>
      <p>let's start</p>
      {!start&&<div>
        <select className={style.dropDown} onChange={(e)=>handleDropdown(e.target.value)} name='Hardness' id='hardnessDropDown'>
          {hardness.map((item)=>{
            return <option key={item.total} value={item.total}>{item.name}</option>
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
                        rearrange={rearrange}
                        />
      }
    </div>
  );
}

export default App;
