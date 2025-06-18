import { Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Error404 from "./pages/Error404"
import Altares from "./pages/Altares"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/altares" element={<Altares />} />
      </Routes>
    </>
  )
}

export default App
