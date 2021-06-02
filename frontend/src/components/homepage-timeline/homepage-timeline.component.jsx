import React from 'react';
import ParallaxTitle from '../parallax-title/parallax-title.component';
import ParallaxComponent from '../parallax/parallax.component';

const timelinedata = {
    blackPlague: {
        name: "Black Plague",
        type: "light",
        imgSrc: "/images/Black Plague.jpeg" ,
        direction: "right",
        origin: "China",
        year: "1346-1352",
        deaths: "25,000,000",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    },
    cholera: {
        name: "Cholera",
        type: "light",
        imgSrc: "/images/Cholera.jpeg",
        direction: "left",
        origin: "Russia",
        year: "1817",
        deaths: "150,000",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    },
    spanishFlu: {
        name: "Spanish Flu",
        type: "light",
        imgSrc: "/images/Spanish Flu.jpeg",
        direction: "right",
        origin: "Europe",
        year: "1918",
        deaths: "50,000,000",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    },
    sars: {
        name: "SARS",
        imgSrc: "/images/sarsParallax.jpg",
        direction: "left",
        origin: "China",
        year: "2003",
        deaths: "774",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    },
    ebola: {
        name: "Ebola",
        imgSrc: "/images/ebolaParallax.jpg" ,
        direction: "right",
        origin: "Congo",
        year: "2013",
        deaths: "11,310",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    },
    covid: {
        name: "COVID-19",
        imgSrc: "/images/covidParallax.jpg" ,
        direction: "left",
        origin: "China",
        year: "2019",
        deaths: "3,540,000",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    }
    
}

const Timeline = () => (
    <div>
    {Object.keys(timelinedata).map(key => {
        return(
        <ParallaxComponent 
            type = {timelinedata[key].type}
            imgSrc = {timelinedata[key].imgSrc}
            direction = {timelinedata[key].direction}
            origin = {timelinedata[key].origin}
            year = {timelinedata[key].year}
            deaths = {timelinedata[key].deaths}
            content = {timelinedata[key].content}>
            <ParallaxTitle>{timelinedata[key].name}</ParallaxTitle>
        </ParallaxComponent>)
    })}
      </div>
)

export default Timeline;