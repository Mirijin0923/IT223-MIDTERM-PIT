Appendix B: AI Prompt Log
Entry #1
Tool Used: Claude.ai
Prompt (copy-paste exactly):

Can you check my HTML code for errors? Be specific about what line or section the error is in and explain why it is wrong. Here is my code: 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mary Jane's Resume</title>
</head>
<body>

    <nav>
        <a href="about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>

    <img src="assets/profile.png" alt="My profile photo" />
    <h1>Mary Jane Jubahib</h1>

    <section id="about">
        <h2>About Me</h2>
        <p>Hi! I'm Mary Jane Jubahib, a 2nd year BSIT student who enjoys building things for the web. I love learning new technologies and creating projects that are both functional and good-looking.
    </section>

    <section id="education">
        <h2>Education</h2>

        <div>
            <h3>BS Information Technology</h3>
            <p>University of Science and Technology of Southern Philippines · 2024 - Present</p>
            <p>Interested in web development, with basic knowledge in HTML and CSS.</p>
        </div>

        <div>
            <h3>Senior High School</h3>
            <p>Liceo de Cagayan University · 2022 - 2024</p>
            <p>STEM strand, graduated with honors.</p>
        </div>

        <div>
            <h3>Junior High School</h3>
            <p>Holy Cross High School · 2018 - 2022</p>
            <p>Consistent honor student.</p>
        </div>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>PHP & MySQL</li>
            <li>Python</li>
            <li>UI Design</li>
        </ul>
    </section>

    <section id="projects">
        <h3>Projects</h3>

        <div>
            <h3>Multiplayer Tetris Game</h3>
            <p>A Python-based Tetris Game with multiplayer support using Tkinter and sockets. It includes a lobby system, score tracking, and real-time gameplay.</p>
        </div>

        <div>
            <h3>Student Record System</h3>
            <p>A simple system that stores and manages student information using PHP and MySQL.</p>
        </div>

        <div>
            <h3>Personal Portfolio Website</h3>
            <p>A responsive website created using HTML and CSS to showcase my skills and projects.</p>
        </div>
    </section>

</body>
</html>

AI Output (summary or screenshot reference):
Four errors were found in the code a missing # in the About nav link, an unclosed tag in the About section, a wrong heading tag in the Projects section and in the Skills list, the & symbol was used incorrectly and should be written as &amp instead.

How I used/modified it in my project:
<!-- .I fixed the errors AI pointed out. I added the missing # in the nav link, closed the paragraph tag, changed the heading to <h2>, and corrected the HTML symbols. -->



Entry #2
Tool Used: Claude.ai
Prompt (copy-paste exactly):

Can you check if my contact form is correct? I need a form with Name, Email, Message fields and a Send button. Please explain what's missing or wrong and explain what each part does. Here is my code:
<form id="contact-form">
    <label>Name:</label><br>
    <input type="text" id="name"><br><br>

    <label>Email:</label><br>
    <input type="email" id="email"><br><br>

    <label>Message:</label><br>
    <textarea id="message"></textarea><br><br>

    <button type="submit">Send</button>
</form>

AI Output (summary or screenshot reference):
The response corrected the contact form by adding missing attributes like for in labels, name in inputs and textarea, and placeholders for guidance. It also explained that for links the label to the input, name is needed to send the data, and placeholder shows a hint for the user.

How I used/modified it in my project:
I added for and name attributes to my form fields and placeholders. This made the form easier to fill out, and the labels now match the input boxes.



Entry #3
Tool Used: Claude.ai
Prompt (copy-paste exactly): 

 I’m making a minimalist website and I’m not sure what colors to choose. Can you suggest a clean and modern color palette with hex codes for light mode and dark mode?

AI Output (summary or screenshot reference):
It provided a clean and modern color palette for both light mode and dark mode, using warm tones like brown, cream, and gold. It included hex codes for each color to help create a consistent and visually balanced design for the website.

How I used/modified it in my project:
I used the suggested colors as a guide for my website design. I applied the light mode colors to my main layout and sections, and prepared the dark mode colors so I can use them later.



Entry #4
Tool Used: Claude.ai
Prompt (copy-paste exactly):  

This is my simple CSS. Can you improve it to look more clean and modern using this warm color palette: #5c3d1e, #f5efe0, #c49a2e, #8b3a0f. Please explain what you changed and why. Here is my CSS code:
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5efe0;
    color: #333333;
}

/* Navigation */
nav {
    background-color: #5c3d1e;
    padding: 15px;
    text-align: center;
}

nav a {
    color: #ffffff;
    text-decoration: none;
    margin: 10px;
}

nav a:hover {
    color: #c49a2e;
}

/* Images */
img {
    width: 120px;
    display: block;
    margin: 20px auto;
}

/* Headings */
h1 {
    color: #5c3d1e;
    text-align: center;
}

section {
    padding: 40px;
    border-bottom: 1px solid #dddddd;
}

section h2 {
    color: #5c3d1e;
}

/* Education & Projects */
#education div,
#projects div {
    background-color: #ffffff;
    padding: 20px;
    margin: 15px auto;
    max-width: 700px;
    border-left: 4px solid #5c3d1e;
}

/* Skills */
#skills ul {
    list-style: none;
    padding: 0;
    text-align: center;
}

#skills li {
    background-color: #5c3d1e;
    color: #ffffff;
    padding: 8px 16px;
    margin: 5px;
    display: inline-block;
    border-radius: 20px;
}

#skills li:hover {
    background-color: #c49a2e;
    color: #2e1a0e;
}

/* Forms */
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
    margin: auto;
}

label {
    color: #5c3d1e;
    font-weight: bold;
}

input,
textarea {
    padding: 10px;
    border: 1px solid #5c3d1e;
    font-size: 14px;
}

input:focus,
textarea:focus {
    border-color: #c49a2e;
    outline: none;
}

/* Buttons */
button {
    background-color: #5c3d1e;
    color: #ffffff;
    padding: 10px;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #c49a2e;
    color: #2e1a0e;
}

AI Output (summary or screenshot reference):
The AI helped me check and improve my CSS by making it cleaner, fixing alignment, spacing, and styling for sections, navigation, skill bars, form, and buttons. It also explained how each part works and what properties to use to make the layout organized and consistent.

How I used/modified it in my project:
I updated my CSS to make the page look neater and more organized. I fixed spacing and alignment so the nav and sections are balanced. I also centered the main section and profile area. Then I added styles for the skill bars, buttons and form so they match my design and work with my JavaScript later.



Entry #5
Tool Used: Claude.ai
Prompt (copy-paste exactly): 

How do I add dark mode in CSS?

AI Output (summary or screenshot reference):
It explained how to set up dark mode by adding a dark class to the body and writing CSS that only applies when that class is active. So basically, whenever the body has the dark class applied, those styles override the light mode styles, and later JavaScript can toggle that class on and off when the user clicks a button.

How I used/modified it in my project:
I made a separate section at the bottom of my CSS and added body.dark for all the parts so that later, when I add the dark mode button with JavaScript, the colors will switch automatically.



Entry #6
Tool Used: Claude.ai
Prompt (copy-paste exactly): 

Generate Javascript code for a button that can show or hide the skill bars. When the bars appear, they should fill up smoothly to their set widths, and when hidden, they reset to 0%. The button text should also change depending on whether the bars are visible or not. Explain the code step by step.

AI Output (summary or screenshot reference):
It showed how to make a button in JavaScript that can show or hide skill bars. When the button is clicked, the skill bars either appear and animate to fill up based on their data values or disappear and reset to zero. The button text also changes automatically to let the user know if the bars are currently shown or hidden. Each part of the code was explained line by line so it’s clear what every step does.

How I used/modified it in my project:
I added a button to my skills section that shows or hides my skill bars. I used the JavaScript from the example but adjusted it so I can manually set or change each bar’s width when needed.



Entry #7
Tool Used: Claude.ai
Prompt (copy-paste exactly):

Generate JavaScript code to check a contact form. The code should make sure the Name, Email and Message fields are not empty, check that the email is in the right format, show error messages if something is wrong and show a success message when everything is correct. Explain the code step by step so I can understand it and change the field names myself later.

AI Output (summary or screenshot reference):
It gave me a code that checks if the name, email and message in my contact form are filled correctly. It also shows error messages for mistakes and a success message when everything’s okay and it explains each line so I can actually understand what’s happening.

How I used/modified it in my project:
I added the code to my contact form and changed the input IDs to match my fields. Now the form shows errors when something is wrong and a success message when all fields are filled properly.



Entry #8
Tool Used: Claude.ai
Prompt (copy-paste exactly):

Generate jQuery code for a dark mode button that switches a class on the body and changes the icon. Also, make a project filter that shows/hides projects by type and highlights the selected button. Explain the code step by step.

AI Output (summary or screenshot reference):
It gave me a code that makes a dark mode button switch a class on the body to change the site colors and update the icon. It also lets me filter projects by type so only the ones I choose appear, and it highlights the filter button I clicked. The code was explained step by step in a way that’s easy to follow.

How I used/modified it in my project:
I added this code to make the project filter work and prepared the dark mode button for later. I also adjusted the code a bit to match my section and button names.



Entry #9
Tool Used: Claude.ai
Prompt (copy-paste exactly): 

Analyze my HTML and suggest changes to support my JavaScript features such as skill bar toggle, form validation, dark mode, project filter, navigation, and greeting prompt. Highlight missing IDs, classes, or data attributes, explain why each is needed, and provide example corrected HTML snippets

AI Output (summary or screenshot reference):
The AI checked my HTML and pointed out a few things that could stop my JavaScript features from working. It showed that some elements were missing IDs, classes, or data attributes, which the scripts need to know which parts of the page to control. It also explained why each one is important and gave examples of how to fix them.

How I used/modified it in my project:
I added the missing IDs, classes and data attributes so my JS stuff actually works. I also set up the skill bars and button, fixed the contact form inputs, got the dark mode button ready, added project data attributes and made a greeting and section IDs for smooth scrolling.





