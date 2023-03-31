import INavBarItem from "../Types/INavBar";
import ITableBodyData from "../Types/ITableBodyData";
import XRPIcon from "../Assets/XRPICon.png";
import BitcoinIсon from "../Assets/BitcoinIcon.png";
import EthereumIcon from "../Assets/EthereumIcon.png";
import TetherIcon from "../Assets/TetherIcon.png";
import EnjinCoinIcon from "../Assets/EnjinCoinIcon.png";

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
