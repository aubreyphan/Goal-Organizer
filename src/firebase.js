import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBLlPwr-sthPadTd9EHp7oW2whqZ_sPnN4",
    authDomain: "goalcoach-2d9d9.firebaseapp.com",
    databaseURL: "https://goalcoach-2d9d9.firebaseio.com",
    projectId: "goalcoach-2d9d9",
    storageBucket: "",
    messagingSenderId: "631161034679"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');