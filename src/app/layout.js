import Header from './components/Header';
import Navbar from './components/Navbar';
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

          {children}
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
