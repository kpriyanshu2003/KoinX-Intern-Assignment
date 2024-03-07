import axios from "axios";

const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export const trending = () => API.get("/search/trending");
export const simplePrice = () =>
  API.get(
    "/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=6"
  );
export const coinInfo = () =>
  API.get("/coins/bitcoin?localization=false&market_data=true&sparkline=true");
