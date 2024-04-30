// Javascript File
// By Ruben Lopez

// functionality for the javascript script
const terms = document.querySelectorAll('.term');
const popup = document.getElementById('popup');
const popupTerm = document.getElementById('popup-term');
const popupDefinition = document.getElementById('popup-definition');
const closeBtn = document.querySelector('.close');

// this information pulls the definitions of the terms which are then appear in the popup
const definitions = {
    "mobile apps developer": "A mobile app developer is a software engineer who specializes in creating applications for mobile devices.",
    "dev ops engineer": "A DevOps engineer is responsible for bridging the gap between development and operations teams by overseeing the code releases and ensuring smooth deployment and operation of software.",
    "software developer": "A software developer is a programmer who designs, develops, and tests software applications.",
    "cybersecurity expert": "A cybersecurity expert is a professional who specializes in protecting computer systems, networks, and data from security breaches, cyber attacks, and unauthorized access.",
    "web programmer": "A web programmer is a developer who specializes in creating applications and functionalities for the web, often using programming languages such as HTML, CSS, and JavaScript.",
    "database administrator": "A database administrator (DBA) is responsible for the performance, integrity, and security of a database. They manage and maintain databases to ensure they operate efficiently and effectively.",
    "consultant": "A consultant is a professional who provides expert advice and guidance to individuals or organizations in a specific area, such as management, finance, or technology.",
    "web developer": "A web developer is a programmer who specializes in building websites and web applications. They work with various technologies such as HTML, CSS, JavaScript, and server-side languages like PHP or Node.js.",
    "security analyst": "A security analyst is responsible for analyzing and assessing the security measures and vulnerabilities of an organization's IT infrastructure. They identify potential risks and develop strategies to protect against security threats.",
    "data analyst": "A data analyst is responsible for interpreting data, analyzing results, and providing insights to help businesses make informed decisions. They use statistical techniques and data visualization tools to analyze large datasets.",
    "instructor": "An instructor is a teacher or educator who provides instruction and guidance to students in a particular subject or skill.",
    "technical writer": "A technical writer is responsible for creating documentation and instructional materials, such as manuals, guides, and tutorials, to help users understand and use software, products, or services.",
    "UX/UI designer": "A UX/UI designer is responsible for designing the user experience (UX) and user interface (UI) of digital products, such as websites and mobile applications, to ensure they are intuitive, user-friendly, and visually appealing.",
    "coder": "A coder is a programmer who writes, tests, and maintains the source code of computer programs.",
    "test engineer": "A test engineer is responsible for designing and executing tests to identify software defects and ensure the quality and reliability of a product.",
    "hardware engineer": "A hardware engineer is responsible for designing, developing, and testing computer hardware components, such as processors, memory modules, and circuit boards.",
    "network administrator": "A network administrator is responsible for managing and maintaining an organization's computer networks, including local area networks (LANs), wide area networks (WANs), and intranets.",
    "web architect": "A web architect is responsible for designing and planning the architecture of web applications, including the overall structure, layout, and functionality.",
    "industry analyst": "An industry analyst is a professional who studies and analyzes trends, market conditions, and industry developments to provide insights and recommendations to businesses and stakeholders.",
    "chief information officer": "A chief information officer (CIO) is a senior executive responsible for overseeing an organization's information technology (IT) strategy and operations. They ensure that IT systems and technologies support the organization's goals and objectives.",
    "games developer": "A games developer is a programmer who specializes in creating video games for various platforms, such as consoles, computers, and mobile devices.",
    "full stack developer": "A full stack developer is a programmer who has expertise in both front-end and back-end development, allowing them to work on all aspects of a web application, from the user interface to the server-side logic.",
    "data research scientist": "A data research scientist is a professional who uses scientific methods and techniques to analyze and interpret data, conduct research, and develop insights and solutions to complex problems.",
};

// function that pulls the definition per the term selected (per click)
terms.forEach(term => {
    term.addEventListener('click', () => {
        const termText = term.textContent;
        popupTerm.textContent = termText;
        popupDefinition.textContent = definitions[termText];
        popup.style.display = 'block';
    });
});

// function for closing the popup
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
