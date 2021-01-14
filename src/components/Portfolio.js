import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="projet">
      <div className="row">
        <div className="twelve columns collapsed">
        <hr></hr>
          <h1>Mes Projets.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    {/* <a href="#modal-01"> */}
                      <img src={`${item.imgurl}`} className="item-img"/>
                      {/* <img className="profile-pic"  src="images/moi.jpg" alt="" /> */}
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          { <h5>{item.name}</h5>}
                          {/* <p href={item.url} target="_blank"><i className={item.className}></i></p> */}
                          <p>{item.description}</p>
                          
                        </div>
                      </div>
                    {/* </a> */}
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}