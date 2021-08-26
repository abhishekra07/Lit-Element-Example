import { LitElement, html, css } from 'lit-element';

class MyCard extends LitElement {

    static get styles() {
        return css`
            .card {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 300px;
            }
            
            .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                cursor: pointer
            }
            
            .container {
                padding: 2px 16px;
            }
        `;
    }

    render(){
        return html`
        <div class="card">
            <img src="${this.image}" alt="Avatar" width="100%" height="300px">
            <div class="container">
                <h4><b>${this.name}</b></h4> 
                <p>${this.designation}</p> 
            </div>
            </div>
        </div>
        `;
    }

    constructor() {
        super();
        this.name = "Abhishek Rathore";
        this.image = "https://icon-library.com/images/user-icon-image/user-icon-image-13.jpg";
        this.designation = "FullStack Developer";
    }

    static get properties() {
        return {
            name: {type: String},
            image:{type: String},
            designation: {type: String}
        }
    }
}


customElements.define('my-card', MyCard);