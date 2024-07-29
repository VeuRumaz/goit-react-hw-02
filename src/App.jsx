import React from "react";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import "./App.css";

const App = () => {
  return (
    <div>
      <section>
        <div>
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
        </div>
      </section>
      <section>
        <div>
          <FriendList friends={friends} />
        </div>
      </section>
      <section>
        <div>
          <TransactionHistory items={transactions} />
        </div>
      </section>
    </div>
  );
};

export default App;
