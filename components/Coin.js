import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

const Coin = ({ coin }) => {
  return (
    <div className="WrapperCoin">
      <div>
        <div style={{ flex: 3 }}>
          <div className="NameCol">
            <div className="CoinIcon">
              <Image src={coin.logo} alt={coin.name} />
            </div>
            <div>
              <div className="Primary">{coin.name}</div>
              <div className="Secondary">{coin.sign}</div>
            </div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
            <div className="Primary">
              {"$"}
              {coin.balanceUsd}
            </div>
            <div className="Secondary">
              {coin.balanceCoin} {coin.sign}
            </div>
          </div>
        <div style={{flex:1}}>
            <div className="Primary">
                {'$'}
                {coin.priceUsd}
            </div>
            <div style={{ color: coin.change < 0 ? '#f0616d' : '#26ad75' }}>
            {coin.change > 0 && '+'}
            {coin.change}%
          </div>
        </div>
        <div style={{ flex: 1 }}>{coin.allocation}%</div>
        <div style={{ flex: 0 }}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};

export default Coin;
