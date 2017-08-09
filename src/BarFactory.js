import Template from './template.html';

export default class BarFactory {
    constructor(options) {
        this.options = options;
        this.classes = [this.options.color];

        var temp = document.createElement('div');
        temp.innerHTML = this.markup;
        this.bar = temp.firstChild;

        // Add custom search if needed
        if (this.options.googleCustomSearchCode !== null) {
            let searchForm = this.bar.querySelector('.ncstate-utility-bar-search-form');
            let div = document.createElement('div');
            div.innerHTML = `<input id="navcx" name="cx" type="hidden" value="${this.options.googleCustomSearchCode}">`;
            let field = div.firstChild;

            searchForm.appendChild(field);
        }

        if (this.options.showBrick === 1) {
            this.classes.push('show-brick');
        }

        this.classes.forEach(classname => {
            this.bar.className += ` ${classname}`;
        });

        return this.bar;
    }

    get markup() {
        let markup = Template;
        let regex = /\${(this\.options\.([\w\.]+))?}/g;
        let match = [];

        // Sub any option tokens in the form of ${this.options.XXXX}
        while (match = regex.exec(Template)) {
            markup = markup.replace(match[0], this.options[ match[2] ]);
        }

        return markup;
    }
}