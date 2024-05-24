import styles from './about.module.css'
export default function About() {
  return (
    <div className={styles.about_container}>
      <h1 className={` ${styles.heading} bg-slate-900 font-semibold text-white text-center pt-10`}>About <span className='text-blue-600'>Me</span> </h1>
    <div id="about" className= {`${styles.about_section} bg-slate-900 h-fit flex flex-row gap-4 pb-16`}>
      <div className={`${styles.left_about} w-1/2 p-8 font-thin bg-slate-800`}>
        <p className=''>
          Hi my name is Harinder Thakur and i am a full stack developer. I am in
          the field of this web development from one and half year. I help
          people build static and dynamic websites for their personal use and
          organizationl use. I use technologies like reactjs, nextjs to build
          modern, best-looking websites. I also help people build full stack
          websites with the help of MERN stack build optimized and fully
          functioning full stack websites. I have build multiple full stack
          website till date. We Provide best after service also.
        </p>
      </div>
      <div className={`${styles.right_about} w-1/2 p-8 bg-slate-800`}>
        <b className="text-left ml-4  tracking-wider text-slate-200 border-b-2 text-lg border-b-blue-600 ">My skills</b>
        <div className={`${styles.wrapper_skill_box} mt-4`}>
      <div className= {`${styles.skill_box} rounded-md`}>Javascript</div>
      <div className= {`${styles.skill_box} rounded-md`}>CSS</div>
      <div className= {`${styles.skill_box} rounded-md`}>NextJs</div>
      <div className= {`${styles.skill_box} rounded-md`}>ReactJs</div>
      <div className= {`${styles.skill_box} rounded-md`}>NodeJs</div>
      <div className= {`${styles.skill_box} rounded-md`}>Express</div>
      <div className= {`${styles.skill_box} rounded-md`}>MongoDB</div>
      <div className= {`${styles.skill_box} rounded-md`}>Websockets</div>
      <div className= {`${styles.skill_box} rounded-md`}>WebRTC</div>
      <div className= {`${styles.skill_box} rounded-md`}>Responsive Design</div>
      <div className= {`${styles.skill_box} rounded-md`}>Tailwind CSS</div>
      <div className= {`${styles.skill_box} rounded-md`}>Git/Github</div>
      <div className= {`${styles.skill_box} rounded-md`}>Bootstrap</div>
 

      </div>
      </div>
    
      
    
    </div>
    </div>
  );
}
