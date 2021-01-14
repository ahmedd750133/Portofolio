import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section  id="about">
         <div  className="row">

        
            <div class="fond">
  <img class="user_portrait"src="images/moi.jpg" alt="" />
</div>
            <div className="nine columns main-col">

               <h2>A propos</h2>
           
               <p className="info">
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  {/* <h2>Détails du contact</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.num}
                    </span>
                    <br></br>
                    <span>{resumeData.email}</span>
       					   </p> */}
                  </div>
               </div>
            </div>
         </div>

         
      </section>




    );
  }
}