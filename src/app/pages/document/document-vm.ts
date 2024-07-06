import { DocumentToolbarVM } from "../../components/document-toolbar/document-toolbar-vm";
import { AppEventsEnum } from "../../events/app-events-enum";
import { EventListener } from "../../events/event-listener";
import { readableUUID } from "../../events/readable-uuid";

export class DocumentVM extends EventListener {
    justify: string = "left";

    constructor() {
        super(readableUUID(DocumentVM.name));

        this.emitEventAsync(AppEventsEnum.nestedToolbarAvailable, new DocumentToolbarVM());
        this.addEventListener(AppEventsEnum.documentToolbarOptionChange, (justify: string) => {
            this.justify = justify;
        });
    }
}