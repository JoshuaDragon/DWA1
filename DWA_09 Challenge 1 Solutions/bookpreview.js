import { BOOKS_PER_PAGE, books, authors, genres } from "./data.js";


    class CreatePreview extends HTMLElement {
        constructor(preview, index, bookTotal) {
          super();
      
          const { author: authorId, id, image, title } = preview;

          this.attachShadow({ mode: 'open' });
          this.shadowRoot.innerHTML = /*html */ `
            <button class="preview" data-preview="${id}">
              <img class="preview__image" src="${image}" />
              <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
                <div class="preview__index">Book ${index + 1} of ${bookTotal}</div>
              </div>
            </button>
          `;
      
          this.showPreview = this.shadowRoot.querySelector('.preview');
        }
      }
      
      customElements.define('create-preview', CreatePreview);
      
      export default CreatePreview;