import React from 'react';
import {useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import SUPPORT_IMAGES from './images.js'

function App() {
  const [supImg, setSupImg] = useState(SUPPORT_IMAGES.reo)
  const [supTxt, setSupTxt] = useState("Click to choose your support")
  const [supName, setSupName] = useState("")
  const [rolledNumber, setRolledNumber] = useState(0)

  const floatToInt = (value:number) => {
    return value | 0;
  }

  const handleClick = () => {
    const rnd = floatToInt(1+Math.random() * 20);
    setRolledNumber(rnd);
    if(rnd === 1){
      setSupImg(SUPPORT_IMAGES.teemo)
      setSupName("Teemo")
      setSupTxt("You know you deserve this...")
    }else if(rnd > 1 && rnd < 5){//velkoz, xerath, lux, janna, karma, soraka, senna, yuumi
      const supChoice = floatToInt(1+Math.random() * 8);
      switch(supChoice){
        case 1:
          setSupImg(SUPPORT_IMAGES.velkoz)
          setSupName("Vel'koz")
          break;
        case 2:
          setSupImg(SUPPORT_IMAGES.xerath)
          setSupName("Xerath")
          break;
        case 3:
          setSupImg(SUPPORT_IMAGES.lux)
          setSupName("Lux")
          break;
        case 4:
          setSupImg(SUPPORT_IMAGES.janna)
          setSupName("Janna")
          break;
        case 5:
          setSupImg(SUPPORT_IMAGES.karma)
          setSupName("Karma")
          break;
        case 6:
          setSupImg(SUPPORT_IMAGES.soraka)
          setSupName("Soraka")
          break;
        case 7:
          setSupImg(SUPPORT_IMAGES.senna)
          setSupName("Senna")
          break;
        case 8:
          setSupImg(SUPPORT_IMAGES.yuumi)
          setSupName("yuumi")
          break;
      }
      setSupTxt("Be nowhere near the enemy this game...")
    }else if(rnd >= 5 && rnd < 10){//morgana, zyra, lulu, sona, ashe, tahm, brand, renata, bard, blitz, veigar, zilean 
      const supChoice = floatToInt(1+Math.random() * 12);
      switch(supChoice){
        case 1:
          setSupImg(SUPPORT_IMAGES.brand)
          setSupName("Brand")
          break;
        case 2:
          setSupImg(SUPPORT_IMAGES.morgana)
          setSupName("Morgana")
          break;
        case 3:
          setSupImg(SUPPORT_IMAGES.zyra)
          setSupName("Zyra")
          break;
        case 4:
          setSupImg(SUPPORT_IMAGES.lulu)
          setSupName("Lulu")
          break;
        case 5:
          setSupImg(SUPPORT_IMAGES.sona)
          setSupName("Sona")
          break;
        case 6:
          setSupImg(SUPPORT_IMAGES.ashe)
          setSupName("Ashe")
          break;
        case 7:
          setSupImg(SUPPORT_IMAGES.tahm)
          setSupName("Tahm Kench")
          break;
        case 8:
          setSupImg(SUPPORT_IMAGES.renata)
          setSupName("Renata Glac")
          break;
        case 9:
          setSupImg(SUPPORT_IMAGES.bard)
          setSupName("Bard")
          break;
        case 10:
          setSupImg(SUPPORT_IMAGES.blitz)
          setSupName("Blitzcrank")
          break;
        case 11:
          setSupImg(SUPPORT_IMAGES.veigar)
          setSupName("Veigar")
          break;
        case 12:
          setSupImg(SUPPORT_IMAGES.zilean)
          setSupName("Zilean")
          break;
      }
      setSupTxt("You get some rope this game. Don't hang yourself with it...")
    }else if(rnd >= 10 && rnd < 15){//taric, pyke, swain, pantheon, braum, rakan, galio, zac
      const supChoice = floatToInt(1+Math.random() * 9);
      switch(supChoice){
        case 1:
          setSupImg(SUPPORT_IMAGES.taric)
          setSupName("Taric")
          break;
        case 2:
          setSupImg(SUPPORT_IMAGES.pyke)
          setSupName("Pyke")
          break;
        case 3:
          setSupImg(SUPPORT_IMAGES.swain)
          setSupName("Swain")
          break;
        case 4:
          setSupImg(SUPPORT_IMAGES.pantheon)
          setSupName("Pantheon")
          break;
        case 5:
          setSupImg(SUPPORT_IMAGES.braum)
          setSupName("Braum")
          break;
        case 6:
          setSupImg(SUPPORT_IMAGES.rakan)
          setSupName("Rakan")
          break;
        case 7:
          setSupImg(SUPPORT_IMAGES.galio)
          setSupName("Galio")
          break;
        case 8:
          setSupImg(SUPPORT_IMAGES.zac)
          setSupName("Zac")
          break;
        case 9:
          setSupImg(SUPPORT_IMAGES.maokai)
          setSupName("Maokai")
          break;
      }
      setSupTxt("Your team is relying on you to make plays this game. Don't let them down...")
    }else if(rnd >= 15 && rnd < 20){//alistar, leona, thresh, poppy, sett, shen
      const supChoice = floatToInt(1+Math.random() * 6);
      switch(supChoice){
        case 1:
          setSupImg(SUPPORT_IMAGES.alistar)
          setSupName("Alistar")
          break;
        case 2:
          setSupImg(SUPPORT_IMAGES.leona)
          setSupName("Leona")
          break;
        case 3:
          setSupImg(SUPPORT_IMAGES.thresh)
          setSupName("Thresh")
          break;
        case 4:
          setSupImg(SUPPORT_IMAGES.poppy)
          setSupName("Poppy")
          break;
        case 5:
          setSupImg(SUPPORT_IMAGES.sett)
          setSupName("Sett")
          break;
        case 6:
          setSupImg(SUPPORT_IMAGES.shen)
          setSupName("Shen")
          break;
      }
      setSupTxt("YOU ARE THE ENGAGE. BE THE ENGAGE.")
    }else if(rnd === 20){//malphite
      setSupImg(SUPPORT_IMAGES.malphite)
      setSupName("Malphite")
      setSupTxt("The team fights when you say they fight!")
    }  
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={supImg} className="App-logo" alt='logo'/>
        {rolledNumber > 0 && <h3>{rolledNumber}: {supName}</h3>}
        <p>
          {supTxt}
        </p>
        <Button variant="contained" onClick={handleClick}>Roll D20</Button>
      </header>
    </div>
  );
}

export default App;
