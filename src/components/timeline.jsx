import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Masters at Northeastern University <span>September 2018-December 2020</span></h2>
                        <p>I am pursuing my masters degree in Information Systems with major in Software Engineering including the courses Web Development Tools,Program Strutures and Algorithms,Networks Structures and Cloud Computing.I have always aimed of converting ingenious thoughtfulness into an empirical application on my own designing canvas.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer Co-op at Orig3n <span>July 2019-December 2019</span></h2>
                        <ul>
                          <li>
                          Added new features to existing Cell Tracker application and implemented page navigation
                          </li>
                          <li>
                          Redesigned and transformed monolith REST API’s to a microservices based architecture
                          </li>
                          <li>
                          Designed dynamic client-side web forms to map the products to logical sets and performed CRUD operations
                          </li>
                          <li>
                          Implemented backend API’s – GetProductInformation ,GetAllProducts etc., to fetch data from backend database from web clients
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at Tata Consultancy Services <span>June 2016- August 2018</span></h2>
                        <ul>
                          <li>
                          Designed and Developed and Spring MVC Version 1 Application to serve International HealthCare customer
                          </li>
                          <li>
                          Iterated and improved the above version to include interactive, dynamic statistics and insights
                          </li>
                          <li>
                          Revamped an application using bootstrap and jQuery which made the website responsive and user-friendly
                          </li>
                          <li>
                          Improved durability by implementing a sharding ability of database objects in application decreasing the loading time by 25%
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>SASTRA University <span>June 2012- April 2016</span></h2>
                        <p>I have completed my under graduation in Computer Science at SASTRA University. I have developed interest in solving complex problems of the programming which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
