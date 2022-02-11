import React, { useContext, useEffect } from "react";
import AppContext from "../providers/AppContext";

function QlikSearch() {
  const app = useContext(AppContext);

  const render = async () => {
    const sel = await app.nbl.selections();
    sel.mount(document.querySelector("#chartSearch"));
  };

  useEffect(() => {
    if (app.nbl) render();
  }, [app.nbl]);

  return <div id="chartSearch" className="lg:ml-80 bg-amber-600"></div>;
}

export default QlikSearch;
