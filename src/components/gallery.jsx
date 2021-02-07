import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/pic1.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Before</h4>
                      </div>
                      <img
                        src="img/portfolio/pic1.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/pic2.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>After</h4>
                      </div>
                      <img
                        src="img/portfolio/pic2.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/pic5.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Meta trader</h4>
                      </div>
                      <img
                        src="img/portfolio/pic5.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/pic6.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Meta trader</h4>
                      </div>
                      <img
                        src="img/portfolio/pic6.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/pic3.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Before</h4>
                      </div>
                      <img
                        src="img/portfolio/pic3.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/pic4.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Before</h4>
                      </div>
                      <img
                        src="img/portfolio/pic4.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
