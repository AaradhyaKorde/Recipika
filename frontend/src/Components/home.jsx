import React from 'react';
import { Link } from "react-router-dom";

import '../Components/home.css';
import Navbar from '../Components/navbar';
import Logo from '../Components/logo'
import img1 from '../images/portrait/1.png';
import img2 from '../images/portrait/2.png';
import img3 from '../images/portrait/3.png';
import img4 from '../images/portrait/4.png';
import img5 from '../images/portrait/5.png';
import img6 from '../images/portrait/6.png';
import largePic from '../images/large.jpg';
import ten1 from '../images/tenpics/1.png';
import ten2 from '../images/tenpics/2.png';
import ten3 from '../images/tenpics/3.png';
import ten4 from '../images/tenpics/4.png';
import ten5 from '../images/tenpics/5.png';
import ten6 from '../images/tenpics/6.png';
import ten7 from '../images/tenpics/7.png';
import ten8 from '../images/tenpics/8.png';
import ten9 from '../images/tenpics/9.png';
import ten10 from '../images/tenpics/10.png';

const  Home = ()=>{
    return(
        <div className='allOfTheAbove'>
            <Logo />
        <Navbar />
        <Link to={`/showRecipe/title=${encodeURIComponent("VIETNAMESE PHO")}`}>
        <div className='homeImageDiv'>
            <img src={largePic} alt="" />
            {/* <p>Title Here ...</p> */}
        </div>
        </Link>
        <div className="rightDivList">
            <div className="portraitDivs">
            <Link to={`/showRecipe/title=${encodeURIComponent("GREEK MOUSSAKA")}`}>
                <img src={img1} alt="" />
                <p className="title1">GREEK MOUSSAKA</p>
                <p className="title2">Moussaka is to the Greek what Lasagna is to Italians</p>
                </Link>
            </div>
            <div className="portraitDivs">
            <Link to={`/showRecipe/title=${encodeURIComponent("ITALIAN CAPRESE SALAD")}`}>
                <img src={img2} alt="" />
                <p className="title1">ITALIAN CAPRESE SALAD</p>
                <p className="title2"> It’s not summer unless you make one</p>
                </Link>
            </div>
            <div className="portraitDivs">
            <Link to={`/showRecipe/title=${encodeURIComponent("MEXICAN CHICKEN MOLE")}`}>
                <img src={img3} alt="" />
                <p className="title1">MEXICAN CHICKEN MOLE</p>
                <p className="title2"> Featuring aromatic spices and dark chocolate</p>
                </Link>
            </div>
            <div className="portraitDivs">
            <Link to={`/showRecipe/title=${encodeURIComponent("PANEER TIKKA")}`}>
                <img src={img4} alt="" />
                <p className="title1">PANEER TIKKA</p>
                <p className="title2">Super flavorful tandoori masala & grilled to perfection! </p>
                </Link>
            </div>
            <div className="portraitDivs">
            <Link to={`/showRecipe/title=${encodeURIComponent("SUSHI ROLLS")}`}>
                <img src={img5} alt="" />
                <p className="title1">SUSHI ROLLS</p>
                <p className="title2">Salmon skin roll, or eel and cucumber</p>
                </Link>
            </div>
            <div className="portraitDivs">
            <Link to={`/showRecipe/title=${encodeURIComponent("THAI GREEN CURRY")}`}>
                <img src={img6} alt="" />
                <p className="title1">THAI GREEN CURRY</p>
                <p className="title2">A thoughtful blend of Thai aromatics and herbs</p>
                </Link>
            </div>

        </div>
        <div className="landscapeDivs">
            <Link to={`/showRecipe/title=${encodeURIComponent("VADA PAV")}`}>
            <div className="landDivs">
            <img src={ten1} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>
            <Link to={`/showRecipe/title=${encodeURIComponent("RASGULLA")}`}>
            <div className="landDivs">
            <img src={ten2} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>
            <Link to={`/showRecipe/title=${encodeURIComponent("PAV BHAJI")}`}>
            <div className="landDivs">
            <img src={ten3} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>
            <Link to={`/showRecipe/title=${encodeURIComponent("PANI PURI")}`}>
            <div className="landDivs">
            <img src={ten4} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>
            <Link to={`/showRecipe/title=${encodeURIComponent("PANEER KATHI ROLL")}`}>
            <div className="landDivs">
            <img src={ten5} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>
            <Link to={`/showRecipe/title=${encodeURIComponent("GULAB JAMUN")}`}>
            <div className="landDivs">
            <img src={ten6} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>
            <Link to={`/showRecipe/title=${encodeURIComponent("DOSA")}`}>
            <div className="landDivs">
            <img src={ten7} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>
            <Link to={`/showRecipe/title=${encodeURIComponent("DHOKLA")}`}>
            <div className="landDivs">
            <img src={ten8} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>
            <Link to={`/showRecipe/title=${encodeURIComponent("BUTTER CHICKEN")}`}>
            <div className="landDivs">
            <img src={ten9} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>
            <Link to={`/showRecipe/title=${encodeURIComponent("CHOLE BHATURE")}`}>
            <div className="landDivs">
            <img src={ten10} alt="" />
    <div class="overlay"></div>
            </div>
            </Link>

        </div>
        <div className="aboutDivHome">
            aboutdiv
        </div>
        </div>
    )
}

export default Home;