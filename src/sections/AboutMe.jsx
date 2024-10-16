import { Linkedin, Github, AtSign} from "lucide-react";



const AboutMe = () => {
  return (
    <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md">
      <img src="/profile-photo.png" 
      alt="profile photo" 
      className="h-32 w-32 rounded-full"
      />
      <h1 className="text-lg md:text-2xl font-bold mt-3">About Me</h1>
      <p className="text-secondary-foreground">
        I am a mechanical engineer/Project Manager with a passion for web development. I am always eager to learn new technologies and improve my skills as a web developer. I am currently learning JavaScrip, React, TypeScript and I am excited to see what I can build with these technologies.
      </p>
      <div className="flex flex-row gap-2 mt-2">
        <a href="https://www.linkedin.com/in/oscar-ayala-13142746?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU1V13bzzQnyd8ET3P%2FhiZw%3D%3D" target="_blank" rel="noreferrer noopener">
        <Linkedin className="text-blue-400 hover:text-blue-700 cursor-pointer" />
        </a>
        <a href="https://github.com/gggrouchy" target="_blank" rel="noreferrer noopener">
        <Github className="text-purple-400 hover:text-purple-700 cursor-pointer"/>
        </a>
        <a href="mailto:oayala544@gmail.com" target="_blank" rel="noreferrer noopener">
        <AtSign className="text-red-400 hover:text-red-700 cursor-pointer"/>
        </a>
      </div>
    </section>
  );
}
export default AboutMe;
