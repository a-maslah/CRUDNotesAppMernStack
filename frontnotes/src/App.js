import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import Menu from './components/Menu';
function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Switch>
      <Route exact path='/' component={Notes}></Route>
      <Route exact path='/add/note' component={AddNote}></Route>
      <Route exact path='/edit/note/:id' component={EditNote}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
