declare var liquidFillGauge: any;

declare namespace lfg {
    export function loadLiquidFillGauge(svg: any, value: any, settings: any): any;
    export function liquidFillGaugeDefaultSettings(): any;
}

declare module 'lfg' {
    export = lfg;
}
