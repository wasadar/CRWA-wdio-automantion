import { expect } from '@wdio/globals'
import loginPage from '../pages/login.page.mjs';
import mainPage from '../pages/main.page.mjs';
import registerPage from '../pages/register.page.mjs';
import data from '../../valid-data.json' assert { type: 'json' };
import { generateRandomString } from '../helpers.mjs';

describe('Test login page', () => {
    beforeEach(() => {
        loginPage.open();
    });

    it('Register link', async () => {
        await loginPage.registerLink.click();
        await loginPage.registerLink.click();
        await browser.pause(1000);

        expect(await registerPage.isRegisterPage()).toEqual(true);
    });

    it('Username is required', async () => {
        await loginPage.fillFields(data.user.username,'');

        expect(await loginPage.signInButton.isEnabled()).toEqual(false);
    });

    it('Password is required', async () => {
        await loginPage.fillFields('', data.user.password);

        expect(await loginPage.signInButton.isEnabled()).toEqual(false);
    });

    it('Invalid username', async () => {
        await loginPage.login(generateRandomString(8,false),data.user.password);

        await expect(await loginPage.checkLoginError('Username or password is invalid')).toEqual(true);
    });

    it('Invalid password', async () => {
        await loginPage.login(data.user.username,generateRandomString(6));

        expect(await loginPage.checkLoginError('Username or password is invalid')).toEqual(true);
    });

    it('Succesful login', async () => {
        await loginPage.login(data.user.username,data.user.password);

        expect(await mainPage.isMainPage()).toEqual(true);
    });

    after(() => {
        mainPage.logout();
    });
});