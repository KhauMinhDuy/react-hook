import '../public/static/bootstrap.css';
import '../public/static/site.css';

const MyApp = (props) => {
  const {Component, pageProps} = props;
  return (
    <Component {...pageProps} />
  )
}

export default MyApp;

