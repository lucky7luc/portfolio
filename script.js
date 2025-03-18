document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const mainContent = document.getElementById("main-content");


    // Contents for each section
    const content = {
        home: `
        <div id="home-section">
        <div class="margin navbar navbar-reverse">
            <div>
                <h2>Hello, It's Me</h2>
                <h1>Lucas Herrmann</h1>
                <h2>and I'm a <span class="text-highlight">Frontend Developer</span></h2>
                <p>Discover my passion for creative web design and modern frontend development <br>– <span class="text-highlight">welcome to my portfolio!</span></p>

                <button type="button" id="download-btn">
                <a href="cv-lucas-herrmann.pdf" download="CV-Lucas-Herrmann.pdf" style="color: black;">Download CV
                        <i class="fas fa-download" style="color: black; margin: 5px;"></i>
                    </a>
                </button>
            </div>
            <div>
            <img src="Lucas-portrait.png" alt="Lucas Herrmann, Frontend-Developer" id="portrait">
            </div>    
        </div>    
        </div>
        `,
        about: `
        <div id="about-section">
        <div class="margin navbar scrollbar">
            <div>
            <img src="Lucas-portrait.png" alt="Lucas Herrmann, Frontend-Developer" id="portrait">
            </div>
            <div>
                <p>Let me introduce myself</p>
                <h1>About <span class="text-highlight">Me</span></h1>
                <h2>A Story of Growth and Passion</h2>
                <p class="word-spacing">Hi, I'm Lucas Herrmann, and my journey has taken me from fine dining kitchens to the digital world. After working as a chef in high-end gastronomy, I had the chance to pursue my passion for snowboarding. Through sponsorships and content creation, I became more involved in the digital space, especially in online marketing, social media, and brand presentation across various platforms.<br><br>
                Curious about new challenges, I started exploring web development and AI as a hobby. I enjoy learning new technologies, experimenting with creative ideas, and tackling exciting projects. Whether it's coding, digital branding, or optimizing online presence, I’m always eager to discover and grow.<br><br>
                Beyond that, I have a strong interest in fitness and nutrition, always looking for ways to maintain a balanced and healthy lifestyle.<br><br>
                
                <span class="text-highlight">Let’s create something great together!</span></p>
            </div>
        </div>
        </div>
        `,
        skills: `
        <div id="skill-section">
            <div class="align-center">
                <h1>My <span class="text-highlight">Skills</span></h1>
                <h2>my personal assessment</h2>
            </div> 
            <div>
             <h3>HTML 5</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-html"></div></div>
             <h3>CSS 3</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-css"></div></div>
             <h3>JavaScript</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-js"></div></div>
             <h3>React</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-react"></div></div>
             <h3>AI, Bootstrap, SASS & more</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-more"></div></div>
             </div>
        </div>
        `,
        projects: `
        <div id="projects-section">
        <div class="margin projects-container">
        <h1>My <span class="text-highlight">Projects</span></h1>
        <h2>Check out my latest projects here.</h2>

           <div class="project-grid">
              <div class="project-item">
                   <iframe 
                   src="https://lucky7luc.github.io/to-do-list/" 
                   title="to-do-list"
                   loading="lazy"
                   frameborder="0"
                   style="width: 100%; height: 300px; border-radius: 10px;">
                   </iframe>
                   <a href="https://lucky7luc.github.io/to-do-list/" target="_blank" class="project-link">
                  <h3>To-Do List</h3>
                  <p>An intuitive app to organize your tasks efficiently and stay productive.</p>
                  </a>
              </div>
              <div class="project-item">
                   <iframe 
                   src="https://lucky7luc.github.io/react-weather-app/" 
                   title="Project 1"
                   loading="lazy"
                   frameborder="0"
                   style="width: 100%; height: 300px; border-radius: 10px;">
                   </iframe>
                   <a href="https://lucky7luc.github.io/react-weather-app/" target="_blank" class="project-link">
                  <h3>Weather forecast</h3>
                  <p>An interactive app to check the weather forecast for any location.</p>
                  </a>
               </div>
              <div class="project-item">
                   <iframe 
                   src="https://lucky7luc.github.io/tic-tac-toe/" 
                   title="Project 1"
                   loading="lazy"
                   frameborder="0"
                   style="width: 100%; height: 300px; border-radius: 10px;">
                   </iframe>
                   <a href="https://lucky7luc.github.io/tic-tac-toe/" target="_blank" class="project-link">
                  <h3>Tic Tac Toe</h3>
                  <p>A classic Tic-Tac-Toe game, featuring a user-friendly interface.</p>
                  </a>
              </div>
              <div class="project-item">
                   <iframe 
                   src="https://lucky7luc.github.io/js-calculator/" 
                   title="Project 1"
                   loading="lazy"
                   frameborder="0"
                   style="width: 100%; height: 300px; border-radius: 10px;">
                   </iframe>
                   <a href="https://lucky7luc.github.io/js-calculator/" target="_blank" class="project-link">
                  <h3>Calculator</h3>
                  <p>A versatile calculator app designed for quick and accurate calculations.</p>
                   </a>
              </div>
              <div class="project-item">
                   <iframe 
                   src="https://lucky7luc.github.io/js-quiz-app/" 
                   title="Project 5"
                   loading="lazy"
                   frameborder="0"
                   style="width: 100%; height: 300px; border-radius: 10px;">
                   </iframe>
                   <a href="https://lucky7luc.github.io/js-quiz-app/" target="_blank" class="project-link">
                   <h3>Quiz</h3>
                   <p>A fun and dynamic quiz app that challenges your knowledge on various topics.</p>
                   </a>
               </div>
               <div class="project-item">
                    <iframe 
                    src="https://lucky7luc.github.io/25-5-clock/" 
                    title="Project 6"
                    loading="lazy"
                    frameborder="0"
                    style="width: 100%; height: 300px; border-radius: 10px;">
                    </iframe>
                    <a href="https://lucky7luc.github.io/25-5-clock/" target="_blank" class="project-link">
                   <h3>Project 6</h3>
                   <p>A Pomodoro timer to boost productivity, helping you manage work and break intervals effectively.</p>
                   </a>
               </div>
           </div>

       </div>
       </div>
        `,
        contact: `
        <div id="contact-section">
            <div class="align-center">
                <h1>Contact <span class="text-highlight">Me!</span></h1>

                <form id="messageForm" action="https://formspree.io/f/mgvavoay" method="POST">
                <div class="flex-container">
                    <input type="text" name="first_name" class="grid-item placeholder-style" placeholder="Enter first name" required>
                    <input type="text" name="last_name" class="grid-item placeholder-style" placeholder="Enter last name" required>
                    <input type="email" name="email" class="grid-item placeholder-style" placeholder="Enter your email" required>
                    <input type="text" name="concerning" class="grid-item placeholder-style" placeholder="Enter concerning">
                    <textarea name="message" id="message-input" cols="30" rows="10" class="placeholder-style" placeholder="Enter your message here..." required></textarea>
                </div>
                <button type="submit" id="submit-message">Submit</button>
            </form>
            

                <div id="contact-info">
                    <p>Feel free to reach out via email or LinkedIn!</p>
                    <p><strong  class="text-highlight">E-Mail:</strong> <a href="mailto:lucas.herrrmann96@gmail.com">lucas.herrrmann96@gmail.com</a></p>
                    <p><strong class="text-highlight">Phone number:</strong> <a href="tel:+41787244562">+41 787 24 45 62</a></p>
                </div>
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
