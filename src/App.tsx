import { Banner } from "./components/Banner"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { Footer } from "./components/Footer"


function App() {

  return (
    <div className="main-container">
      <Header />
      <Banner />
      <Products />
      <Footer />
    </div>
  )
}

export default App
