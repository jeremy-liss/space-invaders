import React from 'react'

const App = (props)=> {

  return (
    <div id='main'>
      <div id="header">
        <img src='../images/power.jpg' id="banner" />
      </div>
      <div id="header">
        <h3>Score: {props.score} | Lives: {props.lives}</h3>
      </div>
      {props.invaders.map((row, i)=>{
          return (
            <div id="invaders" style={props.invadersPosition} key={i}>
              {row.map((invader, i)=>{
                return (
                  <div className="invader" id={invader.id} key={i}>
                    {invader.alive && <img src={invader.activeImage} />}
                  </div>
                )
              })}
            </div>
          )
        })
      }
      <div id="bomb" style={props.bomb}></div>
      <div id="shot" style={props.shot}></div>
      <div id="player" style={props.player.style}>
        {props.playerHit ? <img src={props.player.image2} /> : <img src={props.player.image1} />}
      </div>
    </div>
  )
}

export default App
