const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
    console.log(" This is test log" +I);
    I.amOnPage('/');
    I.wait(3);
});

When(/^I enter username$/, async function () {
    // Fill the username field with the value
    await I.fillField('//*[@id="OrganizationDnsName"]', 'QAAutostage4');
    // Click the button
    //await I.click('/html/body/div[2]/div/form/div[3]/input[2]');
    I.click('//input[@type="submit"]');
    await I.fillField('//*[@id="1-email"]', 'qatestseagull.mff+U1QAAutostage4@gmail.com');
    await I.fillField('//*[@id="1-password"]','QaTestSeagull.mff1');
    await I.click('//*[@id="1-submit"]');
});