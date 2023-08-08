import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("fadil");
  const [age, setAge] = useState(22);

  const handleClick = () => {
    setName("Sassan");
    setAge(23);
  }

  return (
    <div className="home">
      <p>{name} is Age {age}</p>
      <button onClick={handleClick}>Click me!</button>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;