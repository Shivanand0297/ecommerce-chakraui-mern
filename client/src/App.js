// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Products from './pages/Products'
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/products' element={<Products/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App