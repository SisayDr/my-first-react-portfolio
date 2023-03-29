import SkillLevel from "./SkillLevel";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import SkillsImage from "../assets/images/Programming-1024.png";
function Skills() {
  return (
    <>
      {/* cheat for the progrss bars {
      if the fraction (width) hasn't been used before it won't recognize it.🤷‍♂️  
      }
    */}
      {/* <div className="hidden w-5/6 w-3/4 w-1/2 w-1/4"></div> */}
      <h1
        id="skills"
        className="text-center italic text-3xl p-5 md:p-16 md:text-5xl text-indigo-500 font-bold font-mono underline"
      >
        &emsp;My Skills&emsp;
      </h1>
      <div className="flex gap-4 items-center max-w-5xl m-auto p-2 md:p-8">
        <img className="hidden md:block max-h-80" src={SkillsImage} alt="" />
        <div className="w-full space-y-4 md:space-y-0">
          <SkillLevel
            icon={<SiHtml5 size={24} />}
            skill="HTML"
            fraction="full"
          />
          <SkillLevel icon={<SiCss3 size={24} />} skill="CSS" fraction="5/6" />
          <SkillLevel icon={<FaSass size={44} />} skill="" fraction="3/4" />
          <SkillLevel
            icon={<SiTailwindcss size={24} />}
            skill="Tailwindcss"
            fraction="3/4"
          />
          <SkillLevel
            icon={<SiJavascript size={44} />}
            skill=""
            fraction="1/2"
          />
          <SkillLevel
            icon={<SiReact size={44} />}
            skill="React"
            fraction="1/4"
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
