import { SelectButtonChangeEvent } from "primeng/selectbutton";
import { NestedToolbarBase } from "../model/nested-toolbar-base";
import { NestedToolbarTypeEnum } from "../model/nested-toolbar-type-enum";
import { AppEventsEnum } from "../../events/app-events-enum";

export class ChartsToolbarVM extends NestedToolbarBase {
    chartOptions: any[] = [
        { icon: 'pi pi-chart-bar', chart: 'bar' },
        { icon: 'pi pi-chart-pie', chart: 'pie' },
        { icon: 'pi pi-chart-line', chart: 'line' }
    ];
    value: any;

    constructor() {
        super(NestedToolbarTypeEnum.charts);

        this.value = this.chartOptions[0];
    }

    onOptionChange(e: SelectButtonChangeEvent): void {
        this.emitEventAsync(AppEventsEnum.chartsToolbarOptionChange, e.value.chart);
    }
}