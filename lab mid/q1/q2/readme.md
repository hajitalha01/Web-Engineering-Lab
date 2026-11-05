Web Engineering Lab Mid

This repository contains solutions for two questions:

Q1: Sports Trials Booking Page (HTML, CSS, JavaScript)
Q2: Gym Equipment Tracker (Vite + React + TypeScript)
Folder Structure
lab mid/
├── q1/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── q2/
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── EquipmentRow.tsx
        ├── types.ts
        └── App.css
Q1: Sports Trials Booking Page

A simple booking page for Sports Gala trials, built with plain HTML, CSS and JavaScript (no libraries).

Features
Semantic layout: header (with h1 and nav), main, footer
Accessible table with a caption and th scope="col" headers
Booking form with Full Name, Email and Sport select, each with a label
Responsive layout: table and form side by side (table wider), stacked in one column below 700px
Form validation using preventDefault(): shows an error next to each empty field (plus alert()), otherwise shows "Booked <name> for <sport>." in a role="status" paragraph
How to Run

No installation needed. Open q1/index.html in a browser.

Q2: Gym Equipment Tracker

A small tool that tracks which gym equipment is currently checked out.

Features
Equipment interface and typed data array (Equipment[]) in types.ts
EquipmentRow component with props: equipment, checkedOut, onToggle
Button toggles between "Check out" and "Check in"; checked-out rows are highlighted
Checked-out IDs stored in useState<number[]> in App (lifted state), updated immutably with spread / filter
Summary text "X of 3 items checked out." calculated from checkedOut.length
Table with caption and th scope="col" headers
How to Run
bash
cd q2
npm install
npm run dev

Open the link shown in the terminal (usually http://localhost:5173/).

Build
bash
npm run build

The build completes with no TypeScript errors.

Notes
Run all npm commands inside the q2 folder (where package.json is).
npm warnings about vulnerabilities and esbuild install-scripts can be ignored.
Requirements: Node.js 18 or newer.
