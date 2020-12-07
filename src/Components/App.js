import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import Footer from 'Components/Footer';

class App extends React.Component {
  render() {
      return (
        <>
            <Router />
            <GlobalStyles />
            <Footer />
        </>
        );
    };
}

export default App;
