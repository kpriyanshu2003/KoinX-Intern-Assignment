import React from "react";

function Coin({ name }: { name: string }) {
  return (
    <div className="border">
      <>
        <span className="text-xl">{name}</span>
        <span className="text-green-400 bg-green-200">+ 50%</span>
      </>
      <div className="h-20 w-24 bg-blue-300">
        <span className="">Coin Info</span>
      </div>
    </div>
  );
}

export default Coin;
