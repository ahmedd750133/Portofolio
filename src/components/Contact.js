import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
  
    return (
      <form id='contact'>
      <h1>Me contact</h1>
      <p id="cp">Email:</p>
      <input type="text"/>
      <p id="cp">Sujet:</p>
      <input type="text"/>
      <p id="cp">Votre Message:</p>
      <input type="text"/>

      <div className="columns contact-details">

   
</div>

      <button id="btn" type="submit" value="Envoyer">Envoyer</button>
    
    </form>
    
        );
  }
}


