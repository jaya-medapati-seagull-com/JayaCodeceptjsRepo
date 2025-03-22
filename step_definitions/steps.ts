const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
    console.log(" This is test log" +I);
    I.amOnPage('/');
    I.wait(3);
});
When(/^I enter username$/, function () {

});