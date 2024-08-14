import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setUserData(response.data.products);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      {userData.map((item, index) => (
        <div key={index} className="item">
          <div>{item.title}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  );
}

export default App;
