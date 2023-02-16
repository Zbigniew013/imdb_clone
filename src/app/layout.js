import Header from './components/Header';
import './globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body>
        {/* Header  */}
        <Header />
        {/* Navbar  */}

        {/* Search Box */}

        {children}
      </body>
    </html>
  );
};
export default RootLayout;
