import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { HiHeader as Header } from "./components/Header";
import { HiTable as Table } from "./components/Table";

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

  return data.applications.map((application: Application) => (
    <div key={application.id}>
      <h3>{application.name}</h3>
      <br />
      <b>Version:</b>
      <p>{application.version}</p>
      <br />
      <b>About this application:</b>
      <p>{application.description}</p>
      <br />
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayApplications />
      <Table />
    </div>
  );
}

export default App;
