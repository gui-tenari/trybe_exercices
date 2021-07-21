import './App.css';
import returnName from "./Component"
import Task from './tasks';


function App() {
  const Tasklist = ['take a shower', 'read 10 pages of a book', 'walk with my dog']
  const orderedList = <ol>{Tasklist.map(task => Task(task))}</ol>
  return orderedList
}

export default App;
