/// <amd-dependency path='liquidFillGauge'>

module powerbi.extensibility.visual {
     export class Visual implements IVisual {
         private gauge: any;
         private svg: d3.Selection<SVGElement>;

        constructor(options: VisualConstructorOptions) {
             let svg = this.svg = d3.select(options.element).append('svg').classed('liquidFillGauge', true);


         }

        public update(options: VisualUpdateOptions) {

             var dataView = options.dataViews[0];
             if (dataView) {
                 var value = dataView.single.value;
                 if (value >= 0) {
                     if (!this.gauge) {
                         this.gauge = lfg.loadLiquidFillGauge(this.svg, value, lfg.liquidFillGaugeDefaultSettings());
                     } else {
                         this.gauge.update(value)
                     }
                 }
             }
         }



        public destroy(): void {
         }
     }
 }
