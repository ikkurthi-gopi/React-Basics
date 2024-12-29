import React from 'react'

function ArrayMethods() {
    let collections = ["cricket", "football", 12]
    let scores = ["20", "40", "25", "35"]
    let players = ["sehwag", "yuvi", "rohit", "kohli", 1, 5, 3, 18]
    let arr1 = [1, 2, 3, 4]
    let arr2 = [5, 4, 3, 2]
    let myNumbers = [0, 1, 2, 3, 4, 5, 6, 7]
    let arr = [1, 2, 3, 4];
    collections.push("pspk")
    collections.pop()
    collections.shift()
    collections.unshift("score", "info")
    let newplayes = collections.concat(scores)
    let newScores = players.join("-")
    let agplayers = players.slice(0, 5)
    let mergeArray = arr1.concat(arr2)
    let mergeArray2 = [...arr1, ...arr2]
    myNumbers.splice(0, 5)
    let inplayers= players.indexOf("rohit")
    let word ="this is a string type method"
    word.split("")
    let sample = "    gopi    "
    sample.trim()
    
    return (
        <div>
            {collections}<br />
            {newplayes}<br />
            {collections.length}<br />
            {newScores}<br />
            {mergeArray}<br />
            {mergeArray2}<br />
            {agplayers}<br/>
            {arr}<br />
            {inplayers}<br/>
            {word}<br/>
            {sample}<br/>
        </div>
    )
}

export default ArrayMethods
