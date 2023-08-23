class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }


    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");
        
        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") ?? "Anonymous");
        cardLeft.appendChild(author);

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("linkTitle") ?? 'Title';
        linkTitle.href = this.getAttribute("linkURL") ?? "#";
        cardLeft.appendChild(linkTitle);
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("newsContent") ?? "Content";
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("imgUrl") ?? './assets/default.jpeg';
        newsImage.alt = "newsPhoto";
        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;

    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 100%;
            display: flex;
            -webkit-box-shadow: -15px 12px 39px -17px rgba(0,0,0,0.75);
            -moz-box-shadow: -15px 12px 39px -17px rgba(0,0,0,0.75);
            box-shadow: -15px 12px 39px -17px rgba(0,0,0,0.75);
            flex-direction: row;
            justify-content: space-between;
            margin-top: 10px;
        
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            font-weight: bold;
            color: black;
            text-decoration: none;
        }
        
        .card_left > p {
            color: rgb(70, 70, 70);
        }

        .card_right > img {
            height: 200px;
            margin-top: 3px;
        }
        `

        return style;

    }
}

customElements.define('card-news', CardNews);