import { FC } from "react";
import TableStyles from "../../../Styles/Table/Table.module.scss";

interface ITableHead {
  headers: Array<string>;
}

const TableHead: FC<ITableHead> = ({ headers }) => {
  return (
    <tr className={`${TableStyles.tableHead}`}>
      {(headers || []).map((item, i) => (
        <th key={i} className="text-[13px] p-3">
          {item}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;
