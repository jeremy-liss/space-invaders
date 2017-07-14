import React from 'react'

const App = (props)=> {

  return (
    <div id='main'>
      <div id="header">
        <img src='../images/power.jpg' id="banner" />
      </div>
      <div id="header">
        <h4>Score: {props.score} | Lives: {props.lives}</h4>
      </div>
      {props.invaders.map((row, i)=>{
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
      <div id="bomb" style={props.bomb}></div>
      <div id="shot" style={props.shot}></div>
      <div id="player" style={props.playerPosition}>
        <img src="../images/player.jpg" />
      </div>
    </div>
  )
}

export default App
