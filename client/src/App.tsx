import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { HiHeader as Header } from "./components/Header";
import { HiTable as Table } from "./components/Table";
import { HiCard as Card } from "./components/Card";
import { HiBlock as Block } from "./components/Block";
import { HiForm as Form } from "./components/Form";
import { HiAbout as About } from "./components/About";
import { HiTabs as Tabs } from "./components/Tabs";
import { HiCardHorizontal as CardHorizontal } from "./components/CardHorizontal";
import { HiBreadcrumb as Breadcrumb } from "./components/Breadcrumb";
import { useGetApplicationsQuery } from "./store/services";
import { Shimmer } from "@spark-design/react";

const GET_APPLICATIONS = gql`
  query GetApplications {
    applications {
      id
      name
      version
      description
    }
  }
`;

function DisplayApplications() {
  const { loading, error, data } = useQuery(GET_APPLICATIONS);
  const { data: applications } = useGetApplicationsQuery(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(applications);

  type Application = {
    id: string;
    name: string;
    version: string;
    description: string;
  };

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "2rem" }}>
      {data.applications.map((application: Application) => (
        <div key={application.id}>
          <Card
            title={application.name}
            content={application.description}
            footerContent={application.version}
          />
        </div>
      ))}
      <Shimmer items={1} skeleton="card" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumb />
      <CardHorizontal />
      <DisplayApplications />
      <Block />
      <Table />
      <Form />
      <Tabs />
      <About />
    </div>
  );
}

export default App;
