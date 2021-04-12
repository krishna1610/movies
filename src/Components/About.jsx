import React from "react";

class About extends React.Component {
  render() {
    return (
      <main className="about">
        <div className="container">
          <h1 className="mb-5 d-flex justify-content-center">Hi there,</h1>
          <h3 className="d-flex justify-content-center">
            Let's talk about TMDb
          </h3>
          <p>
            The Movie Database (TMDb) is a <em>community built</em> movie and TV
            database. Every piece of data has been added by our amazing
            community dating back to 2008. TMDb's strong{" "}
            <em>international focus</em> and breadth of data is largely
            unmatched and something we're incredibly proud of. Put simply, we
            live and breathe community and that's precisely what makes us
            different.
          </p>
          <h4 className="my-4">The TMDb Advantage</h4>
          <div>
            <div>
              <div>1</div>
              <p>
                Every year since 2008, the number of contributions to our
                database has increased. With over 400,000 developers and
                companies using our platform, TMDb has become a premiere source
                for metadata.
              </p>
            </div>

            <div>
              <div>2</div>
              <p>
                Along with extensive metadata for movies, TV shows and people,
                we also offer one of the best selections of high resolution
                posters and fanart. On average, over 1,000 images are added
                every single day.
              </p>
            </div>

            <div>
              <div>3</div>
              <p>
                We're international. While we officially support 39 languages we
                also have extensive regional data. Every single day TMDb is used
                in over 180 countries.
              </p>
            </div>

            <div>
              <div>4</div>
              <p>
                Our community is second to none. Between our staff and community
                moderators, we're always here to help. We're passionate about
                making sure your experience on TMDb is nothing short of amazing.
              </p>
            </div>

            <div>
              <div>5</div>
              <p>
                Trusted platform. Every single day our service is used by
                millions of people while we process over 3 billion requests.
                We've proven for years that this is a service that can be
                trusted and relied on.
              </p>
            </div>
          </div>
          <a href="#" className="btn btn-light">
            Contact TMDb
          </a>
        </div>
      </main>
    );
  }
}
export default About;
