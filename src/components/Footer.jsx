
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
        <img className="contact-image" src="/github-logo.png"></img>
      </a>
      <a href="https://www.linkedin.com/in/estevan-gonzales/">
        <img className="contact-image" src="/linkedin-logo.png"></img>
      </a>
      <a href="https://twitter.com/estevan_gogh/">
        <img className="contact-image" src="/twitter-logo.png"></img>
      </a>
    </div>

)
}

export default Footer;