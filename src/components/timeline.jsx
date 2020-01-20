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
                        <h2>Masters at Northeastern University <span>September 2018-August 2020</span></h2>
                        <p>I am pursuing my masters degree in Information Systems with major in Software Engineering. The courses I have taken are Web Development Tools,Program Strutures and Algorithms,Networks Structures and Cloud Computing </p>
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
                          <p>Recently, I worked at Orig3n as Software Developer Co-op. Developed single page applications using Angular 7, Typescript, HTML5, CSS3 to add new features to an existing application and performed CRUD operations on business data and deployed it in docker container .Extensively worked on writng REST API's to retrieve data and display it to user in Angular 8 </p>
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
                        <p>Worked as Software Engineer in Tata Consultancy Services. Used Spring MVC to design & develop an application to cater to international healthcare in Agile development manner according to the project requirements.Revamped an application using bootstrap and jQuery and made the website more user-friendly and reducing the total execution time of the application by almost 90% </p>
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
