import './App.css'
import { Suspense } from 'react'
import router from './routes'
import {RouterProvider} from "react-router"
function App() {

  return (
    <>
     <Suspense fallback={<div>Vui lòng chờ...</div>}>
        <RouterProvider router={router}/>
     </Suspense>
    </>
  )
}

export default App
