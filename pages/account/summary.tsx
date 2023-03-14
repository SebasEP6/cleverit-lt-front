import { MainContainer } from "@/components/Container";
import Table from "@/components/Table/Table";
import { Title } from "@/components/Text";
import { summaryColumns } from "@/constants/account/summary";
import { NextPage } from "next";
import { useState } from "react";

export interface IFormatedSummary {
  number: string;
  type: string;
  amount: string;
  total: string;
}



const AccountSummary: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IFormatedSummary[]>([]);

  // useEffect => getData

  return (
    <MainContainer>
      <Title content="Summary" />

      <Table
        loading={loading}
        data={data}
        columns={summaryColumns}
        hover={false}
      />
    </MainContainer>
  );
};

export default AccountSummary;