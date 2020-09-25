import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

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
    page: 1,
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

  // currentPage() {
  //   return this.state.page;
  // }

  setPage = (page) => {
    console.log("Setting page --> ", page);
    this.setState({ page: page });
  };

  homePage() {
    console.log("Welcome to our home page");

    return <div className="container">Welcome to our home page</div>;
  }

  aboutPage() {
    return <div className="container">We are currently building up</div>;
  }

  // aboutPage = () => {
  //   console.log("Our about us page");
  //   this.setState({ page: 1 });
  // };

  currentPage() {
    switch (this.state.page) {
      case 0:
        return <h1>Admin Page</h1>;
        break;
      case 1:
        return this.homePage();
        break;
      case 2:
        return this.aboutPage();
        break;
      case 3:
        return <h1>Third Page</h1>;
        break;
      default:
        return <h1>First Page</h1>;
    }
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
