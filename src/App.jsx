
import userData from "./json/userData.json"
import friends from "./json/friends.json"
import transactions from "./json/transaction.json"
import { Profile } from "./components/Profile/Profile"
import { FriendList } from "./components/FriendList/FriendList"
import {TransactionHistory} from "./components/TransactionHistory/TransactionHistory"


import './App.css'

function App() {
  
  return (
    <>

       <Profile
        name={userData.username}
        image={userData.avatar}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      
    </>
  )
}

export default App
