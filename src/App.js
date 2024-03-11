import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ModalComp } from "./components/Modal";
import { mapStateToProps, mapDispatchToProps } from "./store/Selector";
import { storeReducer } from "./store/Reducer";
const store = createStore(storeReducer);

const Components = ({ Darkmode, toggle, displayModal, modalInfo }) => {
  return (
    <div className="App">
      <NavBar Darkmode={Darkmode} toggle={toggle} />
      <Banner />
      <About />
      <Projects displayModal={displayModal} />
      <Contact />
      <ModalComp displayModal={displayModal} modalInfo={modalInfo} />
      <Footer Darkmode={Darkmode} />
    </div>
  );
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Components);
function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
