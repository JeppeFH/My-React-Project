import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Greeting from "./components/greeting/Greeting";
import Profilecard from "./components/profilecard/Profilecard";
import Counter from "./components/counter/Counter";
import ToggleText from "./components/toggletext/ToggleText";
import Quote from "./components/quote/Quote";
import FavoriteColorPicker from "./components/favoriteColor/FavoriteColorPicker";
import FavoriteColorDisplay from "./components/favoriteColor/FavoriteColorDisplay";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const url = "https://dummyjson.com/users";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();

      setUsers(data.users);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Greeting firstName="Anne" lastName="Annesen" />
      {users.map((user) => (
        <Profilecard key={user.id} user={user} />
      ))}
      <Counter />
      <ToggleText />
      <Quote />
      <FavoriteColorPicker />
      <FavoriteColorDisplay />
    </div>
  );
}

export default App;
