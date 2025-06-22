import React, { useEffect, useState } from 'react';
import './FunFactLoader.css';

const FUN_FACTS = [
    {
        fact: "There's a planet called HD 189733b where it rains molten glass sideways due to 5,400+ mph winds.",
        source: "https://www.space.com/22614-blue-alien-planet-glass-rain.html",
        image: "/assets/HD189733b.jpg"
    },
    {
        fact: "Mars' Valles Marineris canyon could stretch from NYC to LA and is 7km deep!",
        source: "https://www.sciencedirect.com/science/article/abs/pii/S0377027314000316",
        image: "/assets/valles-marineris.jpg"
    },
    {
        fact: "A neutron star's scent would be like burnt gunpowder & nuclear decay—if you survived the gravity.",
        source: "https://www.nustar.caltech.edu/page/neutron-stars",
        image: "/assets/neuron-star.jpg"
    },
    {
        fact: "Venus spins so slow that a day there is longer than its year.",
        source: "https://science.nasa.gov/venus/venus-facts/",
        image: "/assets/venus.jpg"
    },
    {
        fact: "NASA detected sound from a black hole—an eerie B-flat hum 57 octaves below middle C.",
        source: "https://www.nasa.gov/universe/new-nasa-black-hole-sonifications-with-a-remix/",
        image: "/assets/perseus-galaxy-blackhole.jpg"
    },
    {
        fact: "Helium rain falls through metallic hydrogen inside Jupiter. It’s like a space lava lamp.",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/",
        image: "/assets/jupiter.jpg"
    },
    {
        fact: "The Sagittarius B2 cloud smells like rum & raspberries—it’s filled with ethyl formate!",
        source: "https://www.theguardian.com/science/2009/apr/21/space-raspberries-amino-acids-astrobiology",
        image: "/assets/sagittarius-b2.jpg"
    }
];

export default function FunFactLoader() {
    const [randomFact, setRandomFact] = useState(null);

    useEffect(() => {
        const index = Math.floor(Math.random() * FUN_FACTS.length);
        setRandomFact(FUN_FACTS[index]);
    }, []);

    if (!randomFact) return null;

    return (
        <div className="fun-fact-loader">
            <div className="fun-fact-card">
                <img src={randomFact.image} alt="space fact visual" className="fun-fact-image" />
                <div className="fun-fact-text">
                    <p>{randomFact.fact}</p>
                    <a href={randomFact.source} target="_blank" rel="noopener noreferrer" className="learn-more">
                        Learn More 🔗
                    </a>
                </div>
            </div>
        </div>
    );
}