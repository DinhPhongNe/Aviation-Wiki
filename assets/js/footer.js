class Footer {
    constructor(logoSrc, logoAlt, phoneNum, email, address, quickLinks, services, support, aboutUs, author) {
        this.logoSrc = logoSrc;
        this.logoAlt = logoAlt;
        this.phoneNum = phoneNum;
        this.email = email;
        this.address = address;
        this.quickLinks = quickLinks;
        this.services = services;
        this.support = support;
        this.aboutUs = aboutUs;
        this.author = author;
    }

    render() {
        const footerEl = document.createElement("footer");
        footerEl.classList.add("footer");

        const footerTopEl = document.createElement("div");
        footerTopEl.classList.add("footer-top");
        footerTopEl.setAttribute("data-section", "");
        footerEl.appendChild(footerTopEl);

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        footerTopEl.appendChild(containerEl);

        const footerBrandEl = document.createElement("div");
        footerBrandEl.classList.add("footer-brand");
        containerEl.appendChild(footerBrandEl);

        const logoLinkEl = document.createElement("a");
        logoLinkEl.setAttribute("href", "#");
        logoLinkEl.classList.add("logo");
        footerBrandEl.appendChild(logoLinkEl);

        const logoImgEl = document.createElement("img");
        logoImgEl.setAttribute("src", this.logoSrc);
        logoImgEl.setAttribute("alt", this.logoAlt);
        logoImgEl.setAttribute("width", "50");
        logoImgEl.setAttribute("height", "50");
        logoLinkEl.appendChild(logoImgEl);

        const logoTextEl = document.createTextNode("AviaWiki");
        logoLinkEl.appendChild(logoTextEl);

        const footerTitleEl = document.createElement("h2");
        footerTitleEl.classList.add("footer-title");
        const footerTitleTextEl = document.createTextNode("Let's talk! 🤙");
        footerTitleEl.appendChild(footerTitleTextEl);
        footerBrandEl.appendChild(footerTitleEl);

        const phoneLinkEl = document.createElement("a");
        phoneLinkEl.setAttribute("href", `tel:${this.phoneNum}`);
        phoneLinkEl.classList.add("footer-contact-link");
        const phoneLinkTextEl = document.createTextNode(this.phoneNum);
        phoneLinkEl.appendChild(phoneLinkTextEl);
        footerBrandEl.appendChild(phoneLinkEl);

        const emailLinkEl = document.createElement("a");
        emailLinkEl.setAttribute("href", `mailto:${this.email}`);
        emailLinkEl.classList.add("footer-contact-link");
        const emailLinkTextEl = document.createTextNode(this.email);
        emailLinkEl.appendChild(emailLinkTextEl);
        footerBrandEl.appendChild(emailLinkEl);

        const addressEl = document.createElement("address");
        addressEl.classList.add("footer-contact-link");
        const addressTextEl = document.createTextNode(this.address);
        addressEl.appendChild(addressTextEl);
        footerBrandEl.appendChild(addressEl);

        const quickLinksEl = document.createElement("ul");
        quickLinksEl.classList.add("footer-list");
        containerEl.appendChild(quickLinksEl);

        const quickLinksTitleEl = document.createElement("li");
        const quickLinksTitleTextEl = document.createTextNode("Quick Links");
        quickLinksTitleEl.appendChild(quickLinksTitleTextEl);
        quickLinksEl.appendChild(quickLinksTitleEl);

        for (const link of this.quickLinks) {
            const quickLinkEl = document.createElement("li");
            const quickLinkLinkEl = document.createElement("a");
            quickLinkLinkEl.setAttribute("href", "#");
            quickLinkLinkEl.classList.add("footer-link");
            const quickLinkTextEl = document.createTextNode(link.label);
            quickLinkLinkEl.appendChild(quickLinkTextEl);
            quickLinkEl.appendChild(quickLinkLinkEl);
            quickLinksEl.appendChild(quickLinkEl);
        }

        const servicesEl = document.createElement("ul");
        servicesEl.classList.add("footer-list");
        containerEl.appendChild(servicesEl);

        const servicesTitleEl = document.createElement("li");
        const servicesTitleTextEl = document.createTextNode("Services");
        servicesTitleEl.appendChild(servicesTitleTextEl);
        servicesEl.appendChild(servicesTitleEl);

        for (const link of this.services) {
            const serviceEl = document.createElement("li");
            const serviceLinkEl = document.createElement("a");
            serviceLinkEl.setAttribute("href", "#");
            serviceLinkEl.classList.add("footer-link");
            const serviceTextEl = document.createTextNode(link.label);
            serviceLinkEl.appendChild(serviceTextEl);
            serviceEl.appendChild(serviceLinkEl);
            servicesEl.appendChild(serviceEl);
        }

        const supportEl = document.createElement("ul");
        supportEl.classList.add("footer-list");
        containerEl.appendChild(supportEl);

        const supportTitleEl = document.createElement("li");
        const supportTitleTextEl = document.createTextNode("Support");
        supportTitleEl.appendChild(supportTitleTextEl);
        supportEl.appendChild(supportTitleEl);

        for (const link of this.support) {
            const supportLinkEl = document.createElement("li");
            const supportLinkLinkEl = document.createElement("a");
            supportLinkLinkEl.setAttribute("href", "#");
            supportLinkLinkEl.classList.add("footer-link");
            const supportLinkTextEl = document.createTextNode(link.label);
            supportLinkLinkEl.appendChild(supportLinkTextEl);
            supportLinkEl.appendChild(supportLinkLinkEl);
            supportEl.appendChild(supportLinkEl);
        }

        const aboutUsEl = document.createElement("ul");
        aboutUsEl.classList.add("footer-list");
        containerEl.appendChild(aboutUsEl);

        const aboutUsTitleEl = document.createElement("li");
        const aboutUsTitleTextEl = document.createTextNode("About Us");
        aboutUsTitleEl.appendChild(aboutUsTitleTextEl);
        aboutUsEl.appendChild(aboutUsTitleEl);

        for (const link of this.aboutUs) {
            const aboutUsLinkEl = document.createElement("li");
            const aboutUsLinkLinkEl = document.createElement("a");
            aboutUsLinkLinkEl.setAttribute("href", "#");
            aboutUsLinkLinkEl.classList.add("footer-link");
            const aboutUsLinkTextEl = document.createTextNode(link.label);
            aboutUsLinkLinkEl.appendChild(aboutUsLinkTextEl);
            aboutUsLinkEl.appendChild(aboutUsLinkLinkEl);
            aboutUsEl.appendChild(aboutUsLinkEl);
        }

        const footerBottomEl = document.createElement("div");
        footerBottomEl.classList.add("footer-bottom");
        footerEl.appendChild(footerBottomEl);

        const bottomContainerEl = document.createElement("div");
        bottomContainerEl.classList.add("container");
        footerBottomEl.appendChild(bottomContainerEl);

        const authorEl = document.createElement("p");
        authorEl.classList.add("copyright");
        const authorTextEl = document.createTextNode(`© ${new Date().getFullYear()} AviaWiki All Rights Reserved by `);
        authorEl.appendChild(authorTextEl);
        const authorLinkEl = document.createElement("a");
        authorLinkEl.setAttribute("href", "#");
        const authorLinkTextEl = document.createTextNode(this.author);
        authorLinkEl.appendChild(authorLinkTextEl);
        authorEl.appendChild(authorLinkEl);
        bottomContainerEl.appendChild(authorEl);

        const socialListEl = document.createElement("ul");
        socialListEl.classList.add("social-list");
        bottomContainerEl.appendChild(socialListEl);

        const facebookLinkEl = document.createElement("li");
        const facebookLinkLinkEl = document.createElement("a");
        facebookLinkLinkEl.setAttribute("href", "https://www.facebook.com/profile.php?id=100026442681458");
        facebookLinkLinkEl.classList.add("social-link");
        const facebookIconEl = document.createElement("ion-icon");
        facebookIconEl.setAttribute("name", "logo-facebook");
        facebookLinkLinkEl.appendChild(facebookIconEl);
        facebookLinkEl.appendChild(facebookLinkLinkEl);
        socialListEl.appendChild(facebookLinkEl);

        const tiktokLinkEl = document.createElement("li");
        const tiktokLinkLinkEl = document.createElement("a");
        tiktokLinkLinkEl.setAttribute("href", "https://www.tiktok.com/@ponnekk0");
        tiktokLinkLinkEl.classList.add("social-link");
        const tiktokIconEl = document.createElement("ion-icon");
        tiktokIconEl.setAttribute("name", "logo-tiktok");
        tiktokLinkLinkEl.appendChild(tiktokIconEl);
        tiktokLinkEl.appendChild(tiktokLinkLinkEl);
        socialListEl.appendChild(tiktokLinkEl);

        const pinterestLinkEl = document.createElement("li");
        const pinterestLinkLinkEl = document.createElement("a");
        pinterestLinkLinkEl.setAttribute("href", "#");
        pinterestLinkLinkEl.classList.add("social-link");
        const pinterestIconEl = document.createElement("ion-icon");
        pinterestIconEl.setAttribute("name", "logo-pinterest");
        pinterestLinkLinkEl.appendChild(pinterestIconEl);
        pinterestLinkEl.appendChild(pinterestLinkLinkEl);
        socialListEl.appendChild(pinterestLinkEl);

        const githubLinkEl = document.createElement("li");
        const githubLinkLinkEl = document.createElement("a");
        githubLinkLinkEl.setAttribute("href", "https://github.com/DinhPhongNe");
        githubLinkLinkEl.classList.add("social-link");
        const githubIconEl = document.createElement("ion-icon");
        githubIconEl.setAttribute("name", "logo-github");
        githubLinkLinkEl.appendChild(githubIconEl);
        githubLinkEl.appendChild(githubLinkLinkEl);
        socialListEl.appendChild(githubLinkEl);

        return footerEl;
    }
}
const footer = new Footer("./logo.ico", "AviaWiki", "+0000 000 000", "AviaWiki.welcome@gmail.com", "000A KDV Road, BT District", "QUICK LINKS", "A", "B", "C", "Phong", "D", "X", "Y", "SERVICES", "SUPPORT", "About Us", "Dinh Phong");
export default footer

