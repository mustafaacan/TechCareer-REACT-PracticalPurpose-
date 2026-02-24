import React from 'react'
import HeaderFunction from './components/HeaderFunction'
import MainFunction from './components/MainFunction'
import { Navigate, Route, Routes } from "react-router-dom";
import FooterFunction from './components/FooterFunction';

export default function RouterBlog() {
  return (
    <React.Fragment>
      <div className='container'>
        <h2 className=''>Router Area For Tests </h2>
        <code> '/' -- routes to header function</code>
        <br />
        <code> '/index' -- routes to main function </code>
        <Routes>
          <Route path={'/'} element={<HeaderFunction />} />
          <Route path={'/index'} element={<MainFunction />}/>
          <Route path={'/*'} element={<Navigate to={'/'} />}/>
        </Routes>
      <FooterFunction name='Mustafa Can'/>
      </div>
    </React.Fragment>
  )
}
