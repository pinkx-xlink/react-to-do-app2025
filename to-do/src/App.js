import './App.css';
import TodaysDate from './components/TodaysDate';
import DateSidebar from './components/DateSidebar';
import NewToDoPopup from './components/NewToDoPopup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <TodaysDate />
        <h1>To Do</h1>
        

      </header>

      <div className='body-content__container'>
        <h2>My Tasks</h2>
        <div className='body-content__tasks-content'>
          <DateSidebar />
          <div className='body-content__tasks-content__to-dos'>
            <NewToDoPopup />
          </div>
          
        </div>
      </div>
    </div>
  );
}


export default App;
