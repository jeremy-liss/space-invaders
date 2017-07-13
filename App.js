import React from 'react'

const App = (props)=> {

  return (
    <div id='main'>
      <div id="header">
        <img src='../images/power.jpg' id="banner" />
      </div>
      <div id="header">
        <h4>Score: {props.score}</h4>
      </div>
      {props.allDead ? <h1>Damned Good Shooting!</h1> :
        props.invaders.map((row, i)=>{
          return (
            <div id="invaders" style={props.invadersPosition} key={i}>
              {row.map((invader, i)=>{
                return (
                  <div className="invader" id={invader.id} key={i}>
                    {invader.alive && <img src={props.invaderImage} />}
                  </div>
                )
              })}
            </div>
          )
        })
      }
      <div>
        <div id="shot" style={props.shot}></div>
      </div>
      <div id="character" style={props.characterPosition}>
        <img src="../images/character.jpg" />
      </div>
    </div>
  )
}

export default App
