import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

let page = 1;
let matches = books;

// Function to create a book preview element
function createBookPreview({ author, id, image, title }) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

    return element;
}

// Function to update the theme based on user preference
function updateTheme() {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
    const colorDark = theme === 'night' ? '255, 255, 255' : '10, 10, 20';
    const colorLight = theme === 'night' ? '10, 10, 20' : '255, 255, 255';

    document.querySelector('[data-settings-theme]').value = theme;
    document.documentElement.style.setProperty('--color-dark', colorDark);
    document.documentElement.style.setProperty('--color-light', colorLight);
}

// Function to handle search form submission
function handleSearchFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    for (const book of books) {
        let genreMatch = filters.genre === 'any';

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true; }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
            (filters.author === 'any' || book.author === filters.author) &&
            genreMatch
        ) {
            result.push(book);
        }
    }

    page = 1;
    matches = result;

    const listMessage = document.querySelector('[data-list-message]');
    listMessage.classList.toggle('list__message_show', result.length === 0);

    const listItems = document.querySelector('[data-list-items]');
    listItems.innerHTML = '';
    const newItems = document.createDocumentFragment();

    for (const preview of result.slice(0, BOOKS_PER_PAGE)) {
        const element = createBookPreview(preview);
        newItems.appendChild(element);
    }

    listItems.appendChild(newItems);
    updateListButtonState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('[data-search-overlay]').open = false;
    document.querySelector('[data-search-form]').reset();
}

// Function to update the state of the "Show More" button
function updateListButtonState() {
    const remaining = matches.length - page * BOOKS_PER_PAGE;
    const listButton = document.querySelector('[data-list-button]');
    listButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
    `;
    listButton.disabled = remaining <= 0;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelector('[data-list-items]');
    const searchGenres = document.querySelector('[data-search-genres]');
    const searchAuthors = document.querySelector('[data-search-authors]');
    const settingsTheme = document.querySelector('[data-settings-theme]');
    const listButton = document.querySelector('[data-list-button]');
    const searchForm = document.querySelector('[data-search-form]');

    // Initial book previews
    const startingFragment = document.createDocumentFragment();
    for (const preview of matches.slice(0, BOOKS_PER_PAGE)) {
        const element = createBookPreview(preview);
        startingFragment.appendChild(element);
    }
    listItems.appendChild(startingFragment);

    // Genre dropdown options
    const genreOptionsFragment = document.createDocumentFragment();
    genreOptionsFragment.appendChild(createDropdownOption('any', 'All Genres'));
    for (const [id, name] of Object.entries(genres)) {
        genreOptionsFragment.appendChild(createDropdownOption(id, name));
    }
    searchGenres.appendChild(genreOptionsFragment);

    // Authors dropdown options
    const authorsOptionsFragment = document.createDocumentFragment();
    authorsOptionsFragment.appendChild(createDropdownOption('any', 'All Authors'));
    for (const [id, name] of Object.entries(authors)) {
        authorsOptionsFragment.appendChild(createDropdownOption(id, name));
    }
    searchAuthors.appendChild(authorsOptionsFragment);

    // Set theme based on user preference
    updateTheme();

    // Set initial state of "Show More" button
    updateListButtonState();

    // Event listeners
    document.querySelector('[data-search-cancel]').addEventListener('click', () => {
        document.querySelector('[data-search-overlay]').open = false;
    });

    document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
        document.querySelector('[data-settings-overlay]').open = false;
    });

    document.querySelector('[data-header-search]').addEventListener('click', () => {
        document.querySelector('[data-search-overlay]').open = true;
        document.querySelector('[data-search-title]').focus();
    });

    document.querySelector('[data-header-settings]').addEventListener('click', () => {
        document.querySelector('[data-settings-overlay]').open = true;
    });

    document.querySelector('[data-list-close]').addEventListener('click', () => {
        document.querySelector('[data-list-active]').open = false;
    });

    document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { theme } = Object.fromEntries(formData);

        if (theme === 'night') {
            document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
            document.documentElement.style.setProperty('--color-light', '10, 10, 20');
        } else {
            document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
            document.documentElement.style.setProperty('--color-light', '255, 255, 255');
        }

        document
