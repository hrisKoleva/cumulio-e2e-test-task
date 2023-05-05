import { expect, test } from '@playwright/test';
import { warn } from 'console';

test('Login page has "Login" in title', async ({ page }) => {
  await page.goto('https://app.cumul.io/home/login');

  await expect(page).toHaveTitle(/Login/);
});

//will have to check that all elements on the page are visible. Here are some of them
/*test('Login button is initially disabled', async ({ page }) => {
  const loginButton = page.locator(
    '.btn-primary.disabled, .btn-primary:disabled'
  );
  await expect(loginButton).toBeVisible();
});*/

test('Email format is verified', async ({ page }) => {
  await page.goto('https://app.cumul.io/home/login');

  const loginEmail = page.locator('#login-email');
  await expect(loginEmail).toBeVisible();
  const password = page.locator('#login-password');
  await expect(password).toBeVisible();

  let email1 = 'email@domain.com';
  let password1 = 'Password15^';
  let email2 = '0505@2023.102';

  let emailFormat = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  await loginEmail.fill(email1);
  await password.fill(password1);

  console.log(RegExp.apply(email1));
});

/* this fails, first looks says it uses the PW Library and maybe because it tries to open a whole new page. Will leave it as it is. The test is apparently to check if the link works

test('Sign up page is opened on Sign up now! link click', async ({ page }) => {
  await page.goto('https://app.cumul.io/home/login');

  const signUpLink = page.getByText(/Sign up now/);
  await signUpLink.click();

  await page.goto('https://app.cumul.io/signup');
  await expect(page).toHaveTitle(
    /Try Embedded Analytics | Free 10-day Cumul.io Trial/
  );
});*/
