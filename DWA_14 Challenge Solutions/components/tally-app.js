import { LitElement, html } from "../libs/lit-html.js";
import './tally-header.js';
import './tally-main.js';

class TallyApp extends LitElement {
    render() {
        return html`
        <tally-header></tally-header>
        <tally-main></tally-main>
        `;
    }
}

customElements.define('tally-app', TallyApp);