import Project from "../Project";


const projects = [
  {
    title: 'Board Game Cabinet'
  },
  {
    title: 'Dishr & Drinkr',
  },
  {
    title: 'Coding Study Guide'
  },
  {
    title: 'Horiseon SEO'
  }
];

export default function Portfolio() {
  return (
    <div className='content-box'>
      <h1>Portfolio</h1>
      <div>
        <Project projects = {projects} />
    </div>
    </div>
  );
}
