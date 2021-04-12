import React from "react";

class ContactUs extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <h2>Staying In Touch</h2>
        <p>
          If you're looking for some help, the best place to get support is our{" "}
          <a href="#" className="linktourl">
            support forums
          </a>
          .
        </p>
        <h3>Email</h3>
        <hr className="my-0"></hr>
        <p>
          If you would like to contact us directly, you can use{" "}
          <a href="#" className="linktourl">
            this form
          </a>
          .
        </p>
        <h3>Around The Web</h3>
        <hr className="my-0"></hr>
        <a href="https://twitter.com/themoviedb" className="linktourl">
          Twitter
        </a>
      </div>
    );
  }
}

export default ContactUs;
