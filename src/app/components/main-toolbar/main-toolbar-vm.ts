import { MenuItem } from "primeng/api";
import { NestedToolbarBase } from "../model/nested-toolbar-base";
import { EventListener } from "../../events/event-listener";
import { readableUUID } from "../../events/readable-uuid";
import { AppEventsEnum } from "../../events/app-events-enum";

export class MainToolbarVM extends EventListener {
    items: MenuItem[] = [];
    nestedToolbar: NestedToolbarBase | undefined;

    constructor() {
        super(readableUUID(MainToolbarVM.name));

        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: 'home'
            },
            {
                label: 'Document',
                icon: 'pi pi-file-word',
                routerLink: 'document'
            },
            {
                label: 'Charts',
                icon: 'pi pi-chart-bar',
                routerLink: 'charts'
            }
        ];

        this.addEventListener(AppEventsEnum.nestedToolbarAvailable, (nestedToolbar: NestedToolbarBase) => {
            this.nestedToolbar = nestedToolbar;
        });

    }
}