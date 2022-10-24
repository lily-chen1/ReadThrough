const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

exports.addMissingFields = functions.firestore
  .document("users/{userId}")
  .onCreate(async (snap, context) => {
    console.log("addMissingFields cloud function was called");
    const userRef = snap.ref;

    return userRef
      .set(
        {
          name: "Lily Chen",
          jobTitle: "Writer",
          bio: "super cool bio",
          profilePic:
            "https://static5.depositphotos.com/1006844/519/i/600/depositphotos_5196564-stock-photo-beautiful-young-woman-kissing-a.jpg",
        },
        { merge: true }
      )
      .then(() => {
        console.log("Added missing fields to newly created user");
        return null;
      })
      .catch((error) => {
        console.error(
          "Error adding missing fields to newly created user",
          error
        );
        return null;
      });
  });

/*
    const exampleUser = { "jobTitle"}
    const userData = await userRef.get();
    const test = Object.keys(userData._fieldsProto);
    console.log(test);
*/
