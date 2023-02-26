import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import AccountPage from "./routes/AccountPage";
import CoinPage from "./routes/CoinPage";
import axios from "axios";
import Footer from "./Components/Footer";
const App = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log(response.data)
    });
  }, [url]);

  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home coins = {coins}/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/account" element={<AccountPage />} />

        <Route path="/coin/:coinId" element={<CoinPage/>}>
        <Route path=":coinId"/>
        </Route>
      </Routes>
      <Footer/>
    

    </ThemeProvider>
  );
};

export default App;
