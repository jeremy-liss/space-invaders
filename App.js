import React from 'react'

const App = (props) => {

  return (
    <div id='main'>
      <div id="header">
        <img src='../images/power.jpg' id="banner" />
      </div>
      <div id="header">
        <h3>Score: {props.score} | Lives: {props.lives}</h3>
      </div>
      {!props.gameOver ?
        <div>
          <div id='bonus' style={props.bonus.style}>{props.bonus.visible && <img src='../images/bonus.jpg' /> } {props.bonus.showPoints && <div>{props.bonus.points}</div>}</div>
          <Invaders invaders={props.invaders} invadersPosition={props.invadersPosition} />
          <div id="bomb" style={props.bomb}></div>
          <div id="shot" style={props.shot}></div>
          <div id="player" style={props.player.style}>
            {props.playerHit ? <img src={props.player.image2} /> : <img src={props.player.image1} />}
          </div>
        </div>
        :
        <div>
          <div id="invaders">
            <h1>GAME OVER</h1>
          </div>
          <div id="invaders">
            <h2><a href='#' onClick={() => props.restart()}>New Game</a></h2>
          </div>
        </div>
      }
    </div>
  )
}

const Invaders = (props) => {
  return (
    <div>
      {props.invaders.map((row, i) => {
        return (
          <div id="invaders" style={props.invadersPosition} key={i}>
            {row.map((invader, i) => {
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
    </div>
  )
}

export default App
