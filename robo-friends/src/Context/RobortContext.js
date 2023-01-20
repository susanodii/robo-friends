import { createContext, useEffect, useState } from 'react'

import { robotData } from '../Data/robotData'

const RobortContext = createContext()

export const RobortProvider = ({ children }) => {
  const [robots, setRobots] = useState(robotData)
  // console.log(robots);
  return (
    <RobortContext.Provider
      value={{
        robots,
      }}
    >
      {children}
    </RobortContext.Provider>
  )
}

export default RobortContext
