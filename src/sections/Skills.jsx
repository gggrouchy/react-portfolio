import Tag from "../components/Tag";  

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "Git",
  'GitHub',
  "Tailwind CSS",
  "Bootstrap",
];

const Skills = () => {
  return (
    <section className="bg-white text-left rounded-xl p-2 md:-5 shadow-md mt-6 ">
      <h2 className="text-lg md:text-2xl text-secondary-foreground mb-3 font-semibold"> Skills</h2>
      <ul className="flex flex-wrap leading-10">
        {skills.map((skill, index) => (
          <li key={index} className="mr-6"><Tag name={skill} /></li>
        ))}
      </ul>
    </section>
  )
}
export default Skills;
