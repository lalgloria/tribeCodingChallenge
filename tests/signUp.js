
/**
 * This script is created to test the sign up page of Tribe Web
 * 
 *   1. Navigate to https://brand.tribegroup.co/signIn
 *   2. Click on Sign up button / link
 *   3. Sign up modal screen will be displayed.
 *   4. Enter email address charletribe+1@gmail.com (Or any other email address of your choice)
 *   5. Enter password tribe1234
 *   6. Fill in all other mandatory data (If possible add some validation cases to the text fields - Negative testing)
 * 
 * NOTE: 
 * Code starting from testing the CAPTCHA field was not automated since it is not possible to automate CAPTCHA field.
 */


module.exports = {
    'Tribe Website Sign Up - Demo Test': function (client) {

        let loginPage = require("../pages/loginPage");
        let signUpPage = require("../pages/signUpPage");
        let email = `${Math.floor(Math.random() * 99999)}@gmail.com`

        // Navigate to Login Page
        client
            .maximizeWindow()
            .url("https://brand.tribegroup.co/signIn")
            .waitForElementVisible("body")
            .pause(5000)
            .assert.titleContains("TRIBE - Log into TRIBE", "Login page successfully loaded");


        // Assert that all elements are present in the Login page
        client.assert.visible(loginPage.signUp_Lnk, "Sign Up link is visible");
        client.assert.visible(loginPage.email_Txtbox, "Email Textbox is visible");
        client.assert.visible(loginPage.password_Txtbox, "Password Textbox is visible");
        client.assert.visible(loginPage.login_Btn, "Login Button is visible");
        client.assert.visible(loginPage.forgotPassword_Lnk, "Forgot Password link is visible");

        /**
         * Click Sign Up Link
         * Added Assertion: Verification that the fields on the Sign Up page is visible
         */
        client
            .click(loginPage.signUp_Lnk)
            .waitForElementVisible(signUpPage.firstName_Txtbox, "First Name textbox is visible")
        
        client.assert.visible(signUpPage.lastName_Txtbox, "Last Name Textbox is present");
        client.assert.visible(signUpPage.companyName_Txtbox, "Company Name Textbox is visible");
        client.assert.visible(signUpPage.companySize_Cmbbox, "Company Size Combobox is visible");
        client.assert.visible(signUpPage.country_Cmbbox, "Country Combobox is visible");
        client.assert.visible(signUpPage.email_Txtbox, "Email Textbox is visible");
        client.assert.visible(signUpPage.password_Txtbox, "Password Textbos is visible");
        client.assert.elementPresent(signUpPage.termsAndConditions_Chkbox, "Terms and Conditions Checkbox is visible");
        client.assert.elementPresent(signUpPage.marketingNewsletters_Chkbox, "Marketing Newsletters Checkbox is visible");
        client.assert.visible(signUpPage.signUp_Btn, "Sign Up Button is visible");

        /**
         * Test Sign Up Page
         * 
         * Requirement:
         *  A. Email to use every sign up must be unique
         * 
         * Validations:
         *  A. Check if error messages will appear if required fields are not filled in
         *  B. Check accepted characters per field
         */
        client.click(signUpPage.signUp_Btn);
        client.useXpath();
        client.assert.containsText(signUpPage.firstNameErrorMsg, "Include first name");
        client.assert.containsText(signUpPage.lastNameErrorMsg, "Include last name");
        client.assert.containsText(signUpPage.companyNameErrorMsg, "Include company name");
        client.assert.containsText(signUpPage.companySizeErrorMsg, "Include company size");
        client.assert.containsText(signUpPage.companyTypeErrorMsg, "Include company type");
        client.assert.containsText(signUpPage.emailErrorMsg, "Your email looks incomplete");
        client.assert.containsText(signUpPage.passwordErrorMsg, "Create a password");
        client.assert.containsText(signUpPage.termsAndConditionsErrorMsg, "To continue, please read and agree to our privacy policy");
        client.assert.containsText(signUpPage.recaptchaErrorMsg, "To continue, please check reCAPTCHA");
        client.useCss();

        // Validating First Name textbox
        client.setValue(signUpPage.firstName_Txtbox, "Charle");
        client.click(signUpPage.signUp_Btn).useXpath().pause(1000);
        client.expect.element(signUpPage.firstNameErrorMsg).to.not.be.present;
        client.useCss();
        
        // Validating Last Name textbox
        client.setValue(signUpPage.lastName_Txtbox, "Tribe");
        client.click(signUpPage.signUp_Btn).useXpath();
        client.expect.element(signUpPage.lastNameErrorMsg).to.not.be.present;
        client.useCss();

        // Validating Company Name textbox
        client.setValue(signUpPage.companyName_Txtbox, "Tribe Group");
        client.click(signUpPage.signUp_Btn).useXpath();
        client.expect.element(signUpPage.companyNameErrorMsg).to.not.be.present;
        client.useCss();

        // Validating Company Size textbox
        client.click(signUpPage.companySize_Cmbbox);
        client.keys(client.Keys.ARROW_DOWN).keys(client.Keys.ENTER);
        client.click(signUpPage.signUp_Btn).useXpath();
        client.expect.element(signUpPage.companySizeErrorMsg).to.not.be.present;
        client.useCss();

        // Validating Company type textbox
        client.click(signUpPage.companyType_Cmbbox);
        client.keys(client.Keys.ARROW_DOWN).keys(client.Keys.ENTER)
        client.click(signUpPage.signUp_Btn).useXpath();
        client.expect.element(signUpPage.companySizeErrorMsg).to.not.be.present;
        client.useCss();

        // Validating Email textbox
        client.setValue(signUpPage.email_Txtbox, "charletribe");
        client.click(signUpPage.signUp_Btn).useXpath();
        client.assert.containsText(signUpPage.emailErrorMsg, "Your email looks incomplete");
        client.useCss();
        client.click(signUpPage.email_Txtbox).clearValue(signUpPage.email_Txtbox)
        client.setValue(signUpPage.email_Txtbox, email)
        client.click(signUpPage.signUp_Btn).useXpath();
        client.expect.element(signUpPage.emailErrorMsg).to.not.be.present;
        client.useCss();

        // Validating Password textbox
        client.setValue(signUpPage.password_Txtbox, "pass");
        client.click(signUpPage.signUp_Btn).useXpath();
        client.assert.containsText(signUpPage.passwordErrorMsg, "Use a minimum of 8 characters");
        client.useCss();
        client.setValue(signUpPage.password_Txtbox, "tribe1234");
        client.click(signUpPage.signUp_Btn).useXpath();
        client.expect.element(signUpPage.passwordErrorMsg).to.not.be.present;
        client.useCss();

        // Validating Terms and Conditions Checkbox
        client.click(signUpPage.termsAndConditions_Chkbox)
        client.expect.element(signUpPage.termsAndConditionsErrorMsg).to.not.be.present;

        


        

    




    }
  };