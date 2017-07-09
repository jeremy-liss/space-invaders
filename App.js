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
      <div id="invaders">
        <img src='../images/power.jpg' />
      </div>
      {props.cols.map((row)=>{
        return (
          <div id="invaders">
            {props.row1.map((invader)=>{
              let src = getImageSrc(props)
              return (
                <div className="invader">
                  {invader && <img src={src} />}
                </div>
              )
            })}
          </div>
        )
      })}
        <div id="character" style={props.divStyle}>
          <img src="../images/character.jpg" />
      </div>
    </div>
  )
}

export default App
