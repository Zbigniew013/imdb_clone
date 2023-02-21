import Header from './components/Header';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import './globals.css';
import Providers from './Providers';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body>
        <Providers>
          {/* Header  */}
          <Header />
          {/* Navbar  */}
          <Navbar />
          {/* Search Box */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
