import { LoginPage } from "./login.page.mjs";

export class MainPage extends LoginPage {
    get logoutButton () {
        return $('[data-test="sidenav-signout"]');
    }

    get sidebar () {
        return $('[data-test="sidenav"]');
    }

    get header () {
        return $('header');
    }

    get content () {
        return $('[data-test="main"]');
    }

    get firstNameInputField () {
        return $('#user-settings-firstName-input');
    }

    get lastNameInputField () {
        return $('#user-settings-lastName-input');
    }

    get emailInputField () {
        return $('#user-settings-email-input');
    }

    get phoneInputField () {
        return $('#user-settings-phoneNumber-input');
    }

    get accountSettingLink () {
        return $('a[href="/user/settings"]');
    }

    get submitUserDataButton () {
        return $('[data-test="user-settings-submit"]');
    }

    async isMainPage () {
        await browser.pause(1000);

        const header = await this.header.isExisting();
        const sidebar = await this.sidebar.isExisting();
        const content = await this.content.isExisting();

        return header && sidebar && content;
    }

    async logout () {
        await this.logoutButton.click();
    }

    open (username, password) {
        super.open();
        super.login(username, password);
    }
}

export default new MainPage();