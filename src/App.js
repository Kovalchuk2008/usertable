import './App.css';
import {Usertable} from './components/Usertable/Usertable';

const users = [
  { id: 1, name: "Оля", age: 20, city: "Киев" },
  { id: 2, name: "Игорь", age: 30, city: "Одесса" },
  { id: 3, name: "Лена", age: 25, city: "Львов" }
];

const formatAge = (age) => age + " лет";

function App() {
  return (
    <div>
      <UserTable users = {users} formatAge = {formatAge} />
    </div>
  );
}

export default App;