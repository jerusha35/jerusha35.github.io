# Aroma Life Community Church (ALC) Website

This is the first working version of the ALC responsive church website.

## Included
- Responsive Home page for phone, tablet, laptop and large screens
- ALC logo used as header logo and favicon
- Sunday service times
- Automatically calculated dates for recurring weekly activities
- About Us section
- Leadership section
- Events section
- Gallery with image lightbox
- Contact information and YouTube link
- Basic SEO metadata
- `robots.txt` and `sitemap.xml` starter files

## Weekly activities
Edit `activities.js` to change recurring activities.

Day numbers:
- 0 Sunday
- 1 Monday
- 2 Tuesday
- 3 Wednesday
- 4 Thursday
- 5 Friday
- 6 Saturday

The website calculates the next date for each activity automatically.

## Important
The current version is static. Editing `activities.js` changes the website after you publish the updated files. The next upgrade can connect the Weekly Activities section to Google Sheets so church staff can update it without editing code.

## Publish free with GitHub Pages
1. Create a public GitHub repository.
2. Upload all files and the `assets` folder.
3. Enable GitHub Pages from Settings > Pages.
4. Choose Deploy from a branch, `main`, `/ (root)`.
5. Your site will be published at your GitHub Pages URL.

Before publishing:
- Replace the placeholder sitemap URL with your real GitHub Pages URL.
- Replace the placeholder in `robots.txt`.
- Add more approved church information and event photographs.
- Add the exact Google Maps link for the church venue.

GitHub Pages documentation:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
