# WebdriverIO tests

WebdriverIO tests Automated Tests for Cypress Real World App with WebdriverIO and Allure Reporting.

## Table of Contents
1. [Summary](#summary)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Usage](#usage)

## Summary
This repository contains automated tests for Cypress Real World App using the WebdriverIO framework. The test results are reported using Allure reporting.

## Requirements
- Node.js (v14.17.3 or higher)
- Java (JRE 8 or higher)
- yarn (v1.22.21 or higher)
- WebdriverIO (v8.26.1 or higher)
- Allure Framework (v2.15.0 or higher)

Most of the dependencies can be downloaded throught using this command after cloning repository:
    ```
    npm install
    ```
And this command in the app directory:
    ```
    yarn install
    ```
But some of them including: Node.js, Java, yarn - can not.

Please make sure you have the necessary dependencies installed and the environment properly configured before running the tests. You can customize the tests in the [tests](tests) directory and configure the WebdriverIO options in the [config](wdio.config.mjs) file as needed.

## Installation
### For Windows
1. Make sure Node.js is installed:
    - If you don't have Node.js installed, download and install it from the official [Node.js website](https://nodejs.org/en).
    - Choose next button after going throguht the link to download LTS version.
    - ![Node installation](readme-images/node.jpg)
    - After download is finished run the installer.
    - After installation, verify that Node.js and npm (Node Package Manager) are correctly installed by running the following commands in your terminal:
     ```
     node -v
     npm -v
     ```
    - You should see version numbers displayed, indicating that Node.js and npm are installed.

2. Make sure Java is installed:
    - If you don't have Java installed, download and install it from the official [Java Download Page](https://www.java.com/en/download/ie_manual.jsp).
    - Choose next button after going throguht the link to download LTS version.
    - ![Java installation](readme-images/java.jpg)
    - After download is finished run the installer.
    - Than add installation directory (by default "C:\Program Files (x86)\Java\jre-1.8\" on Windows) to the PATH variable.
    - In Search, search for and then select: System (Control Panel)
    - Click the Advanced system settings link.
    - Click Environment Variables. In the section System Variables find the PATH environment variable and select it. Click Edit. If the PATH environment variable does not exist, click New.
    - In the Edit System Variable (or New System Variable) window, specify the value of the PATH environment variable. Click OK. Close all remaining windows by clicking OK.
    - Reopen Command prompt window, and run your java code.
    - Next, verify that Java is correctly installed by running the following command in your terminal:
     ```
     java -version
     ```
    - You should see the installed Java version displayed.

3. Make sure yarn is installed:
    - If you don't have Yarn installed, you can install it globally by running the following command in your terminal:
    ```
    npm install -g yarn
    ```
    - After the installation is finished, verify that Yarn is correctly installed by running the following command in your terminal:
    ```
    yarn -v
    ```
    - You should see the version number displayed, indicating that Yarn is successfully installed.

4. Clone this repository to your local machine.
    ```
    git clone https://github.com/wasadar/CRWA-wdio-automantion.git
    ```

5. Navigate to the project directory.
    ```
    cd CRWA-wdio-automantion
    ```

6. Install test's required dependencies.
    ```
    npm install
    ```

7. Navigate to the app directory.
    ```
    cd app
    ```

8. Install app's required dependencies.
    ```
    yan install
    ```

### For Linux
1. Make sure Node.js is installed:
    - If you don't have Node.js installed, you can use the following commands to install it on Linux:
    ```
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource-archive-keyring.gpg
    echo "deb [signed-by=/usr/share/keyrings/nodesource-archive-keyring.gpg] https://deb.nodesource.com/node_14.x focal main" | sudo tee /etc/apt/sources.list.d/nodesource.list
    sudo apt-get update
    sudo apt-get install -y nodejs
    ```
        - After installation, verify that Node.js and npm are correctly installed by running the following commands in your terminal:
    ```
    node -v
    npm -v
    ```
    - You should see version numbers displayed, indicating that Node.js and npm are installed.

2. Make sure Java is installed:
    - If you don't have Java installed, you can use the following commands to install it on Linux:
    ```
    sudo apt-get update
    sudo apt-get install -y default-jre
    ```
    - After installation, verify that Java is correctly installed by running the following command in your terminal:
    ```
    java -version
    ```
    - You should see the installed Java version displayed.

3. Make sure yarn is installed:
    - If you don't have Yarn installed, you can install it globally by running the following command in your terminal:
    ```
    npm install -g yarn
    ```
    - After the installation is finished, verify that Yarn is correctly installed by running the following command in your terminal:
    ```
    yarn -v
    ```
    - You should see the version number displayed, indicating that Yarn is successfully installed.

4. Clone this repository to your local machine.
    ```
    git clone https://github.com/wasadar/CRWA-wdio-automantion.git
    ```

5. Navigate to the project directory.
    ```
    cd CRWA-wdio-automantion
    ```

6. Install test's required dependencies.
    ```
    npm install
    ```

7. Navigate to the app directory.
    ```
    cd app
    ```

8. Install app's required dependencies.
    ```
    yarn install
    ```

## Usage
### Running Tests
To run the automated tests using WebdriverIO, you can use the following npm scripts defined in the `package.json` file:

- Run the automated tests using WebdriverIO:
    ```
    npm run test:browser-name
    ```

- Run the automated tests using WebdriverIO in headless-mode:
    ```
    npm run test:browser-name:headless
    ```

Choose the appropriate script based on your testing needs. And don't forget that you need run app by executing command first:
    ```
    yarn dev
    ```

### Generating Reports
To generate and view reports, you can use the following npm scripts:

- Generate the Allure report:
    ```
    npm run generate:report
    ```

- Open the Allure report in your default web browser:
    ```
    npm run open:report
    ```

The test results will be saved in the "reports\allure-report" directory for Allure reporting. Make sure to configure your tests and reporting as needed in the project's configuration files and the Allure configuration.