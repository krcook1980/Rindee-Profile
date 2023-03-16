import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar';
import './app.css';

function Application({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Application;
