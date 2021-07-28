import React from "react";
import { Treemap } from "@gooddata/sdk-ui-charts";
import * as Ldm from "../ldm";
import Hint from "./Hint";

export default () => (
  <>
    <h1>Soil Data</h1>
    <div style={{ height: 300 }}>
      <Treemap
        measures={[Ldm.Revenue]}
        viewBy={Ldm.ProductCategory}
        segmentBy={Ldm.Product}
        //config={{ legend: { position: "top" } }}
      />
    </div>

    <Hint />
  </>
);
