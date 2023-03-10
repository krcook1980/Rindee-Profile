import NavBar from '../components/NavBar';
import './app.css';

function Application({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}

export default Application;
