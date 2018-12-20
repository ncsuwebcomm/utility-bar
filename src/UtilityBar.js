import BarFactory from './BarFactory';
import BaseCss from './main.scss';
import 'es6-object-assign/auto';

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

        this.initBarControls();
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

    initBarControls() {

        this.resourcesToggleBtn = document.getElementById('ncstate-utility-bar-toggle-link'),
        this.searchToggleBtn = document.getElementById('ncstate-utility-bar-search-btn'),

        this.linksPanel = document.getElementsByClassName('ncstate-utility-bar-links')[0],
        this.searchDialog = document.getElementsByClassName('ncstate-utility-bar-search-dialog')[0],

        this.searchInput = document.getElementsByClassName('ncstate-utility-bar-search-field')[0],
        this.firstLink = document.getElementById('ncstate-utility-bar-first-link'),

        this.hiddenClassPattern = /\bis-hidden\b/g,
        this.resourceToggleState = 'hidden',
        this.searchToggleState = 'hidden';

        this.searchToggleBtn.addEventListener('click', this.preventScroll, false);

        this.resourcesToggleBtn.addEventListener('click', this.handleResourcesToggleButton.bind(this), false);
        this.resourcesToggleBtn.addEventListener('keydown', this.handleResourcesTabbedNavigation.bind(this), false);

        this.searchToggleBtn.addEventListener('click', this.handleSearchToggleButton.bind(this), false);

        this.linksPanel.addEventListener('transitionend', this.handleTransitionEnd, false);
        this.searchDialog.addEventListener('transitionend', this.handleTransitionEnd, false);
    }

    preventScroll() {
        document.documentElement.classList.toggle("ncstate-utility-bar-lock-scroll")
        document.body.classList.toggle("ncstate-utility-bar-lock-scroll");
    }

    toggleLinksPanel() {
        if ( this.resourceToggleState === 'hidden' ) {
            this.linksPanel.style.display = "block";
            this.resourcesToggleBtn.nextElementSibling.style.display = "block";
            setTimeout( () => {
                this.linksPanel.className = this.linksPanel.className.replace(this.hiddenClassPattern,'');
            }, 10);
            this.resourceToggleState = 'visible';
        } else {
            this.resourcesToggleBtn.nextElementSibling.style.display = "none";
            this.linksPanel.className = this.linksPanel.className + ' is-hidden';
            this.resourceToggleState = 'hidden';
        }
    }

    toggleSearchDialog() {
        window._ub.toggleSearchBtnText();

        if ( this.searchToggleState === 'hidden' ) {
            this.searchDialog.style.display = "flex";
            setTimeout( () => {
                this.searchDialog.className = this.searchDialog.className.replace(this.hiddenClassPattern,'');
            }, 10);
            this.searchToggleState = 'visible';

            window._ub.searchInput.focus();
        } else {
            this.searchDialog.className = this.searchDialog.className + ' is-hidden';
            this.searchToggleState = 'hidden';
        }
    }

    toggleSearchBtnText() {
        var closeTxt = this.searchToggleBtn.querySelector('.ncstate-utility-bar-search-close-text');
        var closeIcon = this.searchToggleBtn.querySelector('.wolficon-close');
        var showTxt = this.searchToggleBtn.querySelector('.ncstate-utility-bar-search-btn-text');
        var showIcon = this.searchToggleBtn.querySelector('.wolficon-search');

        if ( this.searchToggleState === 'hidden' ) {
            this.searchToggleBtn.style.width = this.searchToggleBtn.offsetWidth + "px";
            showTxt.style.display = "none";
            showIcon.style.display = "none";
            closeTxt.style.display = "inline";
            closeIcon.style.display = "inline";
        } else {
            this.searchToggleBtn.style = "";
            showTxt.style.display = "inline";
            showIcon.style.display = "inline";
            closeTxt.style.display = "none";
            closeIcon.style.display = "none";
        }
    }

    handleResourcesToggleButton(e) {
        e.preventDefault();

        if ( this.searchToggleState == "visible" ) {
            window._ub.toggleSearchDialog();
        }

        window._ub.toggleLinksPanel();
    }

    handleSearchToggleButton(e) {
        e.preventDefault();

        if ( this.resourceToggleState == "visible" ) {
            window._ub.toggleLinksPanel();
        }

        window._ub.toggleSearchDialog();
    }

    handleResourcesTabbedNavigation(e) {
        let key = e.which || e.keyCode;

        if (key === 13) {
            e.preventDefault();
            this.handleResourcesToggleButton(e);
        }

        if (this.resourceToggleState === 'visible') {
           this.firstLink.focus();
            e.preventDefault();
        } else {
            this.resourcesToggleBtn.focus();
        }
    }

    handleTransitionEnd() {
        if ( window._ub.resourceToggleState === 'hidden' ) {
            window._ub.linksPanel.style.display = "none";
        }

        if ( window._ub.searchToggleState === 'hidden' ) {
            window._ub.searchInput.value = '';
            window._ub.searchDialog.style.display = "none";
        }
    }

    get defaults() {
        return {
            googleCustomSearchCode: null,
            color: 'gray',
            maxWidth: null,
            placeholder: 'NC State',
            showBrick: 0
        }
    }

}