import Project from "../Project";


const projects = [{
  title: 'Dish and Drink',
  description: 'This was our project 2 project',
  id: 1,
}];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <Project projects = {projects} />
    </div>
    </div>
  );
}
