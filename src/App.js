import "./App.css";
import Header from "./components/Header/Header";
import TechList from "./components/Techs/Techlist";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import ExperiencesList from "./components/Experiences/ExperiencesList";
import FormationsList from "./components/Formations/FormationsList";
import ProjetsList from "./components/Projets/ProjetsList";
import Title from "./components/Utils/Title";
import {faAngleDoubleRight, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItems from "./components/nav/NavItems";
// import More from "./components/More";

import { useState, useEffect } from "react";
import Translate from "./components/Utils/Translate";

function App() {
  //window size tracking
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  //I don't have an online API so I first set my initialState in an array
  const pannels = [
    {
      title: "Acceuil",
      pannelValue: <Home />,
    },
    {
      title: "Technologies",
      pannelValue: <TechList />,
    },
    {
      title: "Expériences",
      pannelValue: <ExperiencesList mobile={width <= 768}/>,
    },
    {
      title: "Formation",
      pannelValue: <FormationsList  mobile={width <= 768} />,
    },
    {
      title: "Projets",
      pannelValue: <ProjetsList />,
    },
    {
      title: "Contact",
      pannelValue: <Contact />,
    },
    // {
    //   title: "Infos Supplémentaires",
    //   pannelValue :<More />
    // },
  ];

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible((m) => !m);

  const [value, setValue] = useState(0);
  const { title, pannelValue } = pannels[value];

  if(width >= 769){
    return (
      <div className="App" >
        <Header
        clickHandler={() => toggleMenu()}
        open={menuVisible}
        mobile={width <= 768}
        pannels={pannels}
        setValue={setValue}
      />
        <div className="fake-header"></div>
        
        <section>
        {<Title value={title} />}
        <div className="pannel-container">{pannelValue}</div> 
      </section>
      </div>
    )
  }
  
  
  return (
    <div className="App" style={{overflowY : 'hidden'}}>
      <Header
        clickHandler={() => toggleMenu()}
        open={menuVisible}
        mobile={width <= 768}
      />
      <div className="fake-header"></div>

      {width <= 768 && (
        <Translate visible={menuVisible} duration={1000} viewportWidth={50}>
          <nav>
            {pannels.map((pannel, index) => {
              return (
                <Translate
                  visible={menuVisible}
                  duration={500}  
                >
                  <NavItems
                    key={`navItem-${index}`}
                    value={pannel.title}
                    clickHandler={() => {
                      setValue(index);
                      toggleMenu();
                    }}
                  />
                </Translate>
              );
            })}
          </nav>
        </Translate>
      )}

      <section>
        {<Title value={title} />}
        <div className="pannel-container">{pannelValue}</div>
        {menuVisible ? (
          ""
        ) : (
          <div>
            <div
              className="left-arrow"
              onClick={() => {
                value > 0 ? setValue(value - 1) : setValue(pannels.length - 1);
              }}
            >
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </div>
            <div
              className="right-arrow"
              onClick={() => {
                value < pannels.length - 1 ? setValue(value + 1) : setValue(0);
              }}
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
