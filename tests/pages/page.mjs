import { browser } from '@wdio/globals';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    get form () {
        return $('form[action="#"]');
    }

    open (path) {
        return browser.url(`http://localhost:3000/${path}`);
    }
}