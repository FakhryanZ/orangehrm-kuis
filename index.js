const { Builder, By } = require("selenium-webdriver");
const Assert = require("assert");

async function loginOrangeHRM() {
  try {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get(
      "https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login"
    );

    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.name("Submit")).click();

    const text = await driver.findElement(By.xpath("//li")).getText();

    Assert.equal(text, "Welcome Admin", "Tes Gagal");
    console.log("Tes Sukses")
  } catch (error) {
    console.log("Tes Gagal");
  }
}

loginOrangeHRM();
