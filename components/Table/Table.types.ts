import { CSSProperties, ReactNode } from "react";
import {
  CellProps,
  ColumnProps,
  TableProps,
} from "rsuite";

export type TRowBuilder<TData, TRes> = ({
  rowData,
}: {
  rowData: TData;
}) => TRes;

interface ICell<TData> extends Omit<CellProps, "dataKey"> {
  dataKey: keyof TData;
  rowData?: TData;
  cellStyle?: CSSProperties;
}

export interface ICustomCell<TData> extends ICell<TData> {
  customCell?: TRowBuilder<TData, JSX.Element>;
}

export interface INormalCell<TData> extends ICell<TData> {
  formatter?: (data: string) => string;
}

export interface IColumn<TData> extends ColumnProps {
  customCell?: TRowBuilder<TData, JSX.Element>;
  formatter?: (data: string) => string;
  cellStyle?: CSSProperties;
  header: ReactNode;
  dataKey: keyof TData;
  width?: number;
}

export interface TTable<TData> extends TableProps {
  data: TData[];
  columns: IColumn<TData>[];
  columnsSameProps?: ColumnProps;
  containerStyle?: CSSProperties;
  containerClassname?: string;
}

export interface ITableData {
  [key: string]: string | string[];
}
