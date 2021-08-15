import { Provider } from "react-redux";
import "../public/assets/css/style.css";
import store, { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
