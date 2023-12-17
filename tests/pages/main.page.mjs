import { LoginPage } from "./login.page.mjs";
import { generateRandomString, generateRandomNumberString } from "../helpers.mjs";

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

    get dialogWindow () {
        return $('.MuiDialogTitle-root');
    }

    get bankNameInputField () {
        return $('#bankaccount-bankName-input')
    }

    get routingNumberInputField () {
        return $('#bankaccount-routingNumber-input')
    }

    get accountNumberInputField () {
        return $('#bankaccount-accountNumber-input')
    }

    get saveButton () {
        return $('[data-test="bankaccount-submit"]');
    }

    get skipButton () {
        return $('[data-test="user-onboarding-next"]');
    }

    async processDialogueWindow () {
        if (await this.dialogWindow.isExisting()) {
            await this.skipButton.click();
            await this.bankNameInputField.setValue(generateRandomString(6, false));
            await this.routingNumberInputField.setValue(generateRandomNumberString(9));
            await this.accountNumberInputField.setValue(generateRandomNumberString(9));
            await this.saveButton.click();
            await this.skipButton.click();
        }
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