import React, { Component } from 'react';
import logo from './images/LMDA.png';
import LMDA from './images/404.png';
import './App.css';

class App extends Component {
state={

}
  render() {
    return (
      <div className="page-error-container">
        <div className="page-error-container2" >
          <div className="dinheader">
          <img className="dinheaders" src={LMDA} alt="logo" height="178px" width="414px"/>
          </div>
          <div className="dinheador dinheaderset">
          <p className="oups" ><strong>Oupss!</strong></p>
          <p>La page que vous recherchez n’existe pas ou plus :</p>          
          <p>Utiliser le menu ci-dessus ou retourner à la page d’accueil pour tenter de trouver l’article que vous chercher.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;