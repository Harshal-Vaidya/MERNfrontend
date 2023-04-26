import React from 'react'
import '../styles.css' 
import Base from './Base';
import { API } from "../backend";

const Home = ()=> {

    console.log("APP is :", API);

  return (
    <Base title="Home Page">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
      </div>
    </Base>
    
    
  );
}


export default Home;