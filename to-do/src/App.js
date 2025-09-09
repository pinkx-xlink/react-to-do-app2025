import './App.css';
import TodaysDate from './components/TodaysDate';
import NewToDo from './components/NewToDo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <TodaysDate />
        <h1>To Do</h1>
        <NewToDo />

      </header>

      <div className='body-content__container'>
        <h2>My Tasks</h2>
      </div>
    </div>
  );
}


export default App;
