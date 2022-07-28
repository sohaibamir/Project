import React from "react";
import { useEffect, useState } from "react";
import Footer from "../components/HomePage/Footer.js";
import Navbar from "../components/HomePage/Navbar.js";
import Table from "../components/Table.js";

const prices = () => {
  const fetchCoins = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=&sparkline=false"
    );
    const json = await data.json();
    setCoins(json);
  };
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <>
    <Navbar title="CRYFTS"/>
    <div>
        <h2 className="prices-heading">Cryptocurrency Prices by Market Cap</h2>
      <Table coins={coins} />
    </div>
    <Footer/>
    </>
  );
};

export default prices;
