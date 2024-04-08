import { useState } from "react";
import "./App.css";
import getSearchResults from "./services/getSearchResults";

function App() {
  const payload = useState({
    searches: [
      {
        query_by: "",
        collection: "properties",
        q: "*",
        facet_by:
          "dump.bank.bank_name,dump.bank.bank_slug,dump.location.state_name,dump.location.state_slug,dump.asset.asset_type_name,dump.asset.asset_type_slug",
        facet_return_parent:
          "dump.bank.bank_name,dump.bank.bank_slug,dump.location.state_name,dump.location.state_slug,dump.asset.asset_type_name,dump.asset.asset_type_slug",
        fitler: "true",
        filter_by: "",
        infix: "always",
      },
    ],
  });
  return (
    <div onClick={() => getSearchResults(payload)}>hi there click me. </div>
  );
}

export default App;
