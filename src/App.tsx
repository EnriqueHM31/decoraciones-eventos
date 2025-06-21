import { Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Error404 from "./pages/Error404"
import Altares from "./pages/Altares"
import Footer from "@/components/Footer"
import { Toaster } from "sonner";
import AreasPrincipales from "./pages/AreasPrincipales"
import Eventos from "./pages/Eventos"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/altares" element={<Altares />} />
        <Route path="/areas-principales" element={<AreasPrincipales />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>

      <Footer />
      <Toaster
        position="bottom-center"
        richColors
        toastOptions={{
          style: {
            background: "#1a1a1a",
            color: "#fff",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            padding: "10px",
            borderRadius: "10px",
          },
        }}
        expand={true}
        mobileOffset={10}
        visibleToasts={3}
        containerAriaLabel="toast-container"
        duration={5000}
        hotkey={["shift", "enter"]}
        dir="ltr"
        swipeDirections={["right", "left"]}
        gap={10}
        invert={false}

      />
    </>
  )
}

export default App
