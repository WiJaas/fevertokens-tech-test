"use client";
require("dotenv").config();
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Coins from "./Components/Coins";
import Coin from "./routes/Coin";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
function page() {
  const [coins, setCoins] = useState([]);

  const url= process.env.NEXT_PUBLIC_HOMEPAGE_API_URL;
 console.log("client side ",url);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Coins coins={coins} />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
     <Footer/>
      </BrowserRouter>

    </>
  );
}

export default page;
