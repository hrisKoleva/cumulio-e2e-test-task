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

  await expect(page.getByRole('button', { name: 'Log in' })).toBeEnabled();
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

//I'll a bit more practice to figure out all the idiosyncrasies of the framework, so here's what needs to be tested:
// 1. all elements on the page are visible and accessible - clickable, hoverable, tooltips are shown and fully visible
// 2. when an element is clickable, and clicked, there must be an output from the action
// 3. all links work and lead to another page, frame
// 4. all fields accept values and have proper validation
// 5. login form works as defined, including the error messages on invalid credentials
// 6. forgot password flow is working (btw, I didn't receive the reset parssword email)
// 7. the sign-up flow, including email validation if required.
// 8. test the Home screen after Sign-Up (btw, I had a problem with popup that was not able to close - it asked if I wanted a new dashboard or something else)
// 9. test login, signup flows for the two storage centers independently
// 10. verify login and create my account, respectfully on the login and signup pages are not enabled until the required fields are filled/checked
// 11. After login, verify sign out flow
// 12. etc.
