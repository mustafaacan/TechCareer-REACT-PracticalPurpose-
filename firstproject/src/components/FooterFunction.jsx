import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { logout } from '../authSlice';


/*CAUTION : Login will be reflected to footer component correctly but once the URL changed, state will be restart since the page refreshed
In real time projects, there are several methods to prevent the problem such 
1) Not using In-Memory state
2) keeping the access session info permanently as "access token" or session cookie on browser (localStorage, sessionStorage, httpOnly cookie)
3) Avoiding page refreshing by the combination of session persist , app boot restore and router navigation
*/


export default function FooterFunction(props) {


  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
              <h3>Footer Function from Router</h3>
              <p>
                Welcome back <span style={{ color: 'blue' }}>{props.name}</span>
              </p>
              {isAuthenticated ? (
                <div>
                <p>
                Welcome back <span style={{ color: 'blue' }}>{user.username}</span>
                </p>
                <button className="btn btn-primary" onClick={()=>dispatch(logout())}>logout</button>
                </div>
              ) : <p>
                Please Log In
              </p>}
              
          </div>
        </div>
    </div>
  )
}
