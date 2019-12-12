import React from 'react';
import NavigationBar from './components/NavigationBar';
import MainContent from './components/MainContent';

class App extends React.Component {
  
  render() {
    return (
        <div>
          <NavigationBar />
          <MainContent />
        </div>
    );
  }
};

export default App;
