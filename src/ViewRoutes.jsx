import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'
import Home from './pages/Home'






const ViewRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={
          <DefaultLayout >
            <Home />
          </DefaultLayout>
        }
        />

       
        <Route path='*' element={
          <DefaultLayout >
            eror
          </DefaultLayout>
        }
        />
      </Routes>
    </React.Fragment>
  )
}

export default ViewRoutes