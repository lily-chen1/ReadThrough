import { action, computed, makeObservable, observable, autorun } from "mobx";

class UserStore {
  user = {};
  constructor() {
    makeObservable(this, {
      pets: observable,
      owners: observable,
      totalOwners: computed,
      totalPets: computed,
      storeDetails: computed,
      getPetsByOwner: action,
      createPet: action,
      createOwner: action,
      updatePet: action,
      updateOwner: action,
      deletePet: action,
      deleteOwner: action,
      assignOwnerToPet: action,
    });

    autorun(this.logStoreDetails);
  }
  get username() {
    return this.user.username;
  }
  setUser(user) {
    this.user = user;
  }
  logUserDetails = () => {
    console.log(`currently logged in as ${this.user.username}`);
  };
}

export default UserStore;
