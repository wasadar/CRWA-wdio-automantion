import Page from "./page.mjs";

export class RegisterPage extends Page {
    get firstNameInputField () {
        return $('#firstName');
    }

    get lastNameInputField () {
        return $('#lastName');
    }

    get usernameInputField () {
        return $('#username');
    }

    get passwordInputField () {
        return $('#password');
    }

    get confrimPasswordInputField () {
        return $('#confirmPassword');
    }

    get signUpButton () {
        return $('[data-test="signup-submit"]');
    }

    get loginLink () {
        return $('a[href="/signin"]');
    }

    async isRegisterPage () {
        const loginForm = await this.form.isExisting();
        const url = await browser.getUrl();

        return loginForm && url.includes('/signup');
    }

    async fillFields (firstname, lastname, username, password, passwordConfirm) {
        await this.firstNameInputField.setValue(firstname);
        await this.lastNameInputField.setValue(lastname);
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
        await this.confrimPasswordInputField.setValue(passwordConfirm);
    }

    async register (firstname, lastname, username, password) {
        await this.fillFields(firstname, lastname, username, password, password);
        await this.signUpButton.click();
    }

    open () {
        return super.open('signup');
    }
}

export default new RegisterPage();