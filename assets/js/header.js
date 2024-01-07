class Header {
    constructor(logoSrc, logoAlt, navLinks) {
        this.logoSrc = logoSrc;
        this.logoAlt = logoAlt;
        this.navLinks = navLinks;
    }

    render() {
        const headerEl = document.createElement("header");
        headerEl.classList.add("header");
        headerEl.setAttribute("data-header", "");

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        headerEl.appendChild(containerEl);

        const logoLinkEl = document.createElement("a");
        logoLinkEl.setAttribute("href", "index.html");
        logoLinkEl.classList.add("logo");
        containerEl.appendChild(logoLinkEl);

        const logoImgEl = document.createElement("img");
        logoImgEl.setAttribute("src", this.logoSrc);
        logoImgEl.setAttribute("alt", this.logoAlt);
        logoImgEl.setAttribute("width", "32");
        logoImgEl.setAttribute("height", "32");
        logoLinkEl.appendChild(logoImgEl);

        const logoTextEl = document.createTextNode("AviaWiki");
        logoLinkEl.appendChild(logoTextEl);

        const navEl = document.createElement("nav");
        navEl.classList.add("navbar");
        navEl.setAttribute("data-navbar", "");
        containerEl.appendChild(navEl);

        const navListEl = document.createElement("ul");
        navListEl.classList.add("navbar-list");
        navEl.appendChild(navListEl);

        for (const link of this.navLinks) {
            const navItemEl = document.createElement("li");
            navItemEl.classList.add("navbar-item");
            navListEl.appendChild(navItemEl);

            const navLinkEl = document.createElement("a");
            navLinkEl.setAttribute("href", link.url);
            navLinkEl.classList.add("navbar-link");
            if (link.active) {
                navLinkEl.classList.add("active");
            }
            navLinkEl.setAttribute("data-nav-link", "");
            const navLinkTextEl = document.createTextNode(link.label);
            navLinkEl.appendChild(navLinkTextEl);
            navItemEl.appendChild(navLinkEl);
        }

        const toggleBtnEl = document.createElement("button");
        toggleBtnEl.classList.add("nav-toggle-btn");
        toggleBtnEl.setAttribute("aria-label", "Toggle menu");
        toggleBtnEl.setAttribute("data-nav-toggler", "");
        containerEl.appendChild(toggleBtnEl);

        for (let i = 1; i <= 3; i++) {
            const lineEl = document.createElement("span");
            lineEl.classList.add(`line`, `line-${i}`);
            toggleBtnEl.appendChild(lineEl);
        }

        const gitHubLinkEl = this.createButton("Github ❤", "https://github.com/DinhPhongNe", ["btn", "btn-outline"]);
        containerEl.appendChild(gitHubLinkEl);

        const registerLinkEl = this.createButton("Register❤", "RegNLog.html", ["btn", "btn-primary"]);
        containerEl.appendChild(registerLinkEl);

        return headerEl;
    }

    createButton(text, url, classNames) {
        const linkEl = document.createElement("a");
        linkEl.setAttribute("href", url);
        classNames.forEach(className => linkEl.classList.add(className));
        const textEl = document.createTextNode(text);
        linkEl.appendChild(textEl);
        return linkEl;
    }
}

class NavLink {
    constructor(label, url, active) {
        this.label = label;
        this.url = url;
        this.active = active;
    }
}

const navLinks = [
    new NavLink("Homepage", "homepage.html", false),
    new NavLink("Plane", "plane.html", false),
    new NavLink("Airport", "airport.html", false),
    new NavLink("Airline", "airline.html", false),
    new NavLink("Flight Trakcer", "tracker.html", false),
    new NavLink("AviaShop", "planesIco.html", false)
];

const header = new Header("./logo.ico", "Avia Book ticket", navLinks);

export default header;