import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { TStudent } from "@/types/admission";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
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
// const auth = getAuth();
const db = getFirestore();

async function addSubmission(body: TStudent) {
  try {
    await addDoc(collection(db, "submissions"), body);
    // alert('Successfully Added')
    toast.success("Admission Form has been submitted");
  } catch (e: any) {
    alert(e.message);
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

// async function login(email, password) {

//         const user = await signInWithEmailAndPassword(auth, email, password)
//         alert('Successfully LoggedIn')

//         return user

// }

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

//  async function getAdDetail(idd) {

//     const docRef = doc(db, "posts", idd);
//     const docSnap = await getDoc(docRef);
//     const data = docSnap.data()
//     return data
//   }

//  async function profile(){
//     const userr = auth.currentUser;

//         const docRef = doc(db, "users", userr.uid);
//         const docSnap = await getDoc(docRef);
//         const data = docSnap.data();
//         return data

// }
export { addSubmission, getSubmissions };
