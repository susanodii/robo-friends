import React, {useContext} from 'react'

import RobortContext from '../Context/RobortContext'

function SeachInput() {
  
  const {onSearchChange} = useContext(RobortContext)
  
  
  return (
    <div>
      <input
        className="pa2 bg-lightest-blue b--light-blue br2"
        type="text"
        placeholder="Search for a robort"
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SeachInput
