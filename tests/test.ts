import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toHaveText('Kamal Daniels');
	await expect(page.getByRole('link', { name: 'Home' })).toHaveText('Home');
	await expect(page.getByRole('link', { name: 'About' })).toHaveText('About');
});

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.locator('h1')).toHaveText('About');
	await expect(page.getByRole('link', { name: 'Home' })).toHaveText('Home');
	await expect(page.getByRole('link', { name: 'About' })).toHaveText('About');
});
