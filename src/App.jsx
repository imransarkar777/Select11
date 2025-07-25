import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Playground from "./Components/Playground/Playground";

function App() {
  const [balance, setBalance] = useState(0);
  const [btnState, setBtnState] = useState("selected");
  const handleAddBalance = () => {
    console.log("handle clicked !!");
    const toAdd = Math.floor(Math.random() * 100000000) + 50000000;
    setBalance(balance + toAdd);
  };

  return (
    <>
      <Header balance={balance}></Header>
      <Banner handleAddBalance={handleAddBalance}></Banner>
      <Playground btnState={btnState} setBtnState={setBtnState}></Playground>
      {/* <AvailablePlayers></AvailablePlayers> */}
    </>
  );
}

export default App;
