

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {
    return (
      <ul className="list-group">
        {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
        {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
        {props.projects.map(item => (
          <li className="list-group-item" key={item.title}>
            {item.description}
          </li>
        ))}
      </ul>
    );
  }
  
  export default Project;
  