import Cardlist from './Cardlist'
// import Card from "./Component/Card";
import { RobortProvider } from './Context/RobortContext'
import SeachInput from './Component/SeachInput'
function App() {
  return (
    <>
      <RobortProvider>
        <div className="tc ">
          <h1 className=" f1 white pTitle">RANDOM ROBORTS APP</h1>
          <SeachInput />
        </div>
        <div>

          
        <Cardlist />
        </div>
        {/* <Card/> */}
      </RobortProvider>
    </>
  )
}

export default App
