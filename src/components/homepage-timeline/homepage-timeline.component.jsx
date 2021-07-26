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
        content: "Black Plague is also known as the bubonic plague or black death. It wiped out at least a third of the Europe population. On October 1347, 12 ships dropped anchor at the Sicilian port, Europe Italy. Before it even docked at Europe, rumours were already going around that this disease was already present in India, China, and Egypt. Hence, they concluded that it spread through trade routes. Black Plague spreads through contact of clothes, air, and pests such as rats. Theory suggests that back plague occurred in the same time as anthrax. Bloodletting, boil lancing and emersion of the sick in rose water or vinegar caused the spread to accelerate. Only a week is required before the infected person dies. 30% of Europe (50-70 million) and 90% of Florence died."
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
        content: "Cholera is caused by a bacterium called Vibrio Cholerae, present in unsanitary waters. Once infected, the individual will suffer extreme diarrhoea, severe dehydration, and nausea. This leads to loss of large amounts of fluids from the body. The first recorded case of cholera infection is from India in 1536. 2.4 billion people in poor countries and villages cannot afford water filtration, leading to consumption of water contaminated with faeces. As a result, 100000 people from these areas die from cholera infection. The obvious treatment is to install basic water filtration in these regions, at a low cost. Sari filtration is first used in Bangladesh as a cost-effective filtration. By 2030, the World Health Organisation aims for Cholera infections to be eliminated from 20 countries. Also, death rate due to cholera is predicted to be reduced by 90%. Funds for the filtration will be managed by Global Task Force on Cholera Control (GTFCC)."
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
        content: "Spanish Flu is caused by a virus from the H1N1 family. It has a few nicknames, namely Kansas flu and the forgotten flu (because it happened in the same time as world war 1). Spanish flu ended in the mid 1919s. On March 11 1918, at Fort Riley, Albert Gitchell was the first person in the US to be infected with the Spanish flu. Since he was a cook, he came in close contact with many other soldiers there. It was agreed upon that Spanish flu started in China, Austria, or East Asia. Spanish flu name came about because during world war 1, Spain newspapers were not heavily censored and thus it seemed that the number of cases of the flu is drastically more in Spain than in other parts of the world. The total death toll was 27% of the world (50-100 million). From the US, 2 million people died. Among those 2 million that died, many of them were young adults who have strong immune systems. 17 million people died in India, 1.5 million people died in the Dutch East, 390,000 people died in Japan, 250 000 died in Great Britain, 400 000 people died in France and 2 million people died in Iran."
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
        content: "Cronavirus is also known as Viral Pneumonia or the novel virus. Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. It can live on cardboard for 24 hours, steel for 48 hours and plastic for 72 hours. Since it is a novel virus, no human has a natural immunity agaisnt it"
    }
    
}

const Timeline = () => {
    return (
    <div>
    {Object.keys(timelinedata).map(key => {
        const { name, type, imgSrc, direction, origin, year, deaths, content, year2 } = timelinedata[key];
        return(
        <ParallaxComponent 
            key = {`timeline-${name}`}
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