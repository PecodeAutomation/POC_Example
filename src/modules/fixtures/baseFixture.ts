import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../components/LoginPage";
import { HeaderComponent } from "../components/HeaderComponent";
import { standartUserCredentials } from "../data/credentials";

const test = baseTest.extend<{
  loginPage: LoginPage;
  headerComponent: HeaderComponent;
}>({
  page: async ({ page }, use) => {
    await page.goto("/");

    await page.locator("#username").fill(standartUserCredentials.userName);
    await page.locator("#current-password").fill(standartUserCredentials.password);
    await page.getByRole("button", { name: "Iniciar sesión" }).click();

    use(page);
  },
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { test };
export { expect } from "@playwright/test";
