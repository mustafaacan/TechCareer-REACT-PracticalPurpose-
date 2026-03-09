import React from 'react'
import HeaderFunction from './components/HeaderFunction'
import MainFunction from './components/MainFunction'
import { Navigate, Route, Routes } from "react-router-dom";
import FooterFunction from './components/FooterFunction';

// Redux Login
import LoginForm from './LoginForm';

export default function RouterBlog() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='d-flex flex-column justify-content-center '>
        <h2 className='text-center'>Router Area For Tests </h2>
        <code className='text-center'> 'URL or URL/' -- routes to header function</code>
        <br />
        <code className='text-center'> 'URL/index' -- routes to main function </code>
        </div>
        <Routes>
          <Route path={'/'} element={<HeaderFunction />} />
          <Route path={'/index'} element={<MainFunction />}/>
          <Route path={"/login"} element={<LoginForm/>} />
          <Route path={'/*'} element={<Navigate to={'/'} />}/>
        </Routes>
      <FooterFunction name='Mustafa Can'/>
      </div>
    </React.Fragment>
  )
}
