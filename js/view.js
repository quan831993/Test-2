const view = {};
view.setScreenActive = (screenName) => {
    switch (screenName) {
        case "registerPage":
            let app = document.getElementById("app");
            app.innerHTML = component.registerPage;
            let registerForm = document.getElementById("registerForm");
            registerForm.addEventListener("submit", (e) => {
                e.preventDefault();

                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }

                controller.register(data)
            })
            view.setErrorMessage = (id, content) => {
                document.getElementById(id).innerHTML = content;
            }

            let icon = document.getElementById("icon");
            icon.addEventListener("click", () => {
                controller.showPassword();
            })

            let iconClose = document.getElementById("iconClose");
            iconClose.addEventListener("click", () => {
                controller.showConfirmPassword();
            })


            let directLogin = document.getElementById("signIn");
            directLogin.addEventListener("click", () => {
                view.setScreenActive("loginPage");
            });

            break;
        case "loginPage":
            document.getElementById("app").innerHTML = component.loginPage;
            let loginForm = document.getElementById("loginForm");
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(data)
            })
            view.setErrorMessage = (id, content) => {
                document.getElementById(id).innerHTML = content;
            }
            let icon1 = document.getElementById("icon");
            icon1.addEventListener("click", () => {
                controller.showPassword();
            })
            let directRegister = document.getElementById("register")
            directRegister.addEventListener("click", () => {
                view.setScreenActive("registerPage");
            })
            break;
        case "homePage":
            view.setErrorMessage = (id, content) => {
                document.getElementById(id).innerHTML = content;
            }
            document.getElementById("app").innerHTML = component.homePage;
            let logOut = document.getElementById("logOut");
            logOut.addEventListener("click", () => {
                controller.logOut();
            })
            let showChangeBox = document.getElementById("changePass");
            showChangeBox.addEventListener("click", () => {
                controller.showChangeBox();
            })
            let hideChangePass = document.getElementById("btnCancel");
            hideChangePass.addEventListener("click", () => {
                controller.hideChangePass();
            })
            view.setErrorMessage = (id, content) => {
                document.getElementById(id).innerHTML = content;
            }
            let changePassForm = document.getElementById("changePassForm");

            changePassForm.addEventListener("submit", (e) => {
                let insertPass = document.getElementById("recentPassword").value;
                let newPass = document.getElementById("newPassword").value;
                e.preventDefault();

                console.log(insertPass, newPass);
                controller.changePassword(insertPass, newPass);
                view.errorRecentPassword = (id, message) => {
                    document.getElementById(id).innerHTML = message;
                }
            })
            function slideShow() {
                let result1 = "";
                let result2 = "";
                let carouselExampleIndicators = document.getElementById("mySlide")
                let picture = document.getElementById("slide");
                for (let i = 0; i < listSlide.length; i++) {
                    result1 += `
                            <li data-target="#carouselExampleIndicators" data-slide-to="${i}" class=${i == 0 ? "active" : ""}></li>                           
                        `
                    result2 += ` 
                            <div class=${i == 0 ? `"carousel-item active"` : "carousel-item"}>
                                <img class="d-block w-100" src="${listSlide[i]}" >
                            </div>
                      `
                }
                carouselExampleIndicators.innerHTML = result1
                picture.innerHTML = result2

            }
            slideShow();



            let showLap = document.getElementById("laptop");
            showLap.addEventListener("click", () => {
                let list = document.getElementById("mainBody");
                let listLap = "";
                for (let i = 0; i < lap.length; i++) {
                    listLap +=
                        `
             <div class="grid-item">
                <h2 class="product-lap_name">${lap[i].name}</h2>
                 <div class="product-lap_img"><img src="${lap[i].image}" class="" alt=""></div>
                 <div class="product-lap_windows">${lap[i].windows}</div>
                 <div class="product-lap_CPU">${lap[i].CPU}</div>
                 <div class="product-lap_RAM">${lap[i].RAM}</div>
                 <div class="product-lap_GPU">${lap[i].GPU}</div>
                 <div class="product-lap_screen">${lap[i].screen}</div>
                 <div class="product-lap_SSD">${lap[i].SSD}}</div>
                 <h3 class="product-lap_price1">${lap[i].price1}</h3><hr>
                 <div class="btnProduct" id="btnProduct">
                    <button class = "addToCart">Add to cart</button>
                 </div>
             </div> 
        `
                }
                list.innerHTML = listLap;
                let buy = document.querySelectorAll(".addToCart");
                for (let i = 0; i < buy.length; i++) {
                    buy[i].addEventListener("click", () => {
                        alert(`${lap[i].name} has been added to your cart`)
                        controller.buy(lap[i]);
                    })
                }
            })

            let showPhone = document.getElementById("phone");
            showPhone.addEventListener("click", () => {
                let list = document.getElementById("mainBody");
                let listPhone = "";
                for (let i = 0; i < phone.length; i++) {
                    listPhone +=
                        `
            <div class="grid-item">
                <h2 class="product-phone_name">${phone[i].name}</h2>
                 <div class="product-phone_img"><img src="${phone[i].image}" class="" alt=""></div>
                 <div class="product-phone_GPU">${phone[i].GPU}</div>
                 <div class="product-phone_RAM">${phone[i].RAM}</div> 
                 <div class="product-phone_screen">${phone[i].storage}</div>
                 <div class="product-phone_SSD">${phone[i].battery}}</div>
                 <h3 class="product-phone_price1">${phone[i].price1}</h3><hr>
                 <div class="btnProduct" id="btnProduct">
                    <button class = "addToCart">Add to cart</button>
                 </div> 
            </div> 
        `
                }
                list.innerHTML = listPhone;
                let buy = document.querySelectorAll(".addToCart");
                for (let i = 0; i < buy.length; i++) {
                    buy[i].addEventListener("click", () => {
                        alert(`${phone[i].name} has been added to your cart`)
                        controller.buy(phone[i]);
                    })
                }
            })

            let showCom = document.getElementById("com");
            showCom.addEventListener("click", () => {
                let list = document.getElementById("mainBody");
                let listCom = "";
                for (let i = 0; i < com.length; i++) {
                    listCom +=
                        `
            <div class="grid-item">
                <h2 class="product-com_name">${com[i].name}</h2>
                <div class="product-com_img"><img src="${com[i].image}" class="" alt=""></div>
                <div class="product-com_windows">${com[i].windows}</div>
                <div class="product-com_CPU">${com[i].CPU}</div>
                <div class="product-com_RAM">${com[i].RAM}</div>
                <div class="product-com_GPU">${com[i].GPU}</div>
                <div class="product-com_SSD">${com[i].SSD}}</div>
                <h3 class="product-com_price1">${com[i].price1}</h3><hr>
                <div class="btnProduct" id="btnProduct">
                    <button class = "addToCart">Add to cart</button>
                </div> 
            </div> 
        `
                }
                list.innerHTML = listCom;
                let buy = document.querySelectorAll(".addToCart");
                for (let i = 0; i < buy.length; i++) {
                    buy[i].addEventListener("click", () => {
                        alert(`${com[i].name} has been added to your cart`);
                        controller.buy(com[i]);
                    })
                }
            })

            let showMainboard = document.getElementById("mainboard");
            showMainboard.addEventListener("click", () => {
                controller.showCom();
            })

            let showGraphicsCard = document.getElementById("graphicsCard");
            showGraphicsCard.addEventListener("click", () => {
                controller.showLap();
            })

            let showMonitor = document.getElementById("monitor");
            showMonitor.addEventListener("click", () => {
                controller.showPhone();
            })

            let showCases = document.getElementById("cases");
            showCases.addEventListener("click", () => {
                controller.showPhone();
            })

            let showKeyboard = document.getElementById("keyboard");
            showKeyboard.addEventListener("click", () => {
                controller.showPhone();
            })

            let showMouse = document.getElementById("mouse");
            showMouse.addEventListener("click", () => {
                controller.showPhone();
            })

            let myCart = document.getElementById("myCart");
            myCart.addEventListener("click", () => {
                document.getElementById("cartBox").classList.toggle("activeCartBox");
                controller.myCart();
            })


            view.inCart = (data) => {
                let cartBox = document.getElementById("cartBoxBody");
                cartBox.innerHTML = "";
                for (let index = 0; index < data.length; index++) {
                    cartBox.innerHTML +=
                        `
                    <div class="item">
                        <img src="${data[index].image}" alt="">
                        <h2 class="title">${data[index].name}</h2>
                        <p class="price">${new Intl.NumberFormat('de-DE').format(data[index].price)} đ</p>
                        <p class="unit"><i class="fa-solid fa-circle-minus" id="minus"></i>&ensp;${data[index].num}&ensp;<i class="fa-solid fa-circle-plus" id="plus"></i></span></p>
                        <p class="total">${new Intl.NumberFormat('de-DE').format(data[index].price * data[index].num)} đ</p>
                        <button class="remove">Remove</button>
                    </div>
                    `
                }
                let minusBtn = document.getElementsByClassName("fa-circle-minus")
                for (let i = 0; i < minusBtn.length; i++) {
                    minusBtn[i].addEventListener("click", () => {
                        if (data[i].num > 1) {
                            data[i].num--;
                            model.updateCart(data);
                            view.totalPrint(data);
                        } else {
                            let removeItem = confirm("Do you really want to remove this form cart?");
                            if (removeItem) {
                                data.splice(i, 1)
                                model.deleteDataCart(data);
                                view.totalPrint(data);
                            }
                        }

                    })
                }
                let plusBtn = document.getElementsByClassName("fa-circle-plus");
                for (let i = 0; i < plusBtn.length; i++) {
                    plusBtn[i].addEventListener("click", () => {
                        data[i].num++;
                        model.updateCart(data);
                        view.totalPrint(data);
                    })
                }


                let removeCart = document.getElementsByClassName("remove");
                for (let i = 0; i < removeCart.length; i++) {
                    removeCart[i].addEventListener("click", () => {
                        let removeItem = confirm("Do you really want remove this item?")
                        if (removeItem) {
                            data.splice(i, 1)
                            model.deleteDataCart(data)
                        }
                        view.totalPrint(data);
                    })
                }
                let checkOutForm = document.getElementById("checkOutForm")
                let confirmCheckOut = document.getElementById("confirmCheckOut");
                checkOutForm.addEventListener("submit", (e) => {

                    console.log(checkOutForm.ward.value);
                    e.preventDefault();
                    const data = {
                        name: checkOutForm.name.value,
                        phoneNumber: checkOutForm.phoneNumber.value,
                        province: checkOutForm.province.value,
                        district: checkOutForm.district.value,
                        ward: checkOutForm.ward.value,
                    }
                    console.log("asd");
                    controller.confirmCheckOut(data);
                    
                    document.getElementById("checkOutBox").classList.remove("activeCheckOutBox");
                    document.getElementById("cartBox").classList.remove("activeCartBox");




                })
            }

            let x = document.getElementById("x");
            x.addEventListener("click", () => {
                document.getElementById("cartBox").classList.toggle("activeCartBox");
            })

            view.totalPrint = (data) => {
                let totalPrint = document.getElementById("total");
                let total = 0;
                for (let i = 0; i < data.length; i++) {
                    total += data[i].price * data[i].num;
                }
                totalPrint.innerHTML = `TOTAL: ${new Intl.NumberFormat('de-DE').format(total)} đ`;
            }
            // let x2 = document.getElementById("x2");
            // x2.addEventListener("click", () => {
            //     document.getElementById("checkOutBox").classList.toggle("activeCheckOutBox");
            // })

            let showCheckOutBox = document.getElementById("checkOut");
            showCheckOutBox.addEventListener("click", () => {
                // document.getElementById("checkOutBox").classList.toggle("activeCheckOutBox");
                document.getElementById("cartBox").classList.toggle("activeCartBox");
                view.setScreenActive("cart");
                model.getApi()

            })



            let removeAllCart = document.getElementById("removeAll");
            removeAllCart.addEventListener("click", () => {
                let removeAll = confirm("Do you really want remove all cart?")
                if (removeAll) {
                    model.removeAllCart();
                    model.getDataCart()
                }
                let totalPrint = document.getElementById("total");
                totalPrint.innerHTML = `TOTAL: 0 đ`;

            })
            // call api

            view.getApi = (data) => {
                let array = "";
                let provinceList = document.getElementById("province");
                let districtList = document.getElementById("district");
                let wardList = document.getElementById("ward")
                array = data;
                console.log(array);
                let province = "";
                for (let i = 0; i < array.length; i++) {
                    province +=
                        `
                    <option value="${array[i].name}">${array[i].name}</option>
                    `
                }


                provinceList.innerHTML += province;
                provinceList.addEventListener("change", () => {
                    console.log(provinceList.value);
                    let i;
                    array.forEach((element, index) => {
                        if (element.name == provinceList.value) {
                            i = index
                            console.log(i);
                        }
                    });
                    let district = "";
                    console.log(array[i].districts);
                    for (let index = 0; index < array[i].districts.length; index++) {
                        district +=
                            `
                    <option value="${array[i].districts[index].name}">${array[i].districts[index].name}</option>
                    `
                    }
                    document.getElementById("district").innerHTML += district;
                    districtList.addEventListener("change", () => {
                        console.log(districtList.value);
                        array[i].districts.forEach((item, index) => {
                            if (item.name == districtList.value) {
                                console.log(item.wards);
                                let stringWard = ""
                                for (let index = 0; index < item.wards.length; index++) {
                                    stringWard += `
                                <option value="${item.wards[index].name}">${item.wards[index].name}</option>
                                `
                                }
                                wardList.innerHTML += stringWard
                                console.log(wardList.value);
                            }
                        })
                    })
                })


            }

            break;
            case "cart":
                document.getElementById("mainBody").innerHTML= component.cart;
                let checkOutForm = document.getElementById("checkOutForm")
                let confirmCheckOut = document.getElementById("confirmCheckOut");
                checkOutForm.addEventListener("submit", (e) => {

                    console.log(checkOutForm.ward.value);
                    e.preventDefault();
                    const data = {
                        name: checkOutForm.name.value,
                        phoneNumber: checkOutForm.phoneNumber.value,
                        province: checkOutForm.province.value,
                        district: checkOutForm.district.value,
                        ward: checkOutForm.ward.value,
                    }
                    controller.confirmCheckOut(data);
                    ShowSuccessToast("Thank you for purchased!")
                    setTimeout(() => {
                        view.setScreenActive("homePage");
                    }, 4000);
                  
                    




                })
    }

}









