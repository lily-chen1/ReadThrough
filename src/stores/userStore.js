import { action, computed, makeObservable, observable } from "mobx";

class UserStore {
  user = {};

  constructor() {
    makeObservable(this, {
      user: observable,
      username: computed,
      setUser: action,
    });
  }
  get username() {
    if (this.user.hasOwnProperty("username")) {
      return this.user.username;
    } else {
      return null;
    }
  }
  setUser = (user) => {
    this.user = user;
  };
}

export default UserStore;
