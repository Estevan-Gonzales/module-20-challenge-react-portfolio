
const styles = {
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '100px',
  },
};


function Footer() {
  return(
    <div>
      <a href="https://github.com/Estevan-Gonzales/">
        <img className="contact-image" src="../src/images/github-logo.png"></img>
      </a>
      <a href="https://www.linkedin.com/in/estevan-gonzales/">
        <img className="contact-image" src="../src/images/linkedin-logo.png"></img>
      </a>
      <a href="https://twitter.com/estevan_gogh/">
        <img className="contact-image" src="../src/images/twitter-logo.png"></img>
      </a>
    </div>
)
}

export default Footer;