import React from "react";
import styles from "./style";
import {
  NavBar,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  Skills,
  SkillSet,
} from "./components/";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxwidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxw}`}>
          <Skills /> <SkillSet /> <About /> <Projects /> <Contact /> <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
