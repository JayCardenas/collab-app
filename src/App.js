import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <div className="container">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </div>
//   );
// }

class App extends Component {
  state = {
    page: "home",
  };

  message = () => {
    console.log("Hello World!");
    this.setState({ page: 1 });

    console.log("Page: ", this.state.page);
  };

  render() {
    return (
      <div className="App">
        <NavBar
          onHome={this.homePage}
          page={this.state.page}
          setPage={this.setPage}
        />
        <div className="container">{this.currentPage()}</div>
        <div className="container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
  }

  setPage = (page) => {
    console.log("Setting page --> ", page);
    this.setState({ page: page });
  };

  homePage = () => {
    console.log("Our home page");

    this.setState({ page: 1 });
  };

  aboutPage = () => {
    console.log("Our about us page");
    this.setState({ page: 1 });
  };

  currentPage() {
    return this.state.page === "home" ? (
      <h1>Home Page</h1>
    ) : (
      <h1>About Page</h1>
    );
  }

  // homePage() {
  //   console.log("Printing out the home page");
  //   var homePageValue = 1;
  //   this.setState({ page: homePageValue });
  // }

  printOutPage() {
    console.log("Printing out the page");
  }
}

export default App;
