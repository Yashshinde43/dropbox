import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC8t1IE4srsmVebIqNPEl3QKvk1o75GfWA",
    authDomain: "dropbox-61904.firebaseapp.com",
    projectId: "dropbox-61904",
    storageBucket: "dropbox-61904.appspot.com",
    messagingSenderId: "825574267090",
    appId: "1:825574267090:web:656984426d37b22f71750b"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getStorage(app);

export { db, auth };