import { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const styles = {

  headingStyle: {
    fontSize: '70px',
    background: 'orange',
    margin: '20px'
  },
};

// We use JSX curly braces to evaluate the style object

function Header() {

  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

      const handlePageChange = (page) => setCurrentPage(page);
  return (
      <div>

      <header style={styles.headerStyle} className="headerclass">
        <div>
          <h1 style={styles.headingStyle} className="heading-style">Estevan Gonzales</h1>
        </div>
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>

      </header>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
        <main className="mx-3">{renderPage()}</main>
      </div>
  );
}

export default Header;
