import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../interceptors/firebaseInit";

const PharmacysServices = () => {
  const db = getFirestore(app);

  const getPharmacys = async () => {
    try {
      const citiesCol = collection(db, "pharmacys");
      const citySnapshot = await getDocs(citiesCol);
      const cityList: Pharmacy[] = citySnapshot.docs.map((doc) => ({
        ...(doc.data() as Pharmacy),
        id: doc.id,
      }));
      return cityList;
    } catch (error) {
      console.log(error);
    }
  };
  return { getPharmacys };
};

export default PharmacysServices;
