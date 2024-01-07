class Header {
  constructor() {
    // Create header element
    this.header = document.createElement("header");
    this.header.classList.add("header");
    this.header.setAttribute("data-header", "");

    // Create container div
    this.container = document.createElement("div");
    this.container.classList.add("container");

    // Create logo link
    this.logoLink = document.createElement("a");
    this.logoLink.classList.add("logo");
    this.logoLink.href = "#";

    // Create logo image
    this.logoImg = document.createElement("img");
    this.logoImg.src = "./logo.ico";
    this.logoImg.width = "162";
    this.logoImg.height = "50";
    this.logoImg.alt = "AviaTravel";

    // Append logo image to logo link
    this.logoLink.appendChild(this.logoImg);

    // Create navbar
    this.navbar = document.createElement("nav");
    this.navbar.classList.add("navbar");
    this.navbar.setAttribute("data-navbar", "");

    // Create navbar wrapper
    this.navbarWrapper = document.createElement("div");
    this.navbarWrapper.classList.add("wrapper");

    // Create navbar logo link
    this.navbarLogoLink = document.createElement("a");
    this.navbarLogoLink.classList.add("logo");
    this.navbarLogoLink.href = "#";

    // Create navbar logo image
    this.navbarLogoImg = document.createElement("img");
    this.navbarLogoImg.src = "./logo.ico";
    this.navbarLogoImg.width = "162";
    this.navbarLogoImg.height = "50";
    this.navbarLogoImg.alt = "AviaTravel";

    // Append navbar logo image to navbar logo link
    this.navbarLogoLink.appendChild(this.navbarLogoImg);

    // Create navbar close button
    this.navbarCloseBtn = document.createElement("button");
    this.navbarCloseBtn.classList.add("nav-close-btn");
    this.navbarCloseBtn.setAttribute("aria-label", "close menu");
    this.navbarCloseBtn.setAttribute("data-nav-toggler", "");

    // Create close icon
    this.closeIcon = document.createElement("ion-icon");
    this.closeIcon.setAttribute("name", "close-outline");
    this.closeIcon.setAttribute("aria-hidden", "true");

    // Append close icon to navbar close button
    this.navbarCloseBtn.appendChild(this.closeIcon);

    // Append navbar logo link and close button to navbar wrapper
    this.navbarWrapper.appendChild(this.navbarLogoLink);
    this.navbarWrapper.appendChild(this.navbarCloseBtn);

    // Create navbar list
    this.navbarList = document.createElement("ul");
    this.navbarList.classList.add("navbar-list");

    // Create home link
    this.homeLink = document.createElement("a");
    this.homeLink.classList.add("navbar-link");
    this.homeLink.href = "#home";
    this.homeLink.setAttribute("data-nav-link", "");
    this.homeLink.textContent = "Home";

    // Create home list item
    this.homeListItem = document.createElement("li");
    this.homeListItem.classList.add("navbar-item");
    this.homeListItem.appendChild(this.homeLink);

    // Create tours link
    this.toursLink = document.createElement("a");
    this.toursLink.classList.add("navbar-link");
    this.toursLink.href = "#courses";
    this.toursLink.setAttribute("data-nav-link", "");
    this.toursLink.textContent = "Tours";

    // Create tours list item
    this.toursListItem = document.createElement("li");
    this.toursListItem.classList.add("navbar-item");
    this.toursListItem.appendChild(this.toursLink);

    // Create contact link
    this.contactLink = document.createElement("a");
    this.contactLink.classList.add("navbar-link");
    this.contactLink.href = "#";
    this.contactLink.setAttribute("data-nav-link", "");
    this.contactLink.textContent = "Contact";

    // Create contact list item
    this.contactListItem = document.createElement("li");
    this.contactListItem.classList.add("navbar-item");
    this.contactListItem.appendChild(this.contactLink);

    // Create go back link
    this.goBackLink = document.createElement("a");
    this.goBackLink.classList.add("navbar-link");
    this.goBackLink.href = "index.html";
    this.goBackLink.setAttribute("data-nav-link", "");
    this.goBackLink.textContent = "go back";

    // Create go back list item
    this.goBackListItem = document.createElement("li");
    this.goBackListItem.classList.add("navbar-item");
    this.goBackListItem.appendChild(this.goBackLink);

    // Append list items to navbar list
    this.navbarList.appendChild(this.homeListItem);
    this.navbarList.appendChild(this.toursListItem);
    this.navbarList.appendChild(this.contactListItem);
    this.navbarList.appendChild(this.goBackListItem);

    // Append navbar wrapper and navbar list to navbar
    this.navbar.appendChild(this.navbarWrapper);
    this.navbar.appendChild(this.navbarList);

    // Create header actions div
    this.headerActions = document.createElement("div");
    this.headerActions.classList.add("header-actions");

    // Create book now button
    this.bookNowButton = document.createElement("button");
    this.bookNowButton.classList.add("btn", "has-before");
    this.bookNowButton.id = "book-now-button";
    this.bookNowButton.textContent = "Book now ->";

    this.bookNowButton.setAttribute("data-bs-toggle", "modal")
    this.bookNowButton.setAttribute("data-bs-target", "#searchModal")
    this.bookNowButton.onclick = this.initMap;

    // Create login/register button
    this.loginRegisterButton = document.createElement("button");
    this.loginRegisterButton.classList.add("btn", "has-before");
    this.loginRegisterButton.id = "regAlog-now-button";

    // Create login/register link
    this.loginRegisterLink = document.createElement("a");
    this.loginRegisterLink.href = "RegNLog.html";
    this.loginRegisterLink.textContent = "Login or Register";

    // Append login/register link to login/register button
    this.loginRegisterButton.appendChild(this.loginRegisterLink);

    // Append book now and login/register buttons to header actions div
    this.headerActions.appendChild(this.bookNowButton);
    this.headerActions.appendChild(this.loginRegisterButton);

    // Create overlay div
    this.overlay = document.createElement("div");
    this.overlay.classList.add("overlay");
    this.overlay.setAttribute("data-nav-toggler", "");
    this.overlay.setAttribute("data-overlay", "");

    // Append logo link, navbar, header actions, and overlay to container
    this.container.appendChild(this.logoLink);
    this.container.appendChild(this.navbar);
    this.container.appendChild(this.headerActions);
    this.container.appendChild(this.overlay);

    // Append container to header
    this.header.appendChild(this.container);
  }

  getHeader() {
    return this.header;
  }

  initMap(e) {
    e.preventDefault();
    setTimeout(() => {
      const mymap = L.map("map").setView([51.505, -0.09], 13);

      // add tile layer to the map
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      }).addTo(mymap);
    }, 200);
  }
}

// Instantiate Header object
const header = new Header();

// Get header element and append it to the body
const body = document.querySelector("body");
body.appendChild(header.getHeader());