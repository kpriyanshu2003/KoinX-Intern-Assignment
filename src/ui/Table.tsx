import React from "react";

export function Table({ data }: { data: any }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>BitCoin Price</td>
            <td>{data.btcPrice}</td>
          </tr>
          <tr>
            <td>24h Low / 24h High</td>
            <td>{data.LowHigh24h}</td>
          </tr>
          <tr>
            <td>7d Low / 7d High</td>
            <td>{data.LowHigh7d}</td>
          </tr>
          <tr>
            <td>Trading Volume</td>
            <td>{data.tradVolume}</td>
          </tr>
          <tr>
            <td>Market Cap Rank</td>
            <td>#{data.marketCapRank}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
