import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
const Countries = [
  { label: "Nagpur", value: 1},
  { label: "Kolhapur", value: 2 },
  { label: "Nashik", value: 3 },
  { label: "Pune", value: 4 },
  { label: "Kolhapur", value: 5 },
  { label: "Sangli", value: 6 },
  { label: "Yawatmal", value: 7 },
  { label: "Usmanabad", value: 8 },
  { label: "Satara", value: 9 },
  { label: "Latur", value: 10 },
  { label: "Gadchiroli", value: 11 },
  { label: "Beed", value: 12 },
  { label: "Raigarh", value: 13 },
  { label: "Ratnagiri", value: 14 }
];
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={Countries} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
export default App