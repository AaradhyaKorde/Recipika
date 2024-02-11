import React from 'react';
import '../Components/something.css';
import logoimg from '../images/logo.png';

const Logo=()=>{
    return(
        <div className="logoImg">
      <img src={logoimg} alt="" />
    </div>
    )
}

export default Logo;