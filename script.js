document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const mainContent = document.getElementById("main-content");

    // Contents for each section
    const content = {
        home: `
        <div class="navbar">
        <div>
            <h2>Hello, It's Me</h2>
            <h1>Lucas Herrmann</h1>
            <h2>and I'm a <span class="text-highlight">Frontend Developer</span></h2>
            <p>Discover my passion for creative web design and modern frontend development – <span class="text-highlight">welcome to my portfolio!</span></p>

            <button type="button" id="download-btn">
            <a href="download-link.zip" download style="color: black;">Download CV
                <i class="fas fa-download" style="color: black; margin: 5px;"></i>
            </a>
            </button>
        </div>
        <div>
            <img src="" alt="Profile of Lucas">
        </div>    
    </div>    
        `,
        about: `
            <div class="navbar">
                <div>
                    <h1>About Me</h1>
                    <p>I am Lucas Herrmann, a passionate frontend developer.</p>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        `,
        skills: `
            <div class="navbar">
                <div>
                    <h1>My Skills</h1>
                    <p>JavaScript, React, CSS, and more!</p>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        `,
        portfolio: `
            <div class="navbar">
                <div>
                    <h1>My Portfolio</h1>
                    <p>Check out my latest projects here.</p>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        `,
        contact: `
            <div class="navbar">
                <div>
                    <h1>Contact Me</h1>
                    <p>Feel free to reach out via email or LinkedIn!</p>
                </div>
                    <div>
                        <p></p>
                    </div>
            </div>
        `,
    };

    // Event Listener for Navigation
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            links.forEach((lnk) => lnk.classList.remove("active"));

            link.classList.add("active");

            const section = link.getAttribute("href").substring(1);

            mainContent.innerHTML = content[section];
        });
    });
});
