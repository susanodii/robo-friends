import { createContext, useEffect, useState } from 'react'

// import { robotData } from '../Data/robotData'

const RobortContext = createContext()

export const RobortProvider = ({ children }) => {
  // const [robots, setRobots] = useState(robotData)
  // console.log(robots);

  const [robots, setRobots] = useState([])//state for manupulation
   const [data, setData] = useState(null) //state for fall back
   
   useEffect(()  => {
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json() )
   .then(data =>{
    setRobots(data)  //this a global state for manupulation
    setData(data)
   })
  } , [])
 
 
  const onSearchChange = (e) => {
    const filteredRobots = data.filter(robots =>{
      return robots.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setRobots(filteredRobots)
    if(e.target.value.length < 1)
    setRobots(data)
  }
 
 
  return (
    <RobortContext.Provider
      value={{
        robots,
        onSearchChange,
      }}
    >
      {children}
    </RobortContext.Provider>
  )
}

export default RobortContext
