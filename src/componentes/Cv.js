import React, { Component } from "react";

class Cv extends Component {
  render() {
    return (
      <div style={{position:'absolute', width: '100%', height:'100%'}}>
        <object
            data={require('../docs/CV Gabriel Ledezma Mayo 2023.pdf')}
            type="application/pdf"
            width="100%"
            height="100%"
            >
            </object>
      </div>
    );
  }
}
export default Cv;
