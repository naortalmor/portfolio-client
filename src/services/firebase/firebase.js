import * as firebase from "firebase";

class Firebase {
    constructor() {
      const firebaseConfig = {
        apiKey: "AIzaSyAKew4btGgo1LjBdZN1HUC2_q1m8vxp1f4",
        authDomain: "or-portfolio.firebaseapp.com",
        databaseURL: "https://or-portfolio.firebaseio.com",
        projectId: "or-portfolio",
        storageBucket: "or-portfolio.appspot.com",
        messagingSenderId: "109857253058",
        appId: "1:109857253058:web:ed920215bca14887357d5b",
        measurementId: "G-PQ044Z89HL"
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
    }
  }

  export default Firebase;