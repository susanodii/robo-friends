import React from 'react'

function Card({item}) {
  return (
    <div>
      <div className='tc bg-light-blue dib pa3 ma3 grow bw2 shadow-2'>
        {/* <img src={`https://robohash.org/${item.username}?set=set4`} alt='random image of Robort' /> */}
        <img src={`https://robohash.org/${item.userName}?set=set4`} alt='random robot' />
        <h2>{item.name}</h2>
        <p>{item.email}</p>
      </div>
    </div>
  )
}

export default Card
