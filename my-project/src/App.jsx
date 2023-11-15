
import Navbar from "./componentes/navbar/index.jsx"
import Card from "./componentes/card/index.jsx"
import Home from "./Pages/Home/index.jsx"
import { useRoutes, BrowserRouter } from 'react-router-dom'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
  ])
  return routes
}




function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </>

  )
}

export default App
