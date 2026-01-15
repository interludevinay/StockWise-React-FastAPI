// import { test, expect } from '@playwright/test';

// test('App loads and shows heading', async ({ page }) => {
//   await page.goto('/');
//   await expect(page.locator('text=StockWise')).toBeVisible();
// });

import { test, expect } from '@playwright/test';

test('App loads and shows heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'StockWise' }))
    .toBeVisible({ timeout: 10000 });
});
