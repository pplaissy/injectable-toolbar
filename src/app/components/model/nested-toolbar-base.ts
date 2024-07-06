import { readableUUID } from "../../events/readable-uuid";
import { NestedToolbarTypeEnum } from "./nested-toolbar-type-enum";
import { EventListener } from "../../events/event-listener";

export abstract class NestedToolbarBase extends EventListener {
    type: NestedToolbarTypeEnum = NestedToolbarTypeEnum.none;

    constructor(type: NestedToolbarTypeEnum) {
        super(readableUUID(NestedToolbarBase.name));
        
        this.type = type;
    }
}