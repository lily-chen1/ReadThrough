import { configure } from "mobx";

import UserStore from "./userStore";

configure({ enforceActions: true });

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
