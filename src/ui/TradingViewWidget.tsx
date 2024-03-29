"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect((): (() => void) => {
    // useEffect(() => {      // When not using the return statement.
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
     {
          "width": "100%",
          "height": "100%",
          "symbol": "COINBASE:BTCUSD",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "calendar": false,            
          "support_host": "https://www.tradingview.com"
        }`;
    const currentContainer = container.current;
    if (currentContainer) {
      currentContainer.appendChild(script);
    }

    return () => {
      if (currentContainer) currentContainer.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container w-full h-[600px]"
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
      {/* <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div> */}
    </div>
  );
}

export default memo(TradingViewWidget);
