import { expect } from '@wdio/globals'
import loginPage from '../pages/login.page.mjs';
import mainPage from '../pages/main.page.mjs';
import registerPage from '../pages/register.page.mjs';
import { generateRandomString } from '../helpers.mjs';

describe('Test register page', () => {
    beforeEach(() => {
        registerPage.open();
    });

    it('Login link', async () => {
        await browser.execute(() => {
            document.activeElement.blur();
        });

        await registerPage.loginLink.click();
        await browser.pause(1000);

        expect(await loginPage.isLoginPage()).toEqual(true);
    });

    it('First name is required', async () => {
        const pass = generateRandomString(4);

        await registerPage.fillFields('', generateRandomString(4), generateRandomString(4), pass, pass);

        expect(await registerPage.signUpButton.isEnabled()).toEqual(false);
    });

    it('Last name is required', async () => {
        const pass = generateRandomString(4);

        await registerPage.fillFields(generateRandomString(4), '', generateRandomString(4), pass, pass);

        expect(await registerPage.signUpButton.isEnabled()).toEqual(false);
    });

    it('Username is required', async () => {
        const pass = generateRandomString(4);

        await registerPage.fillFields(generateRandomString(4), generateRandomString(4), '', pass, pass);

        expect(await registerPage.signUpButton.isEnabled()).toEqual(false);
    });

    it('Password is required', async () => {
        const pass = generateRandomString(4);

        await registerPage.fillFields(generateRandomString(4), generateRandomString(4), generateRandomString(4), '', pass);

        expect(await registerPage.signUpButton.isEnabled()).toEqual(false);
    });

    it('Password confirmation is required', async () => {
        const pass = generateRandomString(4);

        await registerPage.fillFields(generateRandomString(4), generateRandomString(4), generateRandomString(4), pass, '');

        expect(await registerPage.signUpButton.isEnabled()).toEqual(false);
    });

    it('Password and password confirmation should match', async () => {
        await registerPage.fillFields(generateRandomString(4), generateRandomString(4), generateRandomString(4), generateRandomString(4), generateRandomString(4));

        expect(await registerPage.signUpButton.isEnabled()).toEqual(false);
    });

    it('Register with valid data', async () => {
        const login = generateRandomString(4, false);
        const password = generateRandomString(4);

        await registerPage.register(generateRandomString(4, false), generateRandomString(4, false), login,password);
        await browser.pause(1000);
        await loginPage.login(login, password);
        await browser.pause(1000);
        await mainPage.processDialogueWindow();
        await browser.pause(1000);

        expect(await mainPage.isMainPage()).toEqual(true);
    });

    after(() => {
        mainPage.logout();
    });
});