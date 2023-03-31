import { FC } from "react";
import TableStyles from "@Styles/Table/Table.module.scss";
import Button from "../../Button/Button";
import ITableBodyData from "../../../Types/ITableBodyData";
import ShareIcon from "@Assets/Share.png";
import { ButtonText } from "../../../data/mockData";

interface ITableBody {
  bodyData: Array<ITableBodyData>;
}

const TableBody: FC<ITableBody> = ({ bodyData }) => {
  return (
    <>
      {(bodyData || []).map((item, i) => {
        return (
          <tr key={i} className={`${TableStyles.tableHead}`}>
            <td className="text-[13px] p-3 flex items-center justify-center">
              <div className="flex items-center gap-2 max-w-[40%] w-full">
                <img src={item.image as string} alt="Icon" />
                <span>{item.name}</span>
              </div>
            </td>
            <td>
              <div className="w-full flex justify-center items-center p-3 text-center">
                <div className="flex items-center gap-2 max-w-[30%]">
                  <span className="text-[15px] pr-1 text-black">{item.price}</span>
                  <span className="text-[14px] text-backgroundGray">AUD</span>
                </div>
              </div>
            </td>
            <td>
              <div className="w-full flex justify-center items-center p-3 text-center">
                <div className="flex items-center gap-2 max-w-[30%]">
                  <span className={`${item.change >= 0 ? "text-tableGreen" : "text-tableRed"}`}>{item.change}%</span>
                  <img src={ShareIcon} alt="Icon" />
                </div>
              </div>
            </td>
            <td className="text-[16px] text-center p-3">{item.market_cap}</td>
            <div className="p-3 flex justify-center items-center">
              <Button text={ButtonText.table.buy} background />
            </div>
          </tr>
        );
      })}
    </>
  );
};

export default TableBody;
