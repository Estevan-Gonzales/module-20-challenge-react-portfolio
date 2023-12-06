
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
  <header style={styles.headerStyle} className="header">
  <h1 style={styles.headingStyle}>Footer</h1>
  </header>)
}

export default Footer;