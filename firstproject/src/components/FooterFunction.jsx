import React from 'react'

export default function FooterFunction(props) {
  return (
    <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
              <h3>Footer Function from Router</h3>
              <p>
                Welcome back <span style={{ color: 'blue' }}>{props.name}</span>
              </p>
          </div>
        </div>
    </div>
  )
}
