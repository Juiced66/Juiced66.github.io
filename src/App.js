import "./App.css";
import Header from "./components/Header/Header";
import TechList from "./components/Techs/Techlist";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import ExperiencesList from "./components/Experiences/ExperiencesList";
import FormationsList from "./components/Formations/FormationsList";
import ProjetsList from "./components/Projets/ProjetsList";
import Title from "./components/Utils/Title";
// import More from "./components/More";

import { useState } from "react";



function App() {
  //I don't have an online API so I first set my initialState in an array
  const pannels = [
    {
      title:'Acceuil',
      pannelValue: <Home />
    },
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
      pannelValue : <ProjetsList />
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
      <div>
        {<Title value={title} />}
        {pannelValue}
      </div>
    </div>
  );
}

export default App;
