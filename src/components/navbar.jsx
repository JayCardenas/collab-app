import React, { Component } from "react";

// const NavBar = (onHome) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" onClick={onHome} href="#">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Features
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Pricing
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               className="nav-link disabled"
//               href="#"
//               tabindex="-1"
//               aria-disabled="true"
//             >
//               Disabled
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          fdfssd
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                onClick={() => this.props.setPage(1)}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => this.props.setPage(2)}
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => this.props.setPage(3)}
                href="#"
              >
                Our Idea
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-dark m-2">
          Login
        </button>
        <button type="button" className="btn btn-dark m-2">
          Log Out
        </button>
      </nav>
    );
  }

  // printOutPage() {
  //   console.log("Prop page: ", this.props.page);
  // }
}

export default NavBar;
