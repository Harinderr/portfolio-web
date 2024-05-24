import Image from "next/image";
import styles from './project.module.css'
export default function Projects() {
  // init Swiper:

  return (
    <div className={styles.projects}>
      {/* eslint-disable-next-line react/no-unescaped-entities   */}
      <h1 className={` ${styles.heading} text-center py-8 bg-slate-900  text-white`}>
        Proj<span className="text-blue-600">ects</span>
      </h1>
      <h3 className="text-white text-xl mx-16 p-4  border-b-4  border-b-orange-600">SOME OF MY LATEST PROJECTS</h3>
      <div className={`${styles.projects_container} flex flex-col gap-4 mt-8 pb-10 `}>
       

        

        <div className={`${styles.project}  bg-slate-700  p-12 text-center flex flex-row mx-auto  rounded-lg`}>
        <div className={`${styles.img_container}  w-full h-50 relative`}>
        <Image src={"/netflix.jpg"} layout="fill" style={{objectFit:'cover'}} className="rounded-lg"></Image>
        </div>
          
          <div className={`${styles.text_wrapper} p-4  relative`}>
            <h3 className="font-bold text-xl mb-4 text-white text-left leading-8">
              Sports Blog Website
            </h3>
            <p className="text-white leading-8 ">
            It is a full Stack Blog website which exclusively cover Cricket, Football, Tennis, Badminton and Hockey etc. Get Exclusive anylysis on Sports
            </p>
              
            <div className="h-fit  bg-slate-600  p-2 rounded-md mt-2">
            
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                NextJs
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                TailwindCSS
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                MongoDB
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                ReactJs
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                CSS
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
               Primsa ORM
              </div>
             
            </div>
            <a href="https://next-blog-sand-ten-63.vercel.app/" className="font-normal mx-auto my-4 text-white" target="blank">
              Visit Link
            </a>
          </div>
        </div>
        <div className={`${styles.project}  bg-slate-700  p-12 text-center flex flex-row mx-auto  rounded-lg`}>
        <div className={`${styles.img_container}  w-full h-50 relative`}>
        <Image src={"/netflix.jpg"} layout="fill" objectFit="cover" className="rounded-lg"></Image>
        </div>
          
          <div className={`${styles.text_wrapper} p-4  relative`}>
            <h3 className="font-bold text-xl mb-4 text-white text-left leading-8">
              Chat Application
            </h3>
            <p className="text-white leading-8 ">
            It is a full Stack chat website where you can chat and video call your friends anytime.
            </p>
              
            <div className="h-fit  bg-slate-600  p-2 rounded-md mt-2">
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                WebRTC
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
               Websockets
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                NextJs
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                TailwindCSS
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                NodeJs
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                Express
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                MongoDB
              </div>
            <div className={`${styles.skill_box} inline-block p-3 mr-1 mb-1 tracking-wider font-semibold bg-slate-700 text-slate-200 rounded-md`}>
                ReactJs
              </div>
             
            </div>
            <a href="https://next-blog-sand-ten-63.vercel.app/" className="font-normal mx-auto my-4 text-white" target="blank">
              Visit Link
            </a>
          </div>
        </div>

        

      
      </div>
    </div>
  );
}
