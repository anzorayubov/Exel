import {ExelComponent} from '@core/ExelComponent';

export class Formula extends ExelComponent {
    static className = 'exel__formula'

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
       `
    }
}