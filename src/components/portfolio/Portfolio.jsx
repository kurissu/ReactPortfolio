import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Tindog.png";
import IMG2 from "../../assets/Dice.png";
import IMG3 from "../../assets/Drum.png";
import IMG4 from "../../assets/Simon.png";
import IMG5 from "../../assets/Keeper.png";
import IMG6 from "../../assets/Todo.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "TinDog page with Bootstrap",
    tools: "HTML•CSS•BootStrap",
    github: "https://github.com/kurissu/Tindog",
    demo: "https://kurissu.github.io/Tindog"
  },
  {
    id: 2,
    image: IMG2,
    title: "Dice game with JavaScript",
    tools: "HTML•CSS•JavaScript",
    github: "https://github.com/kurissu/Dice-game",
    demo: "https://kurissu.github.io/Dice-game/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Drum kit with JavaScript",
    tools: "HTML•CSS•JavaScript",
    github: "https://github.com/kurissu/drum-kit",
    demo: "https://kurissu.github.io/drum-kit/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Simon Say game using JQuery",
    tools: "HTML•CSS•JavaScript•JQuery",
    github: "https://github.com/kurissu/Simon-game",
    demo: "https://kurissu.github.io/Simon-game/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Note taking app using React",
    tools: "HTML•CSS•JavaScript•React",
    github: "https://github.com/kurissu/keeper-app",
    demo: "https://kurissu.github.io/keeper-app/"
  },
  {
    id: 6,
    image: IMG6,
    title: "To-Do list app using MongoDB",
    tools: "Node.js•Express•EJS•MongoDB",
    github: "https://github.com/kurissu/todolistDB",
    demo: "https://todolistdb-ryxo.onrender.com/"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, tools, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>{tools}</small>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );  
        })}
      </div>
    </section>
  );
};

export default Portfolio;
