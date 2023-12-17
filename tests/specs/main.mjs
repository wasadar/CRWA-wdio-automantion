import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'
import loginPage from '../pages/login.page.mjs';
import mainPage from '../pages/main.page.mjs';
import data from '../../valid-data.json' assert { type: 'json' };
import { generateRandomString, generateRandomNumberString } from '../helpers.mjs';

describe('Test main page', () => {
    beforeEach(async () => {
        mainPage.open(data.user.username, data.user.password);
        await browser.pause(1000);
        await mainPage.processDialogueWindow();
        await browser.pause(1000);
    });

    it('Logout', async () => {
        mainPage.logout();

        await browser.pause(1000);

        expect(await loginPage.isLoginPage()).toEqual(true);
    });

    it('Firstname is required in user profile', async () => {
        await mainPage.accountSettingLink.click();
        await browser.pause(1000);

        // I had to use this way of clearing input field case .setValue('') or .clearValue() weren't working.
        let value = await mainPage.firstNameInputField.getValue();
        await mainPage.firstNameInputField.click();

        for (let i = 0; i < value.length; i++) {
            browser.keys(Key.Backspace);
        }

        await browser.pause(1000);
        expect(await mainPage.submitUserDataButton.isEnabled()).toEqual(false);
    });

    it('Lastname is required in user profile', async () => {
        await mainPage.accountSettingLink.click();
        await browser.pause(1000);

        // I had to use this way of clearing input field case .setValue('') or .clearValue() weren't working.
        let value = await mainPage.lastNameInputField.getValue();
        await mainPage.lastNameInputField.click();

        for (let i = 0; i < value.length; i++) {
            browser.keys(Key.Backspace);
        }

        await browser.pause(1000);
        expect(await mainPage.submitUserDataButton.isEnabled()).toEqual(false);
    });

    it('Email is required in user profile', async () => {
        await mainPage.accountSettingLink.click();
        await browser.pause(1000);

        // I had to use this way of clearing input field case .setValue('') or .clearValue() weren't working.
        let value = await mainPage.emailInputField.getValue();
        await mainPage.emailInputField.click();

        for (let i = 0; i < value.length; i++) {
            browser.keys(Key.Backspace);
        }

        await browser.pause(1000);
        expect(await mainPage.submitUserDataButton.isEnabled()).toEqual(false);
    });

    it('Email is validated in user profile', async () => {
        await mainPage.accountSettingLink.click();
        await browser.pause(1000);

        // I had to use this way of clearing input field case .setValue('') or .clearValue() weren't working.
        let value = await mainPage.emailInputField.getValue();
        await mainPage.emailInputField.click();

        for (let i = 0; i < value.length; i++) {
            browser.keys(Key.Backspace);
        }

        await mainPage.emailInputField.setValue(generateRandomString(8,false));

        await browser.pause(1000);
        expect(await mainPage.submitUserDataButton.isEnabled()).toEqual(false);
    });

    it('Phone number is required in user profile', async () => {
        await mainPage.accountSettingLink.click();
        await browser.pause(1000);

        // I had to use this way of clearing input field case .setValue('') or .clearValue() weren't working.
        let value = await mainPage.phoneInputField.getValue();
        await mainPage.phoneInputField.click();

        for (let i = 0; i < value.length; i++) {
            browser.keys(Key.Backspace);
        }

        await browser.pause(1000);
        expect(await mainPage.submitUserDataButton.isEnabled()).toEqual(false);
    });

    it('Phone number is validated in user profile', async () => {
        await mainPage.accountSettingLink.click();
        await browser.pause(1000);

        // I had to use this way of clearing input field case .setValue('') or .clearValue() weren't working.
        let value = await mainPage.phoneInputField.getValue();
        await mainPage.phoneInputField.click();

        for (let i = 0; i < value.length; i++) {
            browser.keys(Key.Backspace);
        }

        await mainPage.phoneInputField.setValue(generateRandomString(8));

        await browser.pause(1000);
        expect(await mainPage.submitUserDataButton.isEnabled()).toEqual(false);
    });
})