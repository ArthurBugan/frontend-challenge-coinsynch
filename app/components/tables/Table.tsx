import { memo } from "react";

interface TableProps {
  header: string[];
  children: JSX.Element;
}

const Table: React.FC<TableProps> = (props) => {
  let { header, children } = props;

  return (
    <table className="w-full table-fixed">
      <thead>
        <tr>
          {header.map((h, index) => (
            <th
              key={h}
              className="p-2 text-left first-of-type:w-20 first-of-type:pl-6 last-of-type:w-28"
            >
              <label className="font-normal text-secondary-500">{h}</label>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default memo(Table);
