import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { TStudent } from "@/types/admission";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCZvCHpPiHAfmCFkP2K3eWc68kbXRybOTA",
  authDomain: "remontadapp-32767.firebaseapp.com",
  databaseURL: "https://remontadapp-32767-default-rtdb.firebaseio.com",
  projectId: "remontadapp-32767",
  storageBucket: "remontadapp-32767.appspot.com",
  messagingSenderId: "600294478627",
  appId: "1:600294478627:web:051edcd652b07ab11b7296",
  measurementId: "G-E3229VPNSE",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

async function addSubmission(body: TStudent, file: File) {
  try {
    const storageRef = ref(storage, `/profile/${file.name}`);
    const response = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(response.ref);
    await addDoc(collection(db, "submissions"), { ...body, image: url });
    // alert('Successfully Added')

    toast.success("Admission Form has been submitted");
  } catch (e: any) {
    console.log(e.message);
  }
}
async function getSubmissions() {
  try {
    const querySnapshot = await getDocs(collection(db, "submissions"));
    const users: TStudent[] = [];
    querySnapshot.forEach((doc: any) => {
      users.push({ ...doc.data(), id: doc.id });
    });

    return users;
  } catch (e) {
    console.log(e);
  }
}

async function getAdmissionType() {
  try {
    const querySnapshot = await getDocs(collection(db, "admissionType"));
    const users: TStudent[] = [];
    querySnapshot.forEach((doc: any) => {
      users.push({ ...doc.data(), id: doc.id });
    });

    return users;
  } catch (e) {
    console.log(e);
  }
}

async function getAdmissionFor() {
  try {
    const querySnapshot = await getDocs(collection(db, "admissionFor"));
    const users: TStudent[] = [];
    querySnapshot.forEach((doc: any) => {
      users.push({ ...doc.data(), id: doc.id });
    });

    return users;
  } catch (e) {
    console.log(e);
  }
}
async function getClass() {
  try {
    const querySnapshot = await getDocs(collection(db, "class"));
    const users: TStudent[] = [];
    querySnapshot.forEach((doc: any) => {
      users.push({ ...doc.data(), id: doc.id });
    });

    return users;
  } catch (e) {
    console.log(e);
  }
}
async function getSubmissionsByID(idd: string) {
  const docRef = doc(db, "submissions", idd);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
}

// async function register(email, password, name) {

//         const userCredential = await createUserWithEmailAndPassword(auth, email, password)
//         const uid = userCredential.user.uid
//         await setDoc(doc(db, "users", uid), {
//             name,
//             email,
//             password

//         })
//         alert('Successfully Registered and added in database')

// }
// async function updateProfile(email,name){
//     const userr = auth.currentUser;
//     // console.log("user ===>", userr.uid);
//     // return userr.uid

//     try {
//         await setDoc(doc(db, "users", userr.uid), {

//             email,
//             name

//         })
//         alert('Successfully Updated')
//     } catch (e) {
//         alert(e.message)

//     }

// }

async function loginAdmin(email: string, password: string) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (user?.user) {
      localStorage.setItem("isLogin", "true");
    }
    return user as any;
  } catch (e) {
    console.log("error===>", e);
  }
}

// async function addPosts(title, price, description, dropdown,location,datetime,files) {
//     let urls = []
//     for(let i = 0; i < files.length; i++) {
//       const storageRef = ref(storage, `/profile/${files[i].name}`);
//       const response = await uploadBytes(storageRef, files[i])
//       const url = await getDownloadURL(response.ref)
//       urls.push(url)
//     }
//     try {
//         await addDoc(collection(db, "posts"), {
//             title : title,
//             price : price,
//             description : description,
//             dropdown : dropdown,
//             location : location,
//             time:datetime,
//             image : urls

//         })
//         alert('Successfully Added')
//     } catch (e) {
//         alert(e.message)

//     }
// }
// async function getAds() {
//     const querySnapshot = await getDocs(collection(db, "posts"))
//     const ads = []
//     querySnapshot.forEach((doc) => {
//       ads.push({ ...doc.data(), id: doc.id })
//     })
//     return ads
//   }

//  async function profile(){
//     const userr = auth.currentUser;

//         const docRef = doc(db, "users", userr.uid);
//         const docSnap = await getDoc(docRef);
//         const data = docSnap.data();
//         return data

// }
export {
  addSubmission,
  getAdmissionFor,
  getAdmissionType,
  getClass,
  getSubmissions,
  getSubmissionsByID,
  loginAdmin,
};
