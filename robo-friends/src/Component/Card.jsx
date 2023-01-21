import {FaHeart} from 'react-icons/fa'
import React from 'react'

function Card({item}) {
  const cYear = new Date().getFullYear()
  return (
    <div>
     <div id='fix' className='tc mt4  ml4 bg-light-blue fr-l pa3  ma3 grow bw2 shadow-2'>
      {/* <div className='tc mt4 bg-light-blue fr-1 pa3 ma3 grow bw2 shadow-2'> */}
        {/* <img src={`https://robohash.org/${item.username}?set=set4`} alt='random image of Robort' /> */}
        <img src={`https://robohash.org/${item.userName}?set=set4`} alt='random robot' />
        <h2>{item.name}</h2>
        <p>{item.email}</p>
      </div>
      
      <footer className="app-footer">Random Robots $copy; {cYear} | made with <FaHeart style={{color :'red'}}/> from WTF2023 </footer>

    </div>
  )
}

export default Card
