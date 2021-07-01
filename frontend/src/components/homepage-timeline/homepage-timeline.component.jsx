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
        year: "1346",
        year2: "1352",
        deaths: "25,000,000",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    },
    cholera: {
        name: "Cholera",
        type: "light",
        imgSrc: "/images/Cholera.jpeg",
        direction: "right",
        origin: "Russia",
        year: "1817",
        year2: "1824",
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
        year2: "1920",
        deaths: "50,000,000",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    },
    sars: {
        name: "SARS",
        imgSrc: "/images/sarsParallax.jpg",
        direction: "right",
        origin: "China",
        year: "2002",
        year2: "2004",
        deaths: "774",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    },
    ebola: {
        name: "Ebola",
        imgSrc: "/images/ebolaParallax.jpg" ,
        direction: "right",
        origin: "Congo",
        year: "2013",
        year2: "2016",
        deaths: "11,310",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    },
    covid: {
        name: "COVID-19",
        imgSrc: "/images/covidParallax.jpg" ,
        direction: "right",
        origin: "China",
        year: "2019",
        year2: "now",
        deaths: "3,540,000",
        content: "The plague that caused the Black Death originated in China in the early to mid-1300s and spread along trade routes westward to the Mediterranean and northern Africa. It reached southern England in 1348 and northern Britain and Scandinavia by 1350."
    }
    
}

const Timeline = () => {
    return (
    <div>
    {Object.keys(timelinedata).map(key => {
        const { name, type, imgSrc, direction, origin, year, deaths, content, year2 } = timelinedata[key];
        return(
        <ParallaxComponent 
            
            type = {type}
            imgSrc = {imgSrc}
            direction = {direction}
            origin = {origin}
            year = {year}
            deaths = {deaths}
            content = {content}
            year2 = {year2} >
            <ParallaxTitle>{name}</ParallaxTitle>
        </ParallaxComponent>)
    })}
      </div>
)}

export default Timeline;