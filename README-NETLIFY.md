# Faultline Protocol — Netlify Edition

## Fastest deployment (GitHub recommended)
1. Unzip this package.
2. Upload all files and folders to a new GitHub repository. Keep `netlify/functions` intact.
3. In Netlify, choose **Add new project → Import an existing project**, select GitHub, then select the repository.
4. Netlify reads `netlify.toml`; no build command is required. Publish directory is `.`.
5. Before or after the first deploy, open **Project configuration → Environment variables**. Add `TEACHER_PIN` and give it a private value known only to the teacher.
6. Trigger a new production deploy after adding or changing the PIN.
7. Share the production URL with learners. Open **Teacher Dashboard** on the same URL.

## Important: do not use drag-and-drop alone
The game needs Netlify Functions and the `@netlify/blobs` dependency for the shared dashboard. A repository-based deploy lets Netlify install the dependency and bundle the functions.

## Data collected
Group name, member names, status, score, lives, attempts, time, hints, progress, and challenge event records. Data is stored in site-wide Netlify Blobs stores named `escape-results` and `escape-events`.

## Classroom use
- One device and one browser tab per group.
- Each challenge allows three attempts per cycle. After the third wrong answer, one of five lives is lost and attempts reset.
- Learners must unlock the current code before proceeding.
- The dashboard refresh button retrieves the latest saved records.
- Dashboard CSV export downloads the current results view.

## Local preview
Opening `index.html` directly demonstrates the interface, but uses device-local browser storage. Shared scores work only after Netlify deployment. For full local function testing, install Node.js and Netlify CLI, run `npm install`, then `netlify dev`.

## Privacy
Use first names, initials, or group aliases if your school policy discourages publishing full learner names. The dashboard needs the teacher PIN, but the application is intended for classroom assessment—not high-security examinations.
