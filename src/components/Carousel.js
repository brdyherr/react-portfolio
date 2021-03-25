import React from 'react';

import Card from '../components/Card';

import bhcovidtracker from '../assets/images/bhcovidtracker.JPG';
import bhcodequiz from '../assets/images/bhcodequiz.JPG';
import bhpasswordgenerator from '../assets/images/bhpasswordgenerator.JPG';
import bhrunbuddy from '../assets/images/bhrunbuddy.JPG';
import bhweather from '../assets/images/bhweather.JPG';
import bhworkdayscheduler from '../assets/images/bhworkdayscheduler.JPG';
import { Row, Container } from 'react-bootstrap';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioProjects: [
                {
                    id: 0,
                    title:'COVID-19 Tracker',
                    imgSrc: bhcovidtracker,
                    link: 'https://raestichter.github.io/covid-tracker/',
                    selected: false
                },
                {
                    id: 1,
                    title:'Code Quiz',
                    imgSrc: bhcodequiz,
                    link: 'https://brdyherr.github.io/code-quiz/',
                    selected: false
                },
                {
                    id: 2,
                    title:'Password Generator',
                    imgSrc: bhpasswordgenerator,
                    link: 'https://brdyherr.github.io/friendly-parakeet.github.io/',
                    selected: false
                },
                {
                    id: 3,
                    title:'Run Buddy',
                    imgSrc: bhrunbuddy,
                    link: 'https://brdyherr.github.io/run-buddy/',
                    selected: false
                },
                {
                    id: 4,
                    title:'Weather Dashboard',
                    imgSrc: bhweather,
                    link: 'https://brdyherr.github.io/weather-dashboard/',
                    selected: false
                },
                {
                    id: 5,
                    title:'Work-Day Scheduler',
                    imgSrc: bhworkdayscheduler,
                    link: 'https://brdyherr.github.io/',
                    selected: false
                },
            ]
        }
    }

        handleCardClick = (id, card) => {
            let items = [...this.state.items];

            items[id].selected = items[id].selected ? false : true;

            items.forEach(item => {
                if(item.id !==id) {
                    item.selected = false;
                }
            });

            this.setstate({
                items
            });
        }

        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }

    render() {
        return(
            <Container fluid={true} >
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;