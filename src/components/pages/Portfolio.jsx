import Project from "../Project";


const projects = [
  {
    title: 'Board Game Cabinet',
    image: 'src/images/game-cabinet.png',
    url: 'https://board-game-cabinet-project-2-a7bf951a2669.herokuapp.com/login'
  },
  {
    title: 'Dishr & Drinkr',
    image: 'src/images/dishranddrinkr.png',
    url: 'https://estevan-gonzales.github.io/project-1-dishr-and-drinkr/'
  },
  {
    title: 'Coding Study Guide',
    image: 'src/images/study-guide.png',
    url: 'https://estevan-gonzales.github.io/prework-study-guide/'
  },
  {
    title: 'Horiseon SEO',
    image: 'src/images/horiseon.png',
    url: 'https://estevan-gonzales.github.io/module-1-challenge-horiseon-seo/'
  },
  {
    title: 'Coding Quiz',
    image: 'src/images/coding-quiz.png',
    url: 'https://estevan-gonzales.github.io/module-4-challenge-javascript-code-quiz/index.html'
  },
  {
    title: 'Weather Dashboard',
    image: 'src/images/weather-dashboard.png',
    url: 'https://estevan-gonzales.github.io/module-6-challenge-weather-dashboard/'
  }
];

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
