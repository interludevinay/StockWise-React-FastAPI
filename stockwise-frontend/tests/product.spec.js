// import { test, expect } from '@playwright/test';

// test('Add product via UI', async ({ page }) => {
//   await page.goto('/');

//   await page.fill('input[name="id"]', '99');
//   await page.fill('input[name="name"]', 'Test Product');
//   await page.fill('input[name="description"]', 'Test Description');
//   await page.fill('input[name="price"]', '123');
//   await page.fill('input[name="quantity"]', '10');

//   await page.click('button:text("Add")');

//   await expect(page.locator('text=Product created successfully')).toBeVisible();
// });

// test('Delete product via UI', async ({ page }) => {
//   await page.goto('/');
//   await page.click('button:text("Delete")');
//   await page.on('dialog', dialog => dialog.accept());
// });

import { test, expect } from '@playwright/test';

test('Add product via UI', async ({ page }) => {
  await page.goto('/');

  // Fill form
  await page.fill('input[name="id"]', '12345');
  await page.fill('input[name="name"]', 'Playwright Test');
  await page.fill('input[name="description"]', 'UI automation');
  await page.fill('input[name="price"]', '99');
  await page.fill('input[name="quantity"]', '10');

  await page.getByRole('button', { name: 'Add' }).click();

  // Wait for success message
  await expect(page.locator('.success-msg'))
    .toContainText('Product created successfully', { timeout: 10000 });
});
test('Delete product via UI', async ({ page }) => {
  await page.goto('/');

  // Wait until at least one Delete button appears
  const deleteButton = page.getByRole('button', { name: 'Delete' }).first();
  await expect(deleteButton).toBeVisible({ timeout: 10000 });

  // Listen for confirmation dialog BEFORE clicking
  page.once('dialog', dialog => dialog.accept());

  await deleteButton.click();

  // Validate deletion success message
  await expect(page.locator('.success-msg'))
    .toContainText('Product deleted successfully', { timeout: 10000 });
});
