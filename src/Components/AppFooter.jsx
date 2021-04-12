import React from "react";

class AppFooter extends React.Component {
  render() {
    return (
      <footer className="pt-5 border-top text-center">
        <h5>THE BASICS</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1">
            <a className="link-secondary text-decoration-none" href="/about">
              About TMDB
            </a>
          </li>
          <li className="mb-1">
            <a
              className="link-secondary text-decoration-none"
              href="/contact-us"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default AppFooter;
