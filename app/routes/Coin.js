
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Coin.css";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  useEffect(() => {
    axios.get(url).then((res) => {
        setCoin(res.data);
        JSON.stringify(res.data)
        console.log(res.data)
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>

<div className="coin-container">
  <div className="content">
    <h1>{coin.name}</h1>
    </div>

    <div className="content">
    <div className="rank">
      <span className="rank-btn"> Rank # {coin.market_cap_rank}</span>
    </div>

    <div className="info">
      <div className="coin-heading">
        {coin.image ? <img src={coin.image.small} alt='' /> : null}
        <p>{coin.name}</p>
        <p>{coin.symbol}</p>
       </div>

       <div className="coin-price">



{coin.market_data && coin.market_data.current_price ?<h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
</div>

      </div>
    </div>
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                        <div className='row'>
                                <h4>24h</h4>
                              {coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}

                            </div>


                        <div className='row'>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                        </div>
                        <div className='right'>
                           
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>

                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Coin

