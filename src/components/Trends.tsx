"use client";
import React, { useEffect, useState } from "react";
import { CardTitle } from "@/ui/Card";
import { trending } from "@/api";
import { Carousell } from "@/ui/Carousel";

function Trends() {
  const [coinTrending, setCoinTrending] = useState([]);

  useEffect(() => {
    trending()
      .then((res) => res.data.coins)
      .then((data) => {
        setCoinTrending(data);
      })
      .catch((e) => {
        console.log(e);
        setCoinTrending([]);
      });
  }, []);
  return (
    <div className="bg-white py-4 px-5 md:px-5">
      <CardTitle>Trending</CardTitle>
      <Carousell data={coinTrending} />
    </div>
  );
}

export default Trends;
