import { expect, test } from '@playwright/test';

test('Login page has "Login" in title', async ({ page }) => {
  await page.goto('https://app.cumul.io/home/login');

  await expect(page).toHaveTitle(/Login/);
});

test('Login button is disabled for empty username and password', async ({
  page,
}) => {
  await page.goto('https://app.cumul.io/home/login');

  await expect(page.getByRole('link', { name: 'Login' })).toBeDisabled();
});
