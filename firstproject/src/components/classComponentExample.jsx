import { Component } from "react";

class ComponentExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // BINDING
    this.countHandleClick = this.countHandleClick.bind(this);
    this.countResetClick = this.countResetClick.bind(this);
  }

  countHandleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  countResetClick() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-md">
              <div className="card-body text-center">
                <h2 className="card-title mb-3">Class Component</h2>
                <p className="fs-4 mb-4">
                  Count: <span className="badge text-bg-dark">{this.state.count}</span>
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <button onClick={this.countHandleClick} className="btn btn-primary">
                    Increase
                  </button>
                  <button onClick={this.countResetClick} className="btn btn-outline-danger">
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
}

export default ComponentExample;
