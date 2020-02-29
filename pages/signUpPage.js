/**
 * Page objects for Sign up Page
 */

module.exports = {
    firstName_Txtbox: 'input[type=text][name="first_name"]',
    lastName_Txtbox: 'input[type=text][name="last_name"]',
    companyName_Txtbox: 'input[type=text][name="company_name"]',
    companySize_Cmbbox: 'div[data-validation*="company size"]',
    companyType_Cmbbox: 'div.sc-uJMKN.jBBZbt [data-validation*="company type"]',
    country_Cmbbox: 'div.sc-jbKcbu.cwaazX [data-validation*="company type"]',
    email_Txtbox: 'input[name="email"]',
    password_Txtbox: 'input[name="password"]',
    termsAndConditions_Chkbox: '#root > main > div.sc-bqjOQT.gjbVoe > div > div > form > div.sc-jbKcbu.kNyYqq > div > div > label > span > span > span.sc-jzJRlG.gsYDh',
    marketingNewsletters_Chkbox: 'input[type="checkbox"][name="marketing_newsletters"]',
    recaptcha_Chkbox: 'div.recaptcha-checkbox-border',
    signUp_Btn: 'button[data-cy-element="sign-up-button"] div',

    // Error Messages
    firstNameErrorMsg: '//*[@id="root"]/main/div[3]/div/div/form/div[1]/div[1]/div[2]',
    lastNameErrorMsg: '//*[@id="root"]/main/div[3]/div/div/form/div[1]/div[2]/div[2]/span',
    companyNameErrorMsg: '//*[@id="root"]/main/div[3]/div/div/form/div[2]/div[2]/span',
    companySizeErrorMsg: '//*[@id="root"]/main/div[3]/div/div/form/div[3]/div[1]/div[2]/span',
    companyTypeErrorMsg: '//*[@id="root"]/main/div[3]/div/div/form/div[3]/div[2]/div[2]/span',
    emailErrorMsg: '//*[@id="root"]/main/div[3]/div/div/form/div[5]/div[2]/span',
    passwordErrorMsg: '//*[@id="root"]/main/div[3]/div/div/form/div[6]/div[2]/span',
    termsAndConditionsErrorMsg: '//*[@id="root"]/main/div[3]/div/div/form/div[7]/div/div[2]/span/span',
    recaptchaErrorMsg: '//*[@id="root"]/main/div[3]/div/div/form/div[9]/div/div[2]/span'

};
