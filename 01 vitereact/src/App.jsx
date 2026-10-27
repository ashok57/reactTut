
import Chai from './chai'

function App(){

  const username = "IRONMAN"

  return (
    <div>
      {/* <></>  i can keep the div like this */}
      <Chai/>
      <h1>chai or react {username}</h1>

      {/* {} in this we write the evaluated expression which is the final outcome */}

      
      <p>test para is ready</p>
    </div>
  )
}

export default App;