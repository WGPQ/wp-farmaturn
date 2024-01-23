import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAt-R3JoDjyImyOABI_f1d3f9KS1qt7ass",
  authDomain: "app-farmaturn-db.firebaseapp.com",
  databaseURL: "https://app-farmaturn-db-default-rtdb.firebaseio.com",
  projectId: "app-farmaturn-db",
  storageBucket: "app-farmaturn-db.appspot.com",
  messagingSenderId: "106528600181",
  appId: "1:106528600181:web:4e89e68bba832ac0ba883c",
};
const app = initializeApp(firebaseConfig);
export default app;
