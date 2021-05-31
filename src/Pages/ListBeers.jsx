import axios from 'axios';
import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class ListBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((res) => {
      // console.log(res.data);

      this.setState({
        beers: res.data,
      });
    });
  }

  render() {
    console.log(this.state.beers);

    return <div>
      <h1>hello world beers</h1>
      {this.state.beers.map((beer) => {
      return (
        //iteration 3
        <div>  
          <Link exact to={`/Beers/${beer._id}`}> {beer.name}</Link>  
        </div>
        
      )
    })}
    </div>
  }
}

// Step 1
// import React from 'react';
// // import { Link } from "react-router-dom"; ???
// import axios from 'axios';

// // const ListBeers = () => {
// //     axios
// //     .get("https://ih-beers-api2.herokuapp.com/beers")
// //     .then((res) => {
// //       // console.log(res.data);  make sure the data is showing up in the UI
// //     })

// //     return (
// //         <div>
// //           <h1>yolo BEER PAGE</h1>
// //         </div>
// //     )
// // }

// export default ListBeers;
