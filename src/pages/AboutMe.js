import React from 'react';
import Hero from '../components/Hero';

function AboutMePage(props) {

    return(
        <Hero title={props.title} text={props.text} />
    );
}

export default AboutMePage;