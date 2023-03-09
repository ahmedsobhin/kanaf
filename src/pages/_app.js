import { Provider } from "react-redux"; // Importing Provider
import store from "../redux/store"; // Importing redux store

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
