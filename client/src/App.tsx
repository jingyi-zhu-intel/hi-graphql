import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { HiHeader as Header } from "./components/Header";
import { HiTable as Table } from "./components/Table";
import { HiCard as Card } from "./components/Card";
import { HiBlock as Block } from "./components/Block";
// import { HiBreadcrumb as Breadcrumb } from "./components/Breadcrumb";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

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
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayApplications />
      <Block />
      <br />
      <Table />
    </div>
  );
}

export default App;
