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
        deaths: "75-200 million",
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
        deaths: "1-2 million",
        content: "Cholera is an acute diarrhoeal infection caused by ingestion of food or water contaminated with the bacterium Vibrio cholerae. Cholera remains a global threat to public health and an indicator of inequity and lack of social development."
    },
    spanishFlu: {
        name: "Spanish Flu",
        type: "light",
        imgSrc: "/images/Spanish Flu.jpeg",
        direction: "right",
        origin: "Europe",
        year: "1918",
        year2: "1920",
        deaths: "50 million",
        content: "The Spanish flu, also known as the 1918 influenza pandemic, was an unusually deadly influenza pandemic caused by the H1N1 influenza A virus. Lasting from February 1918 to April 1920, it infected 500 million people – about a third of the world's population at the time – in four successive waves."
    },
    sars: {
        name: "SARS",
        imgSrc: "/images/sarsParallax.jpg",
        direction: "right",
        origin: "China",
        year: "2002",
        year2: "2004",
        deaths: "774",
        content: "Severe acute respiratory syndrome (SARS) is a viral respiratory illness caused by a coronavirus, called SARS-associated coronavirus (SARS-CoV). SARS was first reported in Asia in February 2003. Over the next few months, the illness spread to more than two dozen countries in North America, South America, Europe, and Asia before the SARS global outbreak of 2003 was contained."
    },
    ebola: {
        name: "Ebola",
        imgSrc: "/images/ebolaParallax.jpg" ,
        direction: "right",
        origin: "Congo",
        year: "2013",
        year2: "2016",
        deaths: "11,325",
        content: "Ebola is a virus that causes problems with how your blood clots. It is known as a hemorrhagic fever virus, because the clotting problems lead to internal bleeding, as blood leaks from small blood vessels in your body. The virus also causes inflammation and tissue damage."
    },
    covid: {
        name: "COVID-19",
        imgSrc: "/images/covidParallax.jpg" ,
        direction: "right",
        origin: "China",
        year: "2019",
        year2: "now",
        deaths: "3.95 million",
        content: "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment."
    }
    
}

const Timeline = () => {
    return (
    <div>
    {Object.keys(timelinedata).map(key => {
        const { name, type, imgSrc, direction, origin, year, deaths, content, year2 } = timelinedata[key];
        return(
        <ParallaxComponent 
            key = {name}
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