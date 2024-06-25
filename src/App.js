import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ModalComp } from './components/Modal';
import { mapStateToProps, mapDispatchToProps } from './store/Selector';
import { storeReducer } from './store/Reducer';
import Resume from './components/Resume';
import { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
const store = createStore(storeReducer);

const Components = ({ Darkmode, toggle, displayModal, modalInfo }) => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <Welcome showLoader={showLoader} />
      <NavBar Darkmode={Darkmode} toggle={toggle} />
      <Banner />
      <About />
      <Projects displayModal={displayModal} />
      <Resume />
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
