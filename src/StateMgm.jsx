import React, { useEffect, useState } from 'react'

const StateMgm = () => {
    const [city, setCity] = useState("hyderabad");
    useEffect(() => {
        if (city === "hyderabad") {
            setCity("bangalore")
        } else {
            setCity("delhi")
        }
    }, [])

    return (
        <div>
            <h6>I live in {city}</h6>
        </div>
    )
}

export default StateMgm
