import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { where, query, doc, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzSO6HsdTbwpTvg0R4n9Q0LeYartcRW6E",
    authDomain: "gpdudes-fbc48.firebaseapp.com",
    projectId: "gpdudes-fbc48",
    storageBucket: "gpdudes-fbc48.appspot.com",
    messagingSenderId: "321909415840",
    appId: "1:321909415840:web:78faf60b6451ecc7054ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const fsFetchList = async (id) => {
    let qry
    if (id) {
        qry = query(collection(db, "products"), where('categoryId', '==', id))
    } else {
        qry = query(collection(db, "products"))
    }
    const querySnapshot = await getDocs(qry)
    const firestoreData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return firestoreData;
};

export const fsFetchDetail = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
};