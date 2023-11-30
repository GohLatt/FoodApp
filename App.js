import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./App/store";
import Header from "./component/header";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
      </Provider>
    </>
  );
}
