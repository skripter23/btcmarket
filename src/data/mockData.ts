import INavBarItem from "../Types/INavBar";
import ITableBodyData from "../Types/ITableBodyData";
import XRPIcon from "@Assets/XRPICon.png";
import BitcoinIсon from "@Assets/BitcoinIcon.png";
import EthereumIcon from "@Assets/EthereumIcon.png";
import TetherIcon from "@Assets/TetherIcon.png";
import EnjinCoinIcon from "@Assets/EnjinCoinIcon.png";
import LockIcon from "@Assets/AboutLock.png";
import SpeedIcon from "@Assets/AboutSpeed.png";
import ChatIcon from "@Assets/AboutChat.png";
import { IAboutItem } from "../Types/IAboutItem";
import { IButtonText } from "../Types/IButtonText";
import { ITableHeadData } from "../Types/ITableHeadData";
import { IMarketsData } from "../Types/IMarketsData";
import { IMainInfo } from "../Types/IMainInfo";
import { IAboutHeader } from "../Types/IAboutHeader";

export const NavBarItems: Array<INavBarItem> = [
  {
    id: 1,
    title: "Products",
  },
  {
    id: 2,
    title: "Prices",
  },
  {
    id: 3,
    title: "Buy",
  },
  {
    id: 4,
    title: "OTC",
  },
  {
    id: 5,
    title: "Learn",
  },
  {
    id: 6,
    title: "Help",
  },
];

export const TableBodyData: Array<ITableBodyData> = [
  { image: XRPIcon, name: "XRP", change: 1.57, market_cap: "$28B", price: "$0.5617" },
  { image: BitcoinIсon, name: "Bitcoin", change: -0.08, market_cap: "$582B", price: "$30,165.43" },
  { image: EthereumIcon, name: "Ethereum", change: -1.08, market_cap: "$267B", price: "$2,215.50" },
  { image: TetherIcon, name: "Tether", change: 2.36, market_cap: "$96B", price: "$1.4544" },
  { image: EnjinCoinIcon, name: "Enjin Coin", change: 16.41, market_cap: "$629M", price: "$0.6129" },
];

export const TableHeadData: ITableHeadData = {
  asset: "Asset",
  lastPrice: "Last Price",
  hrChange: "24hr change",
  marketCap: "Market cap",
};

export const MarketsData: IMarketsData = {
  mostPopular: "Most Popular",
  topMovers: "Top Movers",
  allMarkets: "View all markets",
};

export const AboutData: Array<IAboutItem> = [
  { image: LockIcon, title: "Security", description: "Multiple layers of account security, 2FA, address whitelisting, Biometrics." },
  { image: SpeedIcon, title: "Speed", description: "Fast trade executions with an industry leading uptime of 99.99%." },
  { image: ChatIcon, title: "Support", description: "100% Australian-based customer support, OTC desk and VIP Program." },
];

export const AboutHeader: IAboutHeader = {
  title: "Why BTC Markets?",
};

export const ButtonText: IButtonText = {
  layout: {
    signUp: "Sign up",
    loginIn: "Login In",
  },
  table: {
    buy: "Buy",
  },
};

export const MainInfo: IMainInfo = {
  title: "Buy, sell and trade crypto today",
  description: "Trade with confidence and build your future with Australia’s fastest crypto exchange.",
};
