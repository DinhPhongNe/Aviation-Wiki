import app from "./app.js";
import Login from "./Loginn.js";

class Register {
  constructor() {
    // Create container
    this.container = document.createElement("div");
    this.container.classList.add("container");

    // Create wrapper
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("wrapper");

    // Create title
    this.title = document.createElement("div");
    this.title.classList.add("title");
    this.title.innerHTML = "<span>Register</span>";

    // Create form
    this.form = document.createElement("form");
    this.form.action = "#";

    // Create input, label username
    this.divUsername = document.createElement("div");
    this.divUsername.classList.add("row");
    this.iconUsername = document.createElement("i");
    this.iconUsername.classList.add("fas", "fa-user");
    this.inputUsername = document.createElement("input");
    this.inputUsername.type = "text";
    this.inputUsername.placeholder = "Username";
    this.inputUsername.required = true;

    // Create input, label email
    this.divEmail = document.createElement("div");
    this.divEmail.classList.add("row");
    this.iconEmail = document.createElement("i");
    this.iconEmail.classList.add("fas", "fa-envelope");
    this.inputEmail = document.createElement("input");
    this.inputEmail.type = "text";
    this.inputEmail.placeholder = "Email or Phone";
    this.inputEmail.required = true;

    // Create input, label password
    this.divPasswd = document.createElement("div");
    this.divPasswd.classList.add("row");
    this.iconPasswd = document.createElement("i");
    this.iconPasswd.classList.add("fas", "fa-lock");
    this.inputPasswd = document.createElement("input");
    this.inputPasswd.type = "password";
    this.inputPasswd.placeholder = "Password";
    this.inputPasswd.required = true;

    // Create liên kết quên mật khẩu
    this.forgotPassLink = document.createElement("div");
    this.forgotPassLink.classList.add("pass");
    this.forgotPassLink.innerHTML = "<a href='#'>Forgot password?</a>";

    // Create nút submit
    this.btnSubmit = document.createElement("div");
    this.btnSubmit.classList.add("row", "button");
    this.inputSubmit = document.createElement("input");
    this.inputSubmit.type = "submit";
    this.inputSubmit.value = "Register";

    // Create liên kết đăng ký
    this.signupLink = document.createElement("div");
    this.signupLink.classList.add("signup-link");
    this.signupLink.innerHTML =
      "Not a member? <a href='#'>create an account</a>";

    // Add HTML elements to container
    this.divUsername.appendChild(this.iconUsername);
    this.divUsername.appendChild(this.inputUsername);
    this.divEmail.appendChild(this.iconEmail);
    this.divEmail.appendChild(this.inputEmail);
    this.divPasswd.appendChild(this.iconPasswd);
    this.divPasswd.appendChild(this.inputPasswd);
    this.btnSubmit.appendChild(this.inputSubmit);
    this.form.appendChild(this.divUsername);
    this.form.appendChild(this.divEmail);
    this.form.appendChild(this.divPasswd);
    this.form.appendChild(this.forgotPassLink);
    this.form.appendChild(this.btnSubmit);
    this.form.appendChild(this.signupLink);
    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.form);
    this.container.appendChild(this.wrapper);

    // Add submit event to form
    this.form.addEventListener("submit", this.register);
    // Add click event to signup link
    this.signupLink
      .querySelector("a")
      .addEventListener("click", this.gotoLogin);
  }

  render(container) {
    container.innerHTML = "";
    container.appendChild(this.container);
  }

  register = (e) => {
    e.preventDefault();
    let email = this.inputEmail.value;
    let password = this.inputPasswd.value;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        if (userCredentials.user) {
          app.showNotification("Đăng ký thành công", true);
          // navigate to home page or any other page after successful registration
        }
      })
      .catch((error) => {
        app.showNotification(error, false);
      });
    // alert(this.inputUsername.value + '\n' + this.inputEmail.value + '\n' + this.inputPasswd.value);
  }

  gotoLogin = (e) => {
    e.preventDefault();
    const login = new Login();
    app.container.innerHTML = "";
    app.changeComponent(login); // navigate to register page
  };
}

export default Register;