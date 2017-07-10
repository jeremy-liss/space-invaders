import React from 'react'

const getImageSrc = (props) => {
   if (props.open){
    return props.image2
  }
  else {
    return props.image1
  }
}

const App = (props)=> {

  return (
    <div>
      <div id="header">
        <img src='../images/power.jpg' />
      </div>
      {props.cols.map((row)=>{
        return (
          <div id="invaders" style={props.invadersPosition}>
            {props.row1.map((invader)=>{
              let src = getImageSrc(props)
              return (
                <div className="invader">
                  {invader && <img src={props.invaderImage} />}
                </div>
              )
            })}
          </div>
        )
      })}
        <div id="character" style={props.characterPosition}>
          <img src="../images/character.jpg" />
      </div>
    </div>
  )
}

export default App
