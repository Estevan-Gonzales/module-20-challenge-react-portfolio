
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
    <div className="footer-container">
      <a href="https://github.com/Estevan-Gonzales/">
        <img className="contact-image" src="../publish/github-logo.png"></img>
      </a>
      <a href="https://www.linkedin.com/in/estevan-gonzales/">
        <img className="contact-image" src="../publish/linkedin-logo.png"></img>
      </a>
      <a href="https://twitter.com/estevan_gogh/">
        <img className="contact-image" src="../publish/twitter-logo.png"></img>
      </a>
    </div>

)
}

export default Footer;