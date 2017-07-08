import React from 'react'

const App = (props)=> {

  return (
    <div>
      {props.cols.map((row)=>{
        return (
          <div id="invaders">
            {props.row1.map((invader)=>{
              return (
                <div className="invader">
                  {invader && <img src={props.image} />}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default App
