import ProjectCard from "../components/ProjectCard";


const projects = [
  {
    name: "ReadMe Generator",
    description: "A CLI application that generates a README file for your projects.",
    url: "https://github.com/gggrouchy/README-Generator.git",
    imgUrl: "/readMeGenerator.png",
  },
  {
    name: "Employee Tracker",
    description: "A CLI application that allows you to manage your employees, roles and departments.",
    url: "https://github.com/gggrouchy/Employee-Tracker.git", 
    imgUrl: "/employeeTracker.png",
  },
  {
    name: "Vehicle Builder",
    description: "A CLI application that allows you to build a vehicle.",
    url: "https://github.com/gggrouchy/vehicleBuilder.git",
    imgUrl: "/vehicleBuilder.png",
  }
];


const Projects = () => {
  return <>
  <h1 className="text-4xl text-left font-bold mb-2"> Recent Projects </h1>
  <ul className="bg-white text-left rounded-xl p-4">
    {projects.map((project, i) => (
      <li key={i}>
        <ProjectCard
          name={project.name}
          description={project.description}
          url={project.url}
          imgUrl={project.imgUrl}
        />
      </li>
    ))}
  </ul>
  </>;
};

export default Projects;