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
import VipPropgramSpeed from "@Assets/VipPropgramSpeed.png";
import VipProgramLower from "@Assets/VipProgramLower.png";
import VipProgramUser from "@Assets/VipProgramUser.png";
import TradingUserCreate from "@Assets/TradingUserCreate.png";
import TradingDeposit from "@Assets/TradingDeposit.png";
import TradingChange from "@Assets/TradingChange.png";
import AppleStore from "@Assets/AppleStore.png";
import GooglePlay from "@Assets/GooglePlay.png";
import NewHead from "@Assets/NewHead.png";
import Twiiter from "@Assets/Twiiter.png";
import Facebook from "@Assets/Facebook.png";
import LinkedIn from "@Assets/LinkedIn.png";
import Telegram from "@Assets/Telegram.png";
import Instagram from "@Assets/Instagram.png";
import { IAboutItem } from "../Types/IAboutItem";
import { IButtonText } from "../Types/IButtonText";
import { ITableHeadData } from "../Types/ITableHeadData";
import { IMarketsData } from "../Types/IMarketsData";
import { IMainInfo } from "../Types/IMainInfo";
import { IAboutHeader } from "../Types/IAboutHeader";
import { IAboutInfo } from "../Types/IAboutInfo";
import { IVipProgram } from "../Types/IVipProgram";
import { ITradeContinue } from "../Types/ITradeContinue";
import { ILastNews } from "../Types/ILastNews";
import { IWebSites } from "../Types/IWebSites";

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
    loginIn: "Log in",
  },
  table: {
    buy: "Buy",
  },
  vipProgram: {
    more: "Learn more",
  },
  createAccount: {
    getStarted: "Get started",
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

export const VipProgram: IVipProgram = {
  title: "VIP Program",
  header: "When you need more than just a crypto exchange",
  description: "Access world-class APIs, a lower fee structure and a dedicated Account Manager.",
  parts: [
    { image: VipPropgramSpeed, description: "API integrations" },
    { image: VipProgramLower, description: "Lower fees" },
    { image: VipProgramUser, description: "Dedicated Account Manager" },
  ],
};

export const TradingData: Array<IAboutItem> = [
  { image: TradingUserCreate, title: "1. Create", description: "Sign up and verify your free account." },
  { image: TradingDeposit, title: "2. Deposit", description: "Add AUD or crypto to your wallet using our secure methods." },
  { image: TradingChange, title: "3. Trades", description: "You’re all set. Buy, sell and trade crypto immediately." },
];

export const TradeContinue: ITradeContinue = {
  title: "Trade on the go",
  description:
    "Place simple and advanced trades on the go with the BTC Markets app. You can also manage your portfolio, monitor prices, and track market movements, anywhere, anytime.",
  download: {
    apple: AppleStore,
    google: GooglePlay,
  },
  more: "Learn more",
};

export const LastNews: ILastNews = {
  header: "Find out the latest crypto news",
  items: [
    { image: NewHead, tag: "Newsletter", date: "Jan 19th 2023", header: "This Week in Crypto: 19th January 2023", more: "Read more" },
    { image: NewHead, tag: "Newsletter", date: "Jan 12th 2023", header: "This Week in Crypto: 12th January 2023", more: "Read more" },
    { image: NewHead, tag: "Newsletter", date: "Dec 27th 2022", header: "BTC Markets Brand Refresh", more: "Read more" },
  ],
  footer: "Check out more of our crypto news",
};

export const WebSites: IWebSites = {
  twitter: {
    image: Twiiter,
    title: "Twitter",
  },
  facebook: {
    image: Facebook,
    title: "Facebook",
  },
  linkedIn: {
    image: LinkedIn,
    title: "LinkedIn",
  },
  telegram: {
    image: Telegram,
    title: "Telegram",
  },
  instagram: {
    image: Instagram,
    title: "Instagram",
  },
};

export const CreateAccount: string = "Create an account and start trading with us today!";
