import React from 'react';
import Hero from '../components/Hero';
import headShot from '../assets/bhheadshot.jpg';

function AboutMePage(props) {

    return(
        <section className='my-5'>
            <img src={headShot} style={{ width:'30%', position: 'relative' }} alt='' />
            <h1 id='about'>About Me</h1>
            <div className='my-2' style={{ padding:'1rem' }}>
                <p> 
                Hello, and welcome to my portfolio! 
                My name is Braudy Herrera and I currently live in Philadelphia, PA. 
                I am a Temple University alumni, and I have a passion for coding. 
                Currently, I am searching for a new role where I can apply and expand on my coding skills. 
                I hope to find a role where I can use my knowledge of MySQL, JavaScript, and React.
                </p>
            </div>
        </section>
    );
}

export default AboutMePage;