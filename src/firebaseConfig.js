import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkSDMYecZhitSAYFlNoXw9fkj_UsGFr2w",
    authDomain: "dataviewer-4f1b0.firebaseapp.com",
    projectId: "dataviewer-4f1b0",
    storageBucket: "dataviewer-4f1b0.firebasestorage.app",
    messagingSenderId: "966251084322",
    appId: "1:966251084322:web:7ad8cb3c1e88ede0f3687b",
    measurementId: "G-QSVWG0MTLS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
