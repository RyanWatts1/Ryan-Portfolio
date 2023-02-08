import { WebSite } from "../assets";
import styles, { layout } from "../style";
import Button from '../components/Button'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={WebSite} alt="billing" className="w-[50%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        My Skills <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      I started playing with computers when I was 9 years old. That was the start to my journey. It has grown into a curated collection of tools and skills that define a remarkable UI
          developer tool kit.
      </p>
      <Button styles={`mt-10`} />

    </div>
  </section>
);

export default Billing;
