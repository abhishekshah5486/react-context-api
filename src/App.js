import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1>React Context API</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  );
}

export default App;
