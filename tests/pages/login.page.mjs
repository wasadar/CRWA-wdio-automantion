import Page from "./page.mjs";

export class LoginPage extends Page {
    get usernameInputField () {
        return $('#username');
    }

    get passwordInputField () {
        return $('#password');
    }

    get signInButton () {
        return $('[data-test="signin-submit"]');
    }

    get registerLink () {
        return $('a[href="/signup"]');
    }

    get loginError () {
        return $('.MuiAlert-message');
    }

    async isLoginPage () {
        const loginForm = await this.form.isExisting();
        const url = await browser.getUrl();

        return loginForm && url.includes('/signin');
    }

    async checkLoginError (error) {
        const errorMessage = await this.loginError.getText();
        const loginForm = await this.isLoginPage();

        return loginForm && (errorMessage === error);
    }

    async fillFields (username, password) {
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
    }
    
    async login (username, password) {
        await this.fillFields(username, password);
        await this.signInButton.click();
    }

    open () {
        return super.open('signin');
    }
}

export default new LoginPage();