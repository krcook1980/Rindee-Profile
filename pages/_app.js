import NavBar from '../components/NavBar';
import '../styles/global.css';

function Application({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}

export default Application;
