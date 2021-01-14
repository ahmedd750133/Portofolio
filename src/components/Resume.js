import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Formation</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.formation && resumeData.formation.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.description}
                          <p>
                          {item.description2}
                          </p>
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                        
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>EXPERIENCE</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.experience && resumeData.experience.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.description}
                          <span>&bull;</span> <em className="date"> {item.YearOfLeaving}</em></p>
                         
                          <p> {item.description2}</p>
                         
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Competence</span></h1>
            </div>

            <div className="nine columns main-col">
   				<div className="bars">

   				   <ul className="Competence">
                {
                  resumeData.Competence && resumeData.Competence.map((item) => {
                    return(
                      <div className="columns portfolio-item">
                      <div className="item-wrap">
                      <ul class="clients">
                        {/* <a href="#modal-01"> */}
                          <img src={`${item.imgurlw}`} className="item-img"/>
                          {/* <img className="profile-pic"  src="images/moi.jpg" alt="" /> */}
                          
                        {/* </a> */}
                        </ul>
                      </div>
                    </div>

                      
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}