import { useWeb3 } from "@3rdweb/hooks";
import Dashboard from "./Dashboard";
import Navbar from "../components/HomePage/Navbar";
import React, { useEffect, useState } from "react";
import Table from "../components/Table.js";
import Image from "next/image";
import Link from "next/link";
import pic from "../public/bg2.png";

export default function Home() {
  const style = {
    marginTop: "0%",
    padding: "4% 5%",
  };
  const fetchCoins = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=&sparkline=false"
    );
    const json = await data.json();
    setCoins(json);
  };
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetchCoins();
  }, []);

  const { address, connectWallet } = useWeb3();
  return (
    <>
      <Navbar title="CRYFTS" />
      <div
        className=" d-flex flex-wrap justify-content-between align-items-center "
        style={style}
      >
        <div
          className="card border-0 bg-transparent"
          style={{ width: "31rem", marginTop:"30px" }}
        >
          <div className="card-body">
            <h1 className="card-title">Access quickly the sign up page</h1>
            <h3 className="card-subtitle mb-4 text-muted my-4">
              Cryfts is the easiest place to buy and sell cryptocurrency. Sign
              up and get started today.
            </h3>
            <div className="d-flex">
              <Link href="/login">
                <a
                  className="btn btn1 btn-primary bd-color bg-color btn-lg  my-4 px-3"
                  type="submit"
                >
                  Get Started
                </a>
              </Link>
              <div>
                {address ? (
                  <Dashboard address={address} />
                ) : (
                  <div className="walletConnect mx-3">
                    <div
                      className="Button2"
                      onClick={() => connectWallet("injected")}
                    >
                      Connect Wallet
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 border-0 pic" style={{width: "34rem", marginTop:"60px" }}>
          <Image src={pic} className="card-img-top " alt="Loading" />
        </div>
      </div>
      <span>
        <Table coins={coins} />
      </span>
    </>
  );
}
