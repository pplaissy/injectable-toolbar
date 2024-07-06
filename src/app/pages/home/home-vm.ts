import { AppEventsEnum } from "../../events/app-events-enum";
import { EventEmitter } from "../../events/event-emitter";

export class HomeVM extends EventEmitter {
    constructor() {
        super();

        this.emitEventAsync(AppEventsEnum.nestedToolbarAvailable, undefined);
    }
}