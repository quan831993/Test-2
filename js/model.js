const model = {};
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALxoDKtyJPOJl64YMRbj63sHOJ3Y7v7-Y",
  authDomain: "project-2-8e9a5.firebaseapp.com",
  projectId: "project-2-8e9a5",
  storageBucket: "project-2-8e9a5.appspot.com",
  messagingSenderId: "162264097269",
  appId: "1:162264097269:web:8543572cf2af2bf49240bc"
})
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

model.register = async (data) => {
  try {
    await auth.createUserWithEmailAndPassword(data.email, data.password);
    await firebase.firestore()
      .collection("Users")
      .doc(auth.currentUser.email)
      .set({
        userInfor: data
      })
    firebase.auth().signOut()
  } catch (error) {
    alert(error.message);
  }
}
model.login = async (data) => {
  try {
    await auth.signInWithEmailAndPassword(data.email, data.password);
    
  } catch (error) {
    alert(error.message);
  }
}
// model.updatePassword = async (data, uid) => {
//   try {
//     const user = firebase.auth().currentUser;
//     await user.updatePassword(data);
//     alert("Change password is success!")
//     await firebase.firestore()
//       .collection("User")
//       .doc(uid)
//       .set({ pasword: data })
//   }
//   catch (error) {
//     console.log(error.message);
//   }

// }

model.updateCart = async (newData) => {
  try {
    await firebase.firestore()
      .collection("User")
      .doc(auth.currentUser.email)
      .set({ Cart: newData })
      model.getDataCart()
  } catch (error) {
console.log(error.message);
  }
}


model.getDataCart = async() =>{
  try {
    let response = await firebase.firestore()
    .collection("User")
    .doc(auth.currentUser.email)
    .get()
    view.inCart(response.data().Cart)
  } catch (error) {
    console.log(error.message);
  }
}

model.deleteDataCart = async(data) => {
  try {
    await firebase.firestore()
    .collection("User")
    .doc(auth.currentUser.email)
    .set({Cart:data})
    model.getDataCart()
  } catch (error) {
    console.log(error.message);
  }
}

model.removeAllCart = async() =>{
  try {
    await firebase.firestore()
    .collection("User")
    .doc(auth.currentUser.email)
    .set({ Cart: []})
    
   
   
    // setTimeout(() => {
    //   window.location.reload()
    // }, 4000);

      
  } catch (error) {
    console.log(error.message);
  }
}

model.getApi= ()=> {
  fetch('https://provinces.open-api.vn/api/?depth=3')
                .then((response) => response.json())
                .then((data) => {
                  view.getApi(data)
})
}
