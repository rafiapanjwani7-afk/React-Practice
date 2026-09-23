import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Courses from './pages/Courses'

const App = () => {
  return (
    <>
    <Navbar/>
<Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="./product" element={<Product/>}>
          <Route path='men' element={<Men/>} />
          <Route path='Women' element={<Women/>} />
          <Route path='Kids' element={<KIds/>} />
          </Route>
         <Route path='/course' element={<Courses/>} />
          <Route path='/course/:id' element={<CourseDetail/>} />
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App