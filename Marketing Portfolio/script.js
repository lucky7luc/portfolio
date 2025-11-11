document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const mainContent = document.getElementById("main-content");


    // Contents for each section
    const content = {
        home: `
        <div class="navbar navbar-reverse">
            <div>
                <h2>Hello, It's Me</h2>
                <h1>Lucas Herrmann</h1>
                <h2>and I'm a <span class="text-highlight">Digital Marketer</span></h2>
                <p>Focused on engagement, conversion, and measurable results<br>– <span class="text-highlight">welcome to my portfolio!</span></p>

                <button type="button" id="download-btn">
                <a href="cv_lucas_herrmann.pdf" download="CV_Lucas_Herrmann.pdf" style="color: black;">Download CV
                        <i class="fas fa-download" style="color: black; margin: 5px;"></i>
                    </a>
                </button>
            </div>
            <div>
            <img src="Lucas_portrait.png" alt="Lucas Herrmann, Digital Marketer" id="portrait">
            </div>    
        </div>    
        `,
        about: `
        <div class="navbar scrollbar">
            <div>
            <img src="Lucas_portrait.png" alt="Lucas Herrmann, Digital Marketer" id="portrait">
            </div>
            <div>
                <p>Let me introduce myself</p>
                <h1>About <span class="text-highlight">Me</span></h1>
                <h2>A Story of Growth and Digital Curiosity</h2>
                <p class="word-spacing">Hi, I'm Lucas Herrmann, and my journey has taken me from fine dining kitchens to the digital world. After several years working as a chef in high-end gastronomy, I had the opportunity to pursue my passion for snowboarding. Through sponsorships and content creation, I gained hands-on experience with online marketing, social media management, and brand presentation across multiple platforms.</p>
                <p>Driven by curiosity, I completed the <b class="text-highlight">Google Career Certificate in Digital Marketing & E-commerce</b>, where I learned key skills in social media marketing, SEO, SEM, email marketing, and analytics. To complement this, I self-taught programming and built several small projects - including this website - to better understand websites, user experience, and how digital tools work behind the scenes.</p>
                <p>Today, my goal is to apply and deepen this mix of creative, technical, and analytical skills in an entry-level digital marketing role where I can help businesses grow their online presence and connect with their audiences.</p>
                <p>Outside of work, I’m passionate about fitness, nutrition, and maintaining a healthy, balanced lifestyle.</p>
                <br>
                <br>
                <span class="text-highlight">Let’s create something great together!</span></p>
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
             <h3>Social Media Management & Content Creation</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-html"></div></div>
             <h3>Email Marketing (Campaigns & Automation)</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-css"></div></div>
             <h3>Google Analytics & Data-Driven Decision Making</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-js"></div></div>
             <h3>E-commerce Strategies (Product Listings, Conversion Optimization)</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-react"></div></div>
             <h3>SEO, SEM & Google Ads (Campaign Setup & Optimization)</h3>
             <div class="skill-skala"><div class="skill-line" id="skill-more"></div></div>
             </div>
        </div>
        `,
        projects: `
        <div class="projects-container">
          <h1>My <span class="text-highlight">Digital Marketing Projects</span></h1>
          <h2>Explore real-life marketing scenarios from my Google certification.</h2>
        
          <div class="project-category">
            <h3>📱 Social Media Marketing</h3>
            <p>Campaign strategies and content plans for boosting engagement across platforms like Instagram, Facebook, and TikTok.</p>
            <div class="project-grid">
              <div class="project-item">
                <a href="pdfs/social_media/social_media_calender.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/social_media_calender_image.png" alt="Social Media Calender" class="project-thumb" />
                  <h4>Social Media Calender Plan</h4>
                  <p>Created a Social Media Calender</p>
                </a>
              </div>
              <div class="project-item">
                <a href="pdfs/social_media/customer_persona.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/customer_persona_image.png" alt="customer persona image" class="project-thumb" />
                  <h4>Customer Persona</h4>
                  <p>Developed two customer Personas</p>
                </a>
              </div>
              <div class="project-item">
                <a href="pdfs/social_media/AB_testing.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/AB_testing_image.png" alt="A/B testing image" class="project-thumb" />
                  <h4>A/B Testing</h4>
                  <p>Two version of a post were tested</p>
                </a>
              </div>
              <div class="project-item">
                <a href="pdfs/social_media/social_listening_engagement.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/listening_engagement_image.png" alt="A/B testing image" class="project-thumb" />
                  <h4>Social listening & engagement</h4>
                  <p>Actions were taken to customer mentions</p>
                </a>
              </div>
            </div>
          </div>
        
          <div class="project-category">
            <h3>💌 Email Marketing</h3>
            <p>Real-life case studies covering campaign automation, segmentation, and smart goal-driven email strategies.</p>
            <div class="project-grid">
              <div class="project-item">
                <a href="pdfs/email/smart_goal.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/smart_goal_image.png" alt="Email Campaign" class="project-thumb" />
                  <h4>SMART Goal</h4>
                  <p>SMART goal formulation for existing objectives</p>
                </a>
              </div>
              <div class="project-item">
                <a href="pdfs/email/email_improvement.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/email_improvement_image.png" alt="Newsletter Design" class="project-thumb" />
                  <h4>Subject line, message body & CTA</h4>
                  <p>Revisions and additions to missing email elements</p>
                </a>
              </div>
              <div class="project-item">
              <a href="pdfs/email/campaign_performance.pdf" target="_blank" class="project-link">
                <img src="thumbnails/campaign_performance_image.png" alt="Newsletter Design" class="project-thumb" />
                <h4>Campaign performance & presentation</h4>
                <p>Presentation provided with an additional developed summary, recommendations, conclusion & next steps</p>
              </a>
            </div>
            <div class="project-item">
            <a href="pdfs/email/segmentation.pdf" target="_blank" class="project-link">
              <img src="thumbnails/segmentation_image.png" alt="Newsletter Design" class="project-thumb" />
              <h4>Email list & segmentation</h4>
              <p>Two segmentation approaches were created: one focused on interests and priorities, and the other on demographic factors such as age and location</p>
            </a>
          </div>
          <div class="project-item">
            <a href="pdfs/email/retention_apology.pdf" target="_blank" class="project-link">
              <img src="thumbnails/retention_apology_image.png" alt="Newsletter Design" class="project-thumb" />
              <h4>Retention & Apology email</h4>
              <p>Two different emails were created for separate companies and scenarios: one retention email and one apology email</p>
            </a>
          </div>
          <div class="project-item">
            <a href="pdfs/email/welcome.pdf" target="_blank" class="project-link">
              <img src="thumbnails/welcome_email_image.png" alt="Newsletter Design" class="project-thumb" />
              <h4>Welcome email</h4>
              <p>A welcome email was designed using Mailchimp</p>
            </a>
          </div>
            </div>
          </div>
        
          <div class="project-category">
            <h3>📊 Analytics & Insights</h3>
            <p>Marketing performance analysis using Google Analytics and data-driven insights.</p>
            <div class="project-grid">
              <div class="project-item">
                <a href="pdfs/analytics/stakeholders.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/stakeholder_image.png" alt="Analytics Report" class="project-thumb" />
                  <h4>Identifying Stakeholders & communication</h4>
                  <p>Examples of communication approaches for different stakeholders</p>
                </a>
              </div>
              <div class="project-item">
                <a href="pdfs/analytics/google_ads.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/google_ads_image.png" alt="Analytics Report" class="project-thumb" />
                  <h4>Recommendation handling & A/B Testing plan</h4>
                  <p>Google Ads Recommendations were assessed & a A/B testing plan was developed</p>
                </a>
              </div>
              <div class="project-item">
                <a href="pdfs/analytics/roi_calc.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/roi_calc_image.png" alt="Analytics Report" class="project-thumb" />
                  <h4>ROI calculation for campaign debriefing</h4>
                  <p>Analyzed multichannel data and calculated metrics to support future budget decisions.</p>
                </a>
              </div>
            </div>
          </div>
        
          <div class="project-category">
            <h3>🔍 SEO & SEM</h3>
            <p>Projects focused on improving visibility through organic search and paid campaigns.</p>
            <div class="project-grid">
              <div class="project-item">
                <a href="pdfs/SEO_SEM/title_meta.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/title_meta_image.png" alt="SEO Strategy" class="project-thumb" />
                  <h4>SEO Optimization Strategy</h4>
                  <p>Improved titles & Meta tags. Designed Headlines, Descriptions and Extensions. Gave Feedback to a Business.</p>
                </a>
              </div>
              <div class="project-item">
                <a href="pdfs/SEO_SEM/headlines.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/headlines_image.png" alt="SEO Strategy" class="project-thumb" />
                  <h4>SEO Optimization Strategy</h4>
                  <p>Improved titles & Meta tags. Designed Headlines, Descriptions and Extensions. Gave Feedback to a Business.</p>
                </a>
              </div>
              <div class="project-item">
                <a href="pdfs/SEO_SEM/feedback.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/feedback_image.png" alt="SEO Strategy" class="project-thumb" />
                  <h4>SEO Optimization Strategy</h4>
                  <p>Improved titles & Meta tags. Designed Headlines, Descriptions and Extensions. Gave Feedback to a Business.</p>
                </a>
              </div>
            </div>
          </div>
        
          <div class="project-category">
            <h3>🛒 E-commerce</h3>
            <p>Marketing projects focused on conversion optimization and customer journey improvements.</p>
            <div class="project-grid">
              <div class="project-item">
                <a href="pdfs/ecommerce/competitive_analysis.pdf" target="_blank" class="project-link">
                  <img src="thumbnails/competitive_analysis_image.png" alt="E-commerce Growth" class="project-thumb" />
                  <h4>Competitive Analysis</h4>
                  <p>3 Competitive websites has been analyst.</p>
                </a>
              </div>
              <div class="project-item">
              <a href="pdfs/ecommerce/brand_values.pdf" target="_blank" class="project-link">
                <img src="thumbnails/brand_values_image.png" alt="E-commerce Growth" class="project-thumb" />
                <h4>Brand Values</h4>
                <p>A Brand Values Worksheet was created.</p>
              </a>
            </div>
              <div class="project-item">
              <a href="pdfs/ecommerce/checkout_evaluation.pdf" target="_blank" class="project-link">
                <img src="thumbnails/checkout_evaluation_image.png" alt="E-commerce Growth" class="project-thumb" />
                <h4>Competitive Analysis</h4>
                <p>3 Competitive websites has been analyst.</p>
              </a>
            </div>
            <div class="project-item">
              <a href="pdfs/ecommerce/satisfaction_survey.pdf" target="_blank" class="project-link">
                <img src="thumbnails/satisfaction_survey_image.png" alt="E-commerce Growth" class="project-thumb" />
                <h4>Satisfaction Survey</h4>
                <p>A Customer Satisfaction Survey was created.</p>
              </a>
            </div>
            <div class="project-item">
            <a href="pdfs/ecommerce/landing_page_ideas.pdf" target="_blank" class="project-link">
              <img src="thumbnails/landing_page_ideas_image.png" alt="E-commerce Growth" class="project-thumb" />
              <h4>Landing Page Ideas</h4>
              <p>Review of heat maps and suggested optimizations.</p>
            </a>
                </div>
            </div>
          </div>
        </div>
        `,
        
        contact: `
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