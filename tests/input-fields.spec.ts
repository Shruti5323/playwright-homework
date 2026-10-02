import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('Update pet type', async ({ page }) => {

  //click on the pet types link and check if the heading is Pet Types
  await page.getByText('PET TYPES').click();
  await expect(page.getByRole('heading')).toHaveText('Pet Types');

  //click on the edit button for the first pet type and check if the textbox is having value cat
  await page.getByRole('row', { name: 'cat' }).getByRole('button', { name: 'Edit' }).click();
  await expect(page.getByRole('textbox')).toHaveValue('cat')

  //clear the textbox and fill it with rabbit and click on update button and check if the value is updated to rabbit
  await page.getByRole('textbox').fill('rabbit');
  await page.getByRole('button', { name: 'Update' }).click();

  //check if the value is updated to rabbit
  await expect(page.locator('[id="0"]')).toHaveValue('rabbit');

  //click on the edit button for the first pet type and check if the textbox is having value rabbit
  await page.getByRole('row', { name: 'rabbit' }).getByRole('button', { name: 'Edit' }).click();
  await expect(page.getByRole('textbox')).toHaveValue('rabbit')

  //clear the textbox and fill it with cat and click on update button and check if the value is updated to cat
  await page.getByRole('textbox').fill('cat');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.locator('[id="0"]')).toHaveValue('cat');

});