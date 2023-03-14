import { useEffect, useState } from "react";
import { Pagination, Table as RSTable, TableProps } from "rsuite";
import { FlexContainer } from "../Container";
import { Text } from "../Text";

import { CustomCell, NormalCell } from "./Cells";
import { ITableData, TTable } from "./Table.types";

const { Column, HeaderCell } = RSTable;

const cellDefaultStyle = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
};

const Table = <TData extends {}>(props: TTable<TData>) => {
  const {
    data,
    columns,
    columnsSameProps,
    containerStyle,
    containerClassname,
    ...RSTableProps
  } = props;

  const [tableData, setTableData] = useState<ITableData[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortType, setSortType] = useState<TableProps["sortType"]>();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (data) {
      let newTableData: ITableData[] = [...data];

      if (sortColumn && sortType) {
        newTableData.sort((a, b) => {
          const x = a[sortColumn];
          const y = b[sortColumn];

          return sortType === "asc" ? (x > y ? 1 : -1) : x > y ? -1 : 1;
        });
      }

      newTableData = newTableData.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
      });

      setTableData(newTableData);
    }
  }, [data, sortColumn, sortType, page, limit]);

  useEffect(() => {
    if (data) {
      setPage(1);
    }
  }, [data]);

  const handleSortColumn = (dataKey: string) => {
    setSortColumn(dataKey);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  if (!data) return null;

  return (
    <>
      <RSTable
        onSortColumn={handleSortColumn}
        renderEmpty={() => (
          <FlexContainer>
            <Text content="No hay registros" />
          </FlexContainer>
        )}
        data={tableData}
        shouldUpdateScroll
        wordWrap
        affixHorizontalScrollbar
        autoHeight
        headerHeight={40}
        rowHeight={40}
        loading={loading}
        height={450}
        {...RSTableProps}
      >
        {columns?.map((column) => {
          const {
            dataKey,
            header,
            flexGrow = 1,
            cellStyle: cellStyleProp,
            customCell,
            formatter,
            ...columnProps
          } = column;

          const cellStyle = { ...cellDefaultStyle, ...cellStyleProp };
          const cellProps = { dataKey, cellStyle };

          return (
            <Column
              key={dataKey as string}
              {...{ flexGrow, ...columnProps, ...columnsSameProps }}
            >
              <HeaderCell className="headerCell">{header}</HeaderCell>

              {customCell ? (
                <CustomCell<TData>
                  {...{
                    ...cellProps,
                    customCell,
                  }}
                />
              ) : (
                <NormalCell<TData>
                  {...{
                    ...cellProps,
                    formatter,
                  }}
                />
              )}
            </Column>
          );
        })}
      </RSTable>

      {data.length > 10 && (
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "-", "limit", "|", "pager", "skip"]}
          total={data.length}
          limit={limit}
          limitOptions={[5, 10, 25, 50, 100]}
          onChangeLimit={setLimit}
          activePage={page}
          onChangePage={setPage}
          style={{
            marginTop: "24px",
          }}
        />
      )}
    </>
  );
};

export default Table;
