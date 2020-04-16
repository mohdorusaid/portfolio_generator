import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SignIn from './components/admin/SignIn';
import FormContainer from './components/Forms/FormContainer';
import Portfolio from './components/portfolio/Portfolio';
import Projects from './components/portfolio/Projects';
import Achievements from './components/portfolio/Achievements';
import FormDisplay from './components/layout/FormDisplay';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SignIn}/>
        <Route path='/create' component={FormDisplay}/>
        <Route exact path="/:id" component={Portfolio}/>
        <Route exact path="/:id/projects" component={Projects} />
        <Route exact path="/:id/achievements" component={Achievements}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
