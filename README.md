# DDU EGOV PORTAL

The intention to make this project was to make egov student portal more attractive and colourfull by using REACT App as a frontend and Tailwind as a css.

<li>Hello Everyone, Respected faculties and my dear fellows,</li>
<li>Here, we include our home page which contains students profile, guardian and contact information along with my academic information.</li>
<li>Fees voucher page contains information about fees status.</li>
<li>Exam result page contains information about external and internal exams and also provide marksheet in PDF form.</li>
<li>For the hall ticket page, we have included information about hall ticket along with download functionality.</li>
<li>In moodle page, user can update his/her profile according to given input text.</li>
<li>Information of program and class is available at program info page; it also provides info about exam grade and marks in percentage which includes attendence marks.</li>
<li>User can serach info about any subject through search subject web page.</li>
<li>Here, student can see his/her subjects thriugh ny subjects web page, which also contains poaasing marks for exam.</li>
<br>
<b>We have also made website fully responsive so that student can access it through any device easily.</b>

## Tech Stack

Here we use these technical components :

<p align="left">
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/react-v18.1.0-brightgreen" alt="ruby version">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind-v3.0.24-blue" alt="ruby version">
  </a>
</p>

**Client:** React, TailwindCSS

## Deployment

To make REACT App use this commands

```bash
  npm create-react-app egovportal
```

And then after you should write your code by changing directory.
for set-up Tailwind.css use this command

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwind init -p
```

After run this commands we have to change the content of 'tailwind.config.js' to this lines of code

```
 content : [
    "./src/ * * / *.{js,jsx,ts,tsx}",
    ]
```

Add these lines to "index.css"

```
@tailwind base;
@tailwind Components;
@tailwind utilities;

```

## Screenshots

![App Screenshot](./public/images/Screenshot_58.jpg)

![App Screenshot](./public//images/Screenshot_53.jpg)
