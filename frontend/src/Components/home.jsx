import React from 'react';
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
        <div className='homeImageDiv'>
            <img src={largePic} alt="" />
            {/* <p>Title Here ...</p> */}
        </div>
        <div className="rightDivList">
            <div className="portraitDivs">
                <img src={img1} alt="" />
                <p className="title1">RECIPE COLLECTIONS</p>
                <p className="title2">11 Meatloaf Recipes Your Family Will Love</p>
            </div>
            <div className="portraitDivs">
                <img src={img2} alt="" />
                <p className="title1">RECIPE COLLECTIONS</p>
                <p className="title2">11 Meatloaf Recipes Your Family Will Love</p>
            </div>
            <div className="portraitDivs">
                <img src={img3} alt="" />
                <p className="title1">RECIPE COLLECTIONS</p>
                <p className="title2">11 Meatloaf Recipes Your Family Will Love</p>
            </div>
            <div className="portraitDivs">
                <img src={img4} alt="" />
                <p className="title1">RECIPE COLLECTIONS</p>
                <p className="title2">11 Meatloaf Recipes Your Family Will Love</p>
            </div>
            <div className="portraitDivs">
                <img src={img5} alt="" />
                <p className="title1">RECIPE COLLECTIONS</p>
                <p className="title2">11 Meatloaf Recipes Your Family Will Love</p>
            </div>
            <div className="portraitDivs">
                <img src={img6} alt="" />
                <p className="title1">RECIPE COLLECTIONS</p>
                <p className="title2">11 Meatloaf Recipes Your Family Will Love</p>
            </div>

        </div>
        <div className="landscapeDivs">
            <div className="landDivs">
            <img src={ten1} alt="" />
    <div class="overlay"></div>
            </div>
            <div className="landDivs">
            <img src={ten2} alt="" />
    <div class="overlay"></div>
            </div>
            <div className="landDivs">
            <img src={ten3} alt="" />
    <div class="overlay"></div>
            </div>
            <div className="landDivs">
            <img src={ten4} alt="" />
    <div class="overlay"></div>
            </div>
            <div className="landDivs">
            <img src={ten5} alt="" />
    <div class="overlay"></div>
            </div>
            <div className="landDivs">
            <img src={ten6} alt="" />
    <div class="overlay"></div>
            </div>
            <div className="landDivs">
            <img src={ten7} alt="" />
    <div class="overlay"></div>
            </div>
            <div className="landDivs">
            <img src={ten8} alt="" />
    <div class="overlay"></div>
            </div>
            <div className="landDivs">
            <img src={ten9} alt="" />
    <div class="overlay"></div>
            </div>
            <div className="landDivs">
            <img src={ten10} alt="" />
    <div class="overlay"></div>
            </div>

        </div>
        <div className="aboutDivHome">
            aboutdiv
        </div>
        </div>
    )
}

export default Home;