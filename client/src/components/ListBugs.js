import * as React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
class ListBugs extends React.Component {
  state = {
    items: [],
    filters: {
      Notes: false,
      Search: false,
      Gallery: false,
      "User Settings": false
    },
    filteredItems: []
  };

  componentDidMount() {
    console.log("hi");
    axios.get("http://localhost:5000/api/bugs").then(res => {
      console.log(res.data);
      this.setState({ items: res.data });
    });
  }

  onChange = evt => {
    const name = evt.target.name;
    const checked = evt.target.checked;

    this.setState(prevState => {
      // We create a new object for filters
      const filters = {
        ...prevState.filters,
        [name]: checked
      };

      const activeFilterNames = Object.keys(filters).filter(
        filterName => filters[filterName]
      );

      const filteredItems = prevState.items.filter(item =>
        activeFilterNames.some(
          activeFilterName => activeFilterName === item.feature
        )
      );

      return {
        filters,
        filteredItems
      };
    });
  };

  renderCheckboxes() {
    return Object.keys(this.state.filters).map((name, index) => {
      return (
        <div className="form-group form-check">
          <label className="form-check-label" key={index}>
            <input
              onChange={this.onChange}
              type="checkbox"
              checked={this.state.filters[name]}
              name={name}
              className="form-check-input"
            />
            {name}
          </label>
        </div>
      );
    });
  }

  render() {
    const items = this.state.filteredItems.length
      ? this.state.filteredItems
      : this.state.items;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h2>Filter</h2>
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Feature
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">{this.renderCheckboxes()}</div>
                </div>
              </div>
            </div>
          </div>
          <ul className="col-9">
            {items.map(item => (
              <div key={item.id}>
                <div className="card">
                  <div className="card-header">
                    <h3>
                      <span>Feature: {item.feature}</span>
                    </h3>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>Submited By:</span>
                      <span>{item.submittedBy}</span>
                    </h5>
                    <p className="card-text">description: {item.description}</p>
                    <div>
                      <span>Last Modified:</span>
                      <span>{item.modifiedDate}</span>
                    </div>
                    <div>
                      <span>Priority:</span>
                      <span>{item.priority}</span>
                    </div>
                    <div>
                      <span>Staus:</span>
                      <span>{item.status}</span>
                    </div>
                    <div>
                      <span>Submited By:</span>
                      <span>{item.submittedBy}</span>
                    </div>
                    <div>
                      <span>Submited Date</span>
                      <span>{item.submittedDate}</span>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListBugs;
