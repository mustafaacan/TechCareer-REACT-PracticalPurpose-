import { useState } from "react";

function FunctionComponentExample (props) {

  const [count, setCount] = useState(0); 

  const countHandleClick = () => {
    setCount(count+1);
  }

  const countResetClick = () => {
    setCount(0);
  }
    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-md">
              <div className="card-body text-center">
                <h2 className="card-title mb-3">Function Component</h2>
                <p className="fs-4 mb-4">
                  Count: <span className="badge text-bg-dark">{count}</span>
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <button onClick={countHandleClick} className="btn btn-primary">
                    Increase
                  </button>
                  <button onClick={countResetClick} className="btn btn-outline-danger">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FunctionComponentExample;
