import React, { useContext } from 'react'

import Card from './Component/Card'
import RobortContext from './Context/RobortContext'

// import Card from './Component/Card'


// import React from 'react'

function Cardlist() {
  const { robots } = useContext(RobortContext)
  console.log(robots)
  return (
    <>
      {robots.length > 0 ? (
        robots.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <h1 className="f2 tc white">No item Found</h1>
      )}

      
    </>
  )
}

export default Cardlist
