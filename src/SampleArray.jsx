import React from 'react'

const SampleArray = () => {
    let sampleArray = ["Apple","Mango",35,{username:"gopi"}]

    let playersArray =[
        {
            cricket:"sehwag",
            tennis:"Sania",
            chess:"anand",
            movies:"PSPK"
        }
    ]
  return (
    <div>
      {sampleArray[0]}
      <div>
        {
            playersArray.map((item)=>{
                return(
                    <div>
                    <h1>my fav cricketer is {item.cricket}</h1>
                    <h1>my fav tennis player is {item.tennis}</h1>
                    <h1>my fav chess is {item.chess}</h1>
                    <h1>my fav hero is {item.movies}</h1>

                </div>
                );   
            })
        }
      </div>
    </div>
  )
}

export default SampleArray
