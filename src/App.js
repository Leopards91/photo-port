import React,{useState} from "react";
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [projects] = useState([
    {
      name: "surf-report"
    },
    {
      name: "surf-report"
    },
    {
      name: "surf-report"
    },
    {
      name: "surf-report"
    },
    {
      name: "surf-report"
    },
  ]);

  const [currentProject,setcurrentProject] = useState(projects[0]);
  return (
    <div>
      <Nav />
      <main>
          <About />        
      </main>
      <main>
          <Portfolio />        
      </main>
      <main>
          <Contact />        
      </main>
      <main>
          <Resume />        
      </main>
    </div>
  );
}

export default App;
