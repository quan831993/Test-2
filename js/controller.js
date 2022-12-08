const controller = {};
controller.register = (data) => {
    if (data.firstName == "") {
        view.setErrorMessage("errorFirstName", "Please input first name again!");
    } else {
        view.setErrorMessage("errorFirstName", "");
    }
    if (data.lastName == "") {
        view.setErrorMessage("errorLastName", "Please input last name again!");
    } else {
        view.setErrorMessage("errorLastName", "");
    }
    if (data.email == "") {
        view.setErrorMessage("errorEmail", "Please input email again!");
    } else {
        view.setErrorMessage("errorEmail", "");
    }
    if (data.password == "") {
        view.setErrorMessage("password", "Please input password again!");
    } else {
        view.setErrorMessage("password", "");
    }
    if (data.password.length < 6) {
        view.setErrorMessage("password", "Password should be at least 6 characters!");
    } else {
        view.setErrorMessage("password", "");
    }
    if (data.confirmPassword == "") {
        view.setErrorMessage("confirmPassword", "Please input confirm password again!");
    } else {
        view.setErrorMessage("confirmPassword", "");
    }
    if (data.confirmPassword.length < 6) {
        view.setErrorMessage("confirmPassword", "Confirm password should be at least 6 characters!");
    } else {
        view.setErrorMessage("confirmPassword", "");
    }
    if (data.confirmPassword != data.password) {
        view.setErrorMessage("confirmPassword", "Please input confirm password again!");
    } else {
        view.setErrorMessage("confirmPassword", "");
    }
    if (data.email && data.password && data.password == data.confirmPassword) {
        model.register(data);
    }
}
controller.showPassword = () => {
    let password = document.getElementById("pass");
    if (password.type == "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
controller.showConfirmPassword = () => {
    let confirmPassword = document.getElementById("confirmPass");
    if (confirmPassword.type == "password") {
        confirmPassword.type = "text";
        iconClose.classList.remove("fa-eye");
        iconClose.classList.add("fa-eye-slash");
    } else {
        confirmPassword.type = "password";
        iconClose.classList.remove("fa-eye-slash");
        iconClose.classList.add("fa-eye");
    }
}
controller.login = (data) => {
    console.log("data", data);
    if (data.email == "") {
        view.setErrorMessage("errorEmail", "Please input email again!");
    } else {
        view.setErrorMessage("errorEmail", "");
    }
    if (data.password == "") {
        view.setErrorMessage("errorPassword", "Please input password again!");
    } else {
        view.setErrorMessage("errorPassword", "");
    }
    if (data.email && data.password) {
        model.login(data);
    }
}
controller.logOut = () => {
    let confirmLogOut = confirm("Do you wanna sign out?");
    if (confirmLogOut) {
        firebase.auth().signOut();
    }
}
controller.showChangeBox = () => {
    // let showBox = document.getElementById("changePassForm");
    // showBox.setAttribute("style", "display:block");
    firebase.auth().sendPasswordResetEmail(auth.currentUser.email)
  .then(() => {
    alert("Please check your mail!")
    setTimeout(() => {
        firebase.auth().signOut();
    }, 4000);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
controller.hideChangePass = () => {
    let hideBox = document.getElementById("changePassForm");
    hideBox.setAttribute("style", "display:none");
}
controller.changePassword = (data1, data2) => {
    let uid = auth.currentUser.email;
    let recentPassword = "";
    const firestoreQueries = async () => {
        try {
            let response = await firebase.firestore()
                .collection("User")
                .doc(uid)
                .get();
            console.log(response.data().password);
            recentPassword = response.data().password;
            console.log(recentPassword);
            console.log(data1, data2);
            if (data1 != recentPassword) {
                view.errorRecentPassword("errorRecenPassword", "Password is not correct!")
            } else {
                console.log(uid);
                model.updatePassword(data2, uid);
            }

        }
        catch (error) {
            console.log(error.message);
        }
    }
    firestoreQueries();
    console.log(recentPassword);
}


controller.buy = async (data) => {
    try {
        data.num = 1;
        let response = await firebase.firestore()
            .collection("User")
            .doc(auth.currentUser.email)
            .get()
        let inCart = response.data().Cart
        if (inCart == undefined) {
            let response = await firebase.firestore()
                .collection("User")
                .doc(auth.currentUser.email)
                .update({ Cart: firebase.firestore.FieldValue.arrayUnion(data) })
        } else {
            let flag = 0;
            for (let i = 0; i < inCart.length; i++) {
                if (inCart[i].name == data.name) {
                    inCart[i].num++
                    flag = 1;
                }
            }
            await firebase.firestore()
                .collection("User")
                .doc(auth.currentUser.email)
                .set({ Cart: inCart })
            if (flag == 0) {
                let response = await firebase.firestore()
                    .collection("User")
                    .doc(auth.currentUser.email)
                    .update({ Cart: firebase.firestore.FieldValue.arrayUnion(data) })
            }
        }
        controller.myCart()
    } catch (error) {
        console.log(error.message);
    }
}
controller.myCart = async () => {
    try {
        let response = await firebase.firestore()
            .collection("User")
            .doc(auth.currentUser.email)
            .get()
        console.log(response.data().Cart);
        view.totalPrint(response.data().Cart)
        view.inCart(response.data().Cart);
    } catch (error) {
        console.log(error.message);
    }
}
controller.confirmCheckOut = (data) => {
    if (data.name == "") {
        view.setErrorMessage("errorNameConfirm", "Name can not blank!");
    } else {
        view.setErrorMessage("errorNameConfirm", "");
    }
    if (data.phoneNumber == "") {
        view.setErrorMessage("errorPhoneConfirm", "Phone number can inot blank!");
    }else if (data.phoneNumber.length < 10) {
        view.setErrorMessage("errorPhoneConfirm", "Phone number is too short!");
    }else {
        view.setErrorMessage("errorPhoneConfirm", "");
    } if (data.province == "") {
        view.setErrorMessage("errorProvinceConfirm", "Please choose your provice!");
    } else {
        view.setErrorMessage("errorProvinceConfirm", "");
    } if (data.district == "") {
        view.setErrorMessage("errorDistrictConfirm", "Please choose your district!");
    } else {
        view.setErrorMessage("errorDistrictConfirm", "");
    } if (data.ward == "") {
        view.setErrorMessage("errorWardConfirm", "Please choose your ward!");
    } else {
        view.setErrorMessage("errorWardConfirm", "");
    } if (data.name !="" && data.phoneNumber !="" && data.province !="" && data.district !="" && data.ward !="" ) {
        model.removeAllCart();
        
        
        
    }
}
