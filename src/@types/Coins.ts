export interface CoinsProps {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    slug: string;
    data: {
      price: string;
      price_change_percentage_24h: {
        usd: number;
        ind: number;
      };
      sparkline: string;
    };
  };
}
