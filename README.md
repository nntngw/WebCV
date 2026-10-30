# Nguyen Thu Ngan | Professional Portfolio

A static personal portfolio built with HTML, CSS and JavaScript, ready to deploy on Netlify.

## Files
- `index.html` — website content and structure
- `style.css` — responsive visual design and print stylesheet
- `script.js` — language toggle, photo upload, navigation and animations
- `assets/profile-placeholder.svg` — replaceable portrait placeholder

## Preview locally
Open `index.html` in a modern browser. For best results, use a local development server (for example, VS Code Live Server).

## Deploy to Netlify
1. Extract this ZIP file.
2. Create a GitHub repository and upload the contents of this folder to the repository root.
3. In Netlify, choose **Add new site → Import an existing project**.
4. Connect GitHub and select the repository.
5. Build command: leave blank. Publish directory: `.` (the repository root).
6. Select **Deploy**. Netlify will provide a public website URL.

You can also drag and drop the extracted folder into Netlify's manual deploy area.

## Profile photo
Use **Upload photo** on the homepage. The selected image is stored in the browser's local storage, so it remains on that browser/device. It is not uploaded to Netlify and will not automatically sync to other devices or visitors. For a public, permanent profile image, replace `assets/profile-placeholder.svg` with your chosen image and update the `src` on `#profilePhoto` in `index.html` (or add a hosted image service later).

## Download CV
The **Download CV** control opens the browser print dialog. Choose **Save as PDF**. The print stylesheet creates a simplified CV-friendly layout.

## Important content notes
- No GPA was supplied, so it is not displayed.
- TOEIC 750+ and MOS are shown as provided; specific exam date and MOS modules are not invented.
- Student communications and Mùa hè xanh are described only to the extent provided.
- The three project cards are clearly marked as proposed academic case studies / concepts, not completed professional projects.
- Samsung is identified as a target company / career interest, not an employer or affiliation.
- Review all personal details and wording before submitting the CV to an employer.

## Customize
- Change text in `index.html`.
- Change colors in `:root` in `style.css`.
- Change contact details in the Contact section.
