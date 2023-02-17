import Header from './components/Header';
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

          {/* Search Box */}

          {children}
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
