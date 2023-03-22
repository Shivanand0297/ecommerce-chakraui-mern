// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar/>
        <main>
          
        </main>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App