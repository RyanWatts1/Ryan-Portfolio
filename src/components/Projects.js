import { feedback } from "../constants";
import styles from "../style";
import ProjectCard from "./ProjectCard";
import Earth from "../assets/Earth.png";

const Projects = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        My Projects <br className="sm:block hidden" />
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Dive into each project and see what makes them special. You can see
          the live website as well as the code source!
        </p>
      </div>
    </div>
    <div>
    <img src={Earth} alt="earth" className="w-[10%] h-[100%] relative z-[5]" />
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <ProjectCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Projects;
