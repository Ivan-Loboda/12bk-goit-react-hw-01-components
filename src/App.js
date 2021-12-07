import './App.css';
import Profile from "./components/Profile";
import { username, tag, location, avatar, stats } from "./data/user.json";
import Statistics from "./components/Statistics";
import data from "./data/data.json";
import FriendsList from "./components/FriendsList";
import friends from "./data/friends.json";
import TransactionHistory from './components/TransactionHistory';
import transactions from "./data/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile name={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title={'Upload stats'} stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
