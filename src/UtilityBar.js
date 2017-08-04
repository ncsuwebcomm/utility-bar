import BarFactory from './BarFactory';
import BaseCss from './main.scss';

export default class UtilityBar {

    constructor(options) {
        this.options = this.mergeOptions(options);
        this.bar = new BarFactory(this.options);
    }

    mergeOptions(options) {
        if (! options || ! typeof options === 'object') {
            return this.defaults;
        }

        options = this.validate(options);

        return Object.assign(this.defaults, options);
    }

    validate(options) {
        let validColors = {"red": true, "black": true, "gray": true};

        if (options.hasOwnProperty('color')) {
            options.color = validColors[options.color] === true ? options.color : 'gray';
        }

        if (options.hasOwnProperty('maxWidth') && isNaN( options.maxWidth )) {
            delete options.maxWidth;
        }

        if (options.hasOwnProperty('showBrick') && parseInt(options.showBrick) !== 0) {
            options.showBrick = 1;
        }

        if (options.hasOwnProperty('placeholder')) {
            // Javascript doesn't convert + to space, so we do it manually.
            options.placeholder = decodeURIComponent(options.placeholder.replace(/\+/g, ' '));
            // Strip illegal characters
            options.placeholder = options.placeholder.replace(/[\"\'\`\<\>]/g, '');

            if (options.placeholder.length < 1) {
                delete options.placeholder;
            }
        }

        if (options.hasOwnProperty('googleCustomSearchCode')) {
            // Strip illegal characters
            options.googleCustomSearchCode = options.googleCustomSearchCode.replace(/[\"\'\`\<\>]/g, '');

            if (options.googleCustomSearchCode.length < 1) {
                delete options.googleCustomSearchCode;
            }
        }

        return options;
    }

    render() {
        this.insertCss();

        var barPlaceholder,
            documentBody = document.body;

        if ((barPlaceholder = document.getElementById('ncstate-utility-bar')) && barPlaceholder.parentNode == documentBody) {
            documentBody.replaceChild(this.bar, barPlaceholder);
        } else {
            documentBody.insertBefore(this.bar, documentBody.firstChild);
        }

        this.insertBarJs();
    }

    insertCss() {
        if (this.options.maxWidth !== null) {
            let barcss = document.createElement('style');
            let text = `.ncstate-utility-bar .ncstate-utility-bar-wrapper{ width: 100% !important; max-width: ${this.options.maxWidth}px !important; }`;
            barcss.type = 'text/css';

            if (!!(window.attachEvent && !window.opera)) {
                barcss.styleSheet.cssText = text;
            } else {
                var styleText = document.createTextNode(text);
                barcss.appendChild(styleText);
            }

            document.head.appendChild(barcss);
        }
    }

    insertBarJs() {
        let scripts = document.getElementsByTagName('script')[0];
        let barjs = document.createElement('script');
        barjs.type = 'text/javascript';
        barjs.async = true;
        barjs.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.ncsu.edu/brand-assets/utility-bar/js/main.js';

        scripts.parentNode.insertBefore(barjs, scripts);
    }

    get defaults() {
        return {
            googleCustomSearchCode: null,
            color: 'gray',
            maxWidth: null,
            placeholder: 'search ncsu.edu',
            showBrick: 0
        }
    }

}