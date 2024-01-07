class AboutSection {
    constructor() {
      this.container = document.createElement("div");
      this.container.classList.add("container");
  
      this.bannerFigure = document.createElement("figure");
      this.bannerFigure.classList.add("about-banner");
      const bannerImage = document.createElement("img");
      bannerImage.src = "./assets/images/about/about-banner_5.png";
      bannerImage.width = "748";
      bannerImage.height = "436";
      bannerImage.loading = "lazy";
      bannerImage.alt = "about banner";
      bannerImage.classList.add("w-100");
      this.bannerFigure.appendChild(bannerImage);
      this.container.appendChild(this.bannerFigure);
  
      this.contentDiv = document.createElement("div");
      this.contentDiv.classList.add("about-content");
  
      this.title = document.createElement("h2");
      this.title.classList.add("h2", "section-title");
      this.title.textContent = "tracker?";
      this.contentDiv.appendChild(this.title);
  
      this.text = document.createElement("p");
      this.text.classList.add("section-text");
      this.text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum earum explicabo vitae dicta dolore? Ullam commodi odio rerum, dolore delectus animi esse adipisci doloremque, nobis provident illum, laborum corporis.";
      this.contentDiv.appendChild(this.text);
  
      this.list = document.createElement("ul");
      this.list.classList.add("section-list");
  
      const item1 = new SectionListItem("Find your flight!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum optio eligendi a porro ipsum maxime veniam consectetur, obcaecati sequi cumque harum nostrum animi quod beatae praesentium ratione doloribus deserunt.");
      const item2 = new SectionListItem("explore about it", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, distinctio? Tempora omnis cum ut voluptatibus perspiciatis, amet soluta corrupti alias distinctio iste fuga dolorum aperiam, inventore sunt id consequatur illum.");
      this.list.appendChild(item1.render());
      this.list.appendChild(item2.render());
  
      this.contentDiv.appendChild(this.list);
  
      this.exploreBtn = document.createElement("a");
      this.exploreBtn.href = "#";
      this.exploreBtn.classList.add("btn", "btn-primary");
      this.exploreBtn.textContent = "Explore More";
      this.contentDiv.appendChild(this.exploreBtn);
  
      this.container.appendChild(this.contentDiv);
  
      this.section = document.createElement("section");
      this.section.classList.add("section", "about");
      this.section.setAttribute("aria-label", "about");
      this.section.appendChild(this.container);
    }
  
    render() {
      return this.section;
    }
  }
  
  class SectionListItem {
    constructor(title, text) {
      this.title = title;
      this.text = text;
    }
  
    render() {
      const item = document.createElement("li");
      item.classList.add("section-item");
  
      const titleWrapper = document.createElement("div");
      titleWrapper.classList.add("title-wrapper");
      const checkmarkIcon = document.createElement("ion-icon");
      checkmarkIcon.setAttribute("name", "checkmark-circle");
      checkmarkIcon.setAttribute("aria-hidden", "true");
      titleWrapper.appendChild(checkmarkIcon);
  
      const title = document.createElement("h3");
      title.classList.add("h3", "list-title");
      title.textContent = this.title;
      titleWrapper.appendChild(title);
  
      item.appendChild(titleWrapper);
  
      const text = document.createElement("p");
      text.classList.add("item-text");
      text.textContent = this.text;
      item.appendChild(text);
  
      return item;
    }
  }
  
  const aboutSection = new AboutSection();
  document.body.appendChild(aboutSection.render());