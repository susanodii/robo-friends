// import Card from "./Component/Card";
import { RobortProvider } from './Context/RobortContext'
import SeachInput from './Component/SeachInput'
import Cardlist from './Cardlist'
function App() {
  return (
    <>
      <RobortProvider>
        <div className="tc ">
          <h1 className=" f1 white pTitle">RANDOM ROBORTS APP</h1>
          <SeachInput />
        </div>
        <Cardlist />
        {/* <Card/> */}
      </RobortProvider>
    </>
  )
}

export default App
