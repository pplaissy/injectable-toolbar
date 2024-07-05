import { MainToolbarVM } from "./components/main-toolbar/main-toolbar-vm";
import { EventListener } from "./events/event-listener";
import { readableUUID } from "./events/readable-uuid";

export class AppVM extends EventListener {
    mainToolbarVM: MainToolbarVM | undefined;

    constructor() {
        super(readableUUID(AppVM.name));

        this.mainToolbarVM = new MainToolbarVM();
    }

}