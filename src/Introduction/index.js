import React from "react";
import './styles.css';
import { FaCanadianMapleLeaf} from "react-icons/fa";


const Introduction = ()=>{
    return(
      <div className="head">
          <h1>My bestie🥰</h1>
          
          <p>Dogs being the best and sweetest pet</p>
          <FaCanadianMapleLeaf/>
        <img src="https://res.cloudinary.com/dcy0x4qbp/image/upload/v1688058082/cld-sample.jpg" className="image"></img>
      </div>
    )
}

export default Introduction;