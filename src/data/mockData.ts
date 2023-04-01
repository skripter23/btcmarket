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
import AboutInfoTrade from "@Assets/AboutInfoTrade.png";
import AboutInfoAdvanced from "@Assets/AboutInfoAdvanced.png";
import AboutInfoPortfolio from "@Assets/AboutInfoPortfolio.png";
import AboutInfoMobile from "@Assets/AboutInfoMobile.png";
import AboutInfoStorage from "@Assets/AboutInfoStorage.png";
import AboutInfoAssets from "@Assets/AboutInfoAssets.png";
import AboutInfoMultiCoin from "@Assets/AboutInfoMultiCoin.png";
import AboutInfoFunding from "@Assets/AboutInfoFunding.png";
import { IAboutItem } from "../Types/IAboutItem";
import { IButtonText } from "../Types/IButtonText";
import { ITableHeadData } from "../Types/ITableHeadData";
import { IMarketsData } from "../Types/IMarketsData";
import { IMainInfo } from "../Types/IMainInfo";
import { IAboutHeader } from "../Types/IAboutHeader";
import { IAboutInfo } from "../Types/IAboutInfo";

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
    loginIn: "Login in",
  },
  table: {
    buy: "Buy",
  },
};

export const MainInfo: IMainInfo = {
  title: "Buy, sell and trade crypto today",
  description: "Trade with confidence and build your future with Australia’s fastest crypto exchange.",
};

export const AboutInfo: Array<IAboutInfo> = [
  { image: AboutInfoTrade, title: "Simple buy & sell options", description: "Buy and sell cryptocurrency quickly and easily." },
  {
    image: AboutInfoAdvanced,
    title: "Advanced trading",
    description: "Access advanced order types including limit, market, stop limit and dollar cost averaging.",
  },
  { image: AboutInfoPortfolio, title: "Portfolio tracking", description: "Track your total asset holdings, values and equity over time." },
  { image: AboutInfoMobile, title: "Mobile app", description: "Monitor markets, manage your portfolio, and trade crypto on the go." },
];

export const AboutInfoReverse: Array<IAboutInfo> = [
  { image: AboutInfoStorage, title: "Secure asset storage", description: "We use multi-signature technology to securely store your assets." },
  { image: AboutInfoAssets, title: "Assets held in Australia", description: "100% Australian-based custody of your assets." },
  { image: AboutInfoMultiCoin, title: "Multi-coin wallet", description: "Store multiple assets simultaneously in one wallet." },
  { image: AboutInfoFunding, title: "Fast funding", description: "Credit your wallet with AUD in seconds using Osko PayID." },
];

export const AboutInfoMain: { title: string; header: string } = { title: "Trade", header: "Buy, sell and trade crypto with confidence" };

export const AboutInfoMainReverse: { title: string; header: string } = { title: "Wallet", header: "Simple and secure wallet services" };
