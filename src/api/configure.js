import { embed } from "@nebula.js/stardust";
import barchart from '@nebula.js/sn-bar-chart';
import piechart from '@nebula.js/sn-pie-chart';
import combochart from '@nebula.js/sn-combo-chart';
// import linechart from '@nebula.js/sn-line-chart';
// import scatterplot from "@nebula.js/sn-scatter-plot";
import kpi from "@nebula.js/sn-kpi";
import table from "@nebula.js/sn-table";



const n = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
  },
  types: [
      {
        name: 'barchart',
        load: () => Promise.resolve(barchart),
      },   
      {
        name: 'kpi',
        load: () => Promise.resolve(kpi),
      },   
      {
        name: 'combochart',
        load: () => Promise.resolve(combochart),
      },   
    //   {
    //     name: 'linechart',
    //     load: () => Promise.resolve(linechart),
    //   },
      {
        name: 'piechart',
        load: () => Promise.resolve(piechart),
      },
    //   {
    //     name: 'scatterplot',
    //     load: () => Promise.resolve(scatterplot),
    //   },
      {
        name: 'table',
        load: () => Promise.resolve(table),
      },
    ]
});

export default n;