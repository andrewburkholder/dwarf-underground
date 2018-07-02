import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Articles from './Articles.js'
import SideAd from './SideAd'
import Footer from './Footer'
import OtherArticles from './OtherArticles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Articles />
          <SideAd />
          <OtherArticles />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;