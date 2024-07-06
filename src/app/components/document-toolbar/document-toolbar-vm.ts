import { SelectButtonChangeEvent } from "primeng/selectbutton";
import { NestedToolbarBase } from "../model/nested-toolbar-base";
import { NestedToolbarTypeEnum } from "../model/nested-toolbar-type-enum";
import { AppEventsEnum } from "../../events/app-events-enum";

export class DocumentToolbarVM extends NestedToolbarBase {
    justifyOptions: any[] = [
        { icon: 'pi pi-align-left', justify: 'Left' },
        { icon: 'pi pi-align-right', justify: 'Right' },
        { icon: 'pi pi-align-center', justify: 'Center' },
        { icon: 'pi pi-align-justify', justify: 'Justify' }
    ];
    value: any;

    constructor() {
        super(NestedToolbarTypeEnum.document);

        this.value = this.justifyOptions[0];
    }

    onOptionChange(e: SelectButtonChangeEvent): void {
        this.emitEventAsync(AppEventsEnum.documentToolbarOptionChange, e.value.justify);
    }
}