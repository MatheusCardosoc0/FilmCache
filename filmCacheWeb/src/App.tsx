import { ToastContainer } from "react-toastify"
import { Routers } from "./Routes"
import 'react-toastify/dist/ReactToastify.css' 

function App() {

  return (
    <div>
      <ToastContainer bodyClassName={`bg-teal-500 text-black`} className='bg-transparent animate-rotate' theme="colored" progressStyle={{backgroundColor: 'teal'}} toastStyle={{backgroundColor: 'black'}} autoClose={3000} limit={3} />
      <Routers />
    </div>
  )
}

export default App


