import React, { Component} from "react";
import "./App.scss";
import AppHeader from './modules/AppModule/AppHeader/AppHeader';
import AppFooter from './modules/AppModule/AppFooter/AppFooter';

class App extends Component{
  render(){
    return(
      <div className="App">
          <AppHeader />
          {this.props.children}
          <AppFooter />
      </div>

    );
  }
}

export default App; 