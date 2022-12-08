const component = {};
component.registerPage = `
<div class="bodyRegister">
        <div class="register-container">
            <form class="register-form" id="registerForm">
                <div class="title">REGISTER</div>
                <div>
                    <label for="firstName">First name</label><br>
                    <input id="firstName" type="text" placeholder="First name" name="firstName">
                    <div class="error" id="errorFirstName"></div>
                </div>
                <div>
                    <label for="lastName">Last name</label><br>
                    <input id="lastName" type="text" placeholder="Last name" name="lastName">
                    <div class="error" id="errorLastName"></div>
                </div>
                <div>
                    <label for="email">Email</label><br>
                    <input id="email" placeholder="Email" name="email">
                    <div class="error" id="errorEmail"></div>
                </div>
                <div>
                    <label for="pass">Password</label><br>
                    <input id="pass" type="password" placeholder="Password" name="password">
                    <i id="icon" class="fa-solid fa-eye"></i><br>
                    <div class="error" id="password"></div>
                </div>
                <div>
                    <label for="confirmPass">Confirm password</label><br>
                    <input id="confirmPass" type="password" placeholder="Confirm password" name="confirmPassword">
                    <i id="iconClose" class="fa-solid fa-eye"></i> <br>
                    <div class="error" id="confirmPassword"></div>
                </div>
                <button class="button" type="submit">Register</button>
                <div class="login">
                    Have an account? <a id="signIn">Login</a>
                </div>

            </form>
        </div>
    </div>
`
component.loginPage = `
<div class="bodyLogin">
        <div class="login-container">
            <form class="login-form" id="loginForm">
                <div class="title">LOG IN</div>
                
                <div>
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Email" name="email">
                    <div class="error" id = "errorEmail"></div>
                </div>
                <div>
                    <label for="pass">Password</label>
                    <input id="pass" type="password" placeholder="Password" name="password">
                    <i id="icon" class="fa-solid fa-eye"></i><br>
                    <div class="error" id="errorPassword"></div>
                </div>
                <button class="button" type="submit">Log in</button>
                <div class="register">
                    Still don't have an account? <a id = "register">Register</a>
                </div>
                
            </form>
        </div>
    </div>
`

component.homePage = `
<div class="main-container">
        <div class="menu-top">
            <div class="menuLeft">
                <img src="./image/asus-rog.png" alt="">
            </div>
            <div class="menuCenter">
                <div class="dropdown">
                    <p>PRODUCT</p>
                    <div class="dropdown-content" id="dropdown-content">
                        <a class="dropdown-item" id="laptop">Laptop</a>
                        <a class="dropdown-item" id="phone">Phone</a>
                        <a class="dropdown-item" id="com">PC</a>
                        <a class="dropdown-item" id="mainboard">Mainboard</a>
                        <a class="dropdown-item" id="graphicsCard">Graphics card</a>
                        <a class="dropdown-item" id="monitor">Monitor</a>
                        <a class="dropdown-item" id="cases">Cases</a>
                        <a class="dropdown-item" id="keyboard">Keyboard</a>
                        <a class="dropdown-item" id="mouse">Mouse and mouse pad</a>
                    </div>
                </div>
                <div class="dropdown">
                    <p>CREATION</p>
                    <div class="dropdown-content" id="dropdown-content">
                        <a class="dropdown-item">Anime Matrix™ Pixel Editor</a>
                        <a class="dropdown-item">ROG Nebula Display & Nebula HDR</a>
                        <a class="dropdown-item">ROG Intelligent Cooling</a>
                        <a class="dropdown-item">ROG Laptop Display Leadership</a>
                        <a class="dropdown-item">Aura</a>
                        <a class="dropdown-item">Armoury Crate</a>
                    </div>
                </div>
                <div class="dropdown">
                    <p>DOWNLOAD</p>
                    <div class="dropdown-content" id="dropdown-content">
                        <a class="dropdown-item">Wallpaper</a>
                        <a class="dropdown-item">Aura Sync</a>
                        <a class="dropdown-item">Armoury crate</a>
                    </div>
                </div>
                <div class="dropdown">
                    <p>COMMUNITY</p>
                    <div class="dropdown-content" id="dropdown-content">
                        <a class="dropdown-item">ROG Elite Program</a>
                        <a class="dropdown-item">ROG esports teams</a>
                        <a class="dropdown-item">Blogs</a>
                    </div>
                </div>
                <div class="dropdown">
                    <p>SUPPORT</p>
                </div>
            </div>
            <div class="menuRight">
                <div class="dropdown">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="dropdown">
                    <i class="fa-solid fa-user">
                        <div class="showUser"></div>
                    </i>
                    <div class="dropdown-content" id="dropdown-content">
                        <a class="dropdown-item" id="changePass">Change password</a>
                        <a class="dropdown-item" id="logOut">Log out</a>
                    </div>
                </div>
                <div class="changePassForm" id="changePassForm" style="display: none">
                        <form class="changePass" id="changePass">
                            <div class="title">CHANGE PASSWORD</div>
                            <div>
                                <label for="recentPassword">Recent password</label>
                                <input id="recentPassword" type="text" placeholder="Recent password"
                                    name="erecentPassword">
                                <i id="showPass" class="fa-solid fa-eye"></i><br>
                                <div class="error" id="errorRecenPassword"></div>
                            </div>
                            <div>
                                <label for="newPassword">New password</label>
                                <input id="newPassword" type="text" placeholder="New password" name="newPassword">
                                <i id="showNewPass" class="fa-solid fa-eye"></i><br>
                                <div class="error" id="errorNewPassword"></div>
                            </div>
                            <div>
                                <label for="confirmNewPassword">Confirm new password</label>
                                <input id="confirmNewPassword" type="text" placeholder="Confirm new password"
                                    name="confirmNewPassword">
                                <i id="showRenewPass" class="fa-solid fa-eye"></i><br>
                                <div class="error" id="errorNewPassword"></div>
                            </div>
                            <button id="btnCancel" type="button">Cancel</button>
                            <button id="btnConfirm" type="submit">Confirm</button>
                        </form>                   
                </div>
                <div class="dropdown">
                    <i class="fa-solid fa-bag-shopping" id="myCart"></i>
                </div>
            </div>
        </div>
        <div class="mainBody" id="mainBody">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators" id="mySlide">  
                </ol>
                <div class="carousel-inner" id="slide">  
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" id="btn-prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" id="btn-next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div id="cartBox">
            <i class="fa-regular fa-rectangle-xmark" id="x"></i>
            <div id="cartBoxBody"></div>
            <div id="cartBoxFooter">
                <br>
                <span id="total">Total: 0 đ</span>
                <button id="checkOut">CHECK OUT</button>
                <button id="removeAll">REMOVE ALL CART</button>
            </div>
        </div>
        
            <footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4 pb-0" id="footer">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" id="asus" href="https://www.asus.com/vn/">https://www.asus.com/vn/</a>
  </div>
  <!-- Copyright -->
</footer>
`
component.cart =
`
<div id="checkOutBox">

    <h3>CHECK OUT INFO</h3>
    <form id="checkOutForm">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Name">
    <div class="errorConfirm"  id="errorNameConfirm"></div>
    <label for="phoneNumber">Phone number</label>
    <input type="number" id="phoneNumber" placeholder="Phone number">
    <div class="errorConfirm"  id="errorPhoneConfirm"></div>
    <label for="province">Province</label>
    <select name="province" id="province">
        <option value=""></option>
    </select>
    <div class="errorConfirm"  id="errorProvinceConfirm"></div>
    <label for="district">District</label>
    <select name="district" id="district">
        <option value=""></option>
    </select>
    <div class="errorConfirm"  id="errorDistrictConfirm"></div>
    <label for="ward">Ward</label>
    <select name="ward" id="ward">
        <option value=""></option>
    </select>
    <div class="errorConfirm"  id="errorWardConfirm"></div>
    <button type="submit" id="confirmCheckOut" >CONFIRM</button>
    </form>
</div>
`