import "./App.css";
import Header from "./components/Header";
import TechList from "./components/Techlist";
import Contact from "./components/Contact";
import ExperiencesList from "./components/ExperiencesList";
import FormationsList from "./components/FormationsList";
// import Parcours from "./components/Parcours";
// import Projects from "./components/Projects";
// import More from "./components/More";

import { useState } from "react";
import Title from "./components/Title";
import Photo from "./components/Photo";


function App() {
  //I don't have an online API so I first set my initialState in an array
  const pannels = [
    {
      title: "Technologies/Frameworks",
      pannelValue: <TechList />,
    },
    {
      title: "Contact",
      pannelValue : <Contact />
    },
    {
      title: "Expériences Professionnelles",
      pannelValue : <ExperiencesList />
    },
    {
      title: "Formations et Diplômes",
      pannelValue : <FormationsList />
    },
    {
      title: "Projets",
      //pannelValue : <Project />
    },
    {
      title: "Infos Supplémentaires",
      //pannelValue :<More />
    },
  ];

  const [value, setValue] = useState(0);

  const { title, pannelValue } = pannels[value];

  return (
    <div className="App">
      <Header />
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "70%",
        }}
      >
        {pannels.map((pannel, index) => {
          return (
            <button key={pannel.title} onClick={() => setValue(index)}>
              {pannel.title}
            </button>
          );
        })}
      </nav>
      <Photo />
      <div>
        {<Title value={title} />}
        {pannelValue}
      </div>
    </div>
  );
}

export default App;
