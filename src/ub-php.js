import UtilityBar from './UtilityBar';

class loadUb {

    constructor() {
        this.ubScriptSrc = this.scriptSrc;
        this.options = {};
        this.validProps = [
            'googleCustomSearchCode',
            'color',
            'maxWidth',
            'placeholder',
            'showBrick'
        ];

        if (this.ubScriptSrc.length > 0) {
            this.loadOptionsFromScript();
        }

        window._ub = new UtilityBar(this.options);
        window.addEventListener('DOMContentLoaded', () => {
            window._ub.render();
        }, false);
    }

    get scriptSrc() {
        let php = document.querySelector('script[src*="ub.php"]');
        let js = document.querySelector('script[src*="ub-php.js"]');

        return php ? php.getAttribute('src') : js.getAttribute('src');
    }

    loadOptionsFromScript() {
        this.validProps.forEach(field => {
            if ( this.getQueryString( field ) !== false ) {
                this.options[field] = this.getQueryString( field );
            }
        });
    }

    getQueryString( field ) {
        let reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
        let string = reg.exec(this.ubScriptSrc);
        return string ? string[1] : false;
    }

}

new loadUb();
