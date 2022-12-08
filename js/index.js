window.onload = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
            view.setScreenActive("homePage");
            console.log(auth.currentUser.email);
        } else {
            view.setScreenActive("registerPage");
        }
    })
}

function toast({ title = "", message = "", type = "", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast)
        }, duration);
        const toast = document.createElement("div");
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }

        }
        const icons = {
            success: "fa-solid fa-circle-check",
            info: "fa-solid fa-circle-info",
            error: "fa-solid fa-circle-exclamation"
        }
        const icon = icons[type]
        //   const delay = (duration / 1000).toFixed(2)
        toast.classList.add("toast", `toast--${type}`);
        //   toast.style.animation =` slideInLeft ease .3s ,fadeout linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        
    <div class="toast__icon">
      <i class="${icon}"></i>
    </div>
    <div class="toast__body">
      <h3 class="toast__title">${title}</h3>
      <p class="toast__msg">${message}</p>
    </div>
    <div class="toast__close">
      <i class="fa-solid fa-xmark"></i>
    </div>
  
        `;
        main.appendChild(toast);

    }
}

function ShowSuccessToast(message) {
    toast({
        title: "Success",
        message: message,
        type: "success",
        duration: 4000,
    });
}
function ShowErrorToast(message) {
    toast({
        title: "Error",
        message: message,
        type: "error",
        duration: 4000,
    });
}
function ShowInfoToast(message) {
    toast({
        title: "Thông báo",
        message: message,
        type: "info",
        duration: 4000,
    });
}