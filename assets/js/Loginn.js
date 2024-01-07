import app from "./app.js";
import Register from "./register.js";

class Login {
  constructor() {
    // Tạo div container
    this.container = document.createElement("div");
    this.container.classList.add("container");

    // Tạo div wrapper
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("wrapper");

    // Tạo div title
    this.title = document.createElement("div");
    this.title.classList.add("title");
    this.title.innerText = "Login";

    // Tạo form
    this.form = document.createElement("form");
    this.form.action = "#";

    // Tạo input, label email
    this.divEmail = document.createElement("div");
    this.divEmail.classList.add("row");
    this.iconEmail = document.createElement("i");
    this.iconEmail.classList.add("fas", "fa-envelope");
    this.inputEmail = document.createElement("input");
    this.inputEmail.type = "text";
    this.inputEmail.placeholder = "Email or Phone";
    this.inputEmail.required = true;

    //Tạo input, label password
    this.divPasswd = document.createElement("div");
    this.divPasswd.classList.add("row");
    this.iconPasswd = document.createElement("i");
    this.iconPasswd.classList.add("fas", "fa-lock");
    this.inputPasswd = document.createElement("input");
    this.inputPasswd.type = "password";
    this.inputPasswd.placeholder = "Password";
    this.inputPasswd.required = true;

    // Tạo liên kết quên mật khẩu
    this.forgotPassLink = document.createElement("div");
    this.forgotPassLink.classList.add("pass");
    this.forgotPassLink.innerHTML = "<a href='#'>Forgot password?</a>";

    //Tạo nút submit
    this.btnSubmit = document.createElement("div");
    this.btnSubmit.classList.add("row", "button");
    this.inputSubmit = document.createElement("input");
    this.inputSubmit.type = "submit";
    this.inputSubmit.value = "Login";

    // Tạo liên kết đăng ký
    this.signupLink = document.createElement("div");
    this.signupLink.classList.add("signup-link");
    this.signupLink.innerHTML =
      "Not a member? <a href='#'>create an account</a>";

    // Thêm các phần tử HTML vào container
    this.divEmail.appendChild(this.iconEmail);
    this.divEmail.appendChild(this.inputEmail);
    this.divPasswd.appendChild(this.iconPasswd);
    this.divPasswd.appendChild(this.inputPasswd);
    this.btnSubmit.appendChild(this.inputSubmit);
    this.form.appendChild(this.divEmail);
    this.form.appendChild(this.divPasswd);
    this.form.appendChild(this.forgotPassLink);
    this.form.appendChild(this.btnSubmit);
    this.form.appendChild(this.signupLink);
    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.form);
    this.container.appendChild(this.wrapper);

    // Thêm sự kiện submit vào form
    this.form.addEventListener("submit", this.login);
    // Thêm sự kiện click vào liên kết đăng ký
    this.signupLink
      .querySelector("a")
      .addEventListener("click", this.goToRegister);
  }

  render(container) {
    container.innerHTML = "";
    container.appendChild(this.container);
  }

  login = (e) => {
    e.preventDefault();
    let email = this.inputEmail.value;
    let password = this.inputPasswd.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        const token = user.getIdToken();
        console.log(token);
        if (token) {
          app.showNotification("Đăng nhập thành công", true);
          location = "ticket-book.html"
        }
      })
      .catch((error) => {
        app.showNotification(error, false);
      });
  };

  goToRegister = (e) => {
    e.preventDefault();
    const register = new Register();
    app.container.innerHTML = "";
    app.changeComponent(register); // navigate to register page
  };
}

export default Login;
