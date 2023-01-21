import Cardlist from './Cardlist'
import {FaHeart} from 'react-icons/fa'
import { RobortProvider } from './Context/RobortContext'
import SeachInput from './Component/SeachInput'
// import Card from "./Component/Card";

function App() {
  const cYear = new Date().getFullYear()

  return (
    <>
      <RobortProvider>
        <div className="tc ">
          <h1 className=" f1 white pTitle">RANDOM ROBORTS APP</h1>
          <SeachInput />
        </div>
        <div className='push'>
          <Cardlist />
          
        </div>
        <footer className="app-footer">Random Robots $copy; {cYear} | made with <FaHeart style={{color :'red'}}/> from WTF2023 </footer>
        {/* <Card/> */}
      </RobortProvider>

    
    </>
  )
}

export default App
