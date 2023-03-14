import { Table } from "rsuite";

import { ICustomCell, INormalCell } from "./Table.types";

const { Cell } = Table;

export const CustomCell = <TData extends Record<string, unknown>>(
  params: ICustomCell<TData>,
) => {
  const {
    customCell: Component,
    dataKey,
    rowData,
    cellStyle,
    className,
    ...props
  } = params;

  return (
    <Cell {...props} className={className} style={cellStyle}>
      {Component && rowData && <Component {...{ rowData }} />}
    </Cell>
  );
};

export const NormalCell = <TData extends Record<string, unknown>>(
  params: INormalCell<TData>,
) => {
  const { formatter, dataKey, rowData, cellStyle, className, ...props } =
    params;

  const data = `${rowData && rowData[dataKey]}`;

  return (
    <Cell {...props} className={className} style={cellStyle}>
      {formatter ? formatter(data) : data}
    </Cell>
  );
};
