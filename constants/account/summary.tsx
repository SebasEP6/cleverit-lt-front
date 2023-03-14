import { IColumn } from "@/components/Table/Table.types";
import { Text } from "@/components/Text";
import { IFormatedSummary } from "@/pages/account/summary";

export const summaryColumns: IColumn<IFormatedSummary>[] = [
  {
    header: <Text content="Nro Transacción" />,
    dataKey: "number",
  },
  {
    header: <Text content="Tipo" />,
    dataKey: "type",
  },
  {
    header: <Text content="Monto" />,
    dataKey: "amount",
  },
  {
    header: <Text content="Estado cuenta" />,
    dataKey: "total",
  },
];