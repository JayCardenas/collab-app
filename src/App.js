import React from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [ page, setPage]= React.useState(1);


  /* Function declaration
  currentPage(){
  }
  */

  // function expression
  const currentPage = () => {
    switch (page) {
      case 0:
        return <h1>Admin Page</h1>;
      case 1:
        return homePage();
      case 2:
        return aboutPage();
      case 3:
        return <h1>Third Page</h1>;
      default:
        return <h1>First Page</h1>;
    }
  }

  const homePage = () => {
    console.log("Welcome to our home page");

    return <div className="container">Welcome to our home page</div>;
  }

  const aboutPage = () => {
    return <div className="container">We are currently building up</div>;
  }


   return (
      <div className="App">
        <NavBar
          onHome={homePage}
          page={page}
          setPage={setPage}
        />

        <div className="container">{currentPage()}</div>
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

export default App;
