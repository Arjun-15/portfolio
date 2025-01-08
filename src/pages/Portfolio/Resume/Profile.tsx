import React from "react";

const Profile:React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1>ARJUN SHARMA</h1>
            <p>Noida, Uttar Pradesh</p>
            <p>Phone: +91-99273 71875 | Email: <a href="mailto:as506347@gmail.com">as506347@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/arjun-sharma-69aa87175" target="_blank" rel="noopener noreferrer">linkedin.com/in/arjun-sharma-69aa87175</a></p>
            <p>GitHub: <a href="https://github.com/Arjun-15" target="_blank" rel="noopener noreferrer">github.com/Arjun-15</a></p>

            <h2>PROFILE SUMMARY</h2>
            <p>Dynamic and detail-oriented Software Engineer with over 2 years of experience in full-stack development. Adept at creating scalable web and mobile applications using .NET, Node.js, and React.js. Proven track record of improving system efficiency and ensuring long-term software stability. Passionate about leveraging technology to build impactful solutions and delivering value to businesses.</p>

            <h2>EDUCATION</h2>
            <p><strong>B.Tech in Computer Science and Information Technology</strong><br/>
            Teerthanker Mahaveer University (2018 - 2022)<br/>
            Relevant Coursework: Computer Science and Engineering</p>

            <h2>TECHNICAL SKILLS</h2>
            <ul>
                <li><strong>Programming Languages & Frameworks:</strong> C#, ASP.NET Core, Node.js, React.js, HTML5, CSS3, JavaScript, jQuery</li>
                <li><strong>Databases:</strong> MySQL, MongoDB, SQL</li>
                <li><strong>Other Tools & Technologies:</strong> RabbitMQ, Azure, AWS</li>
                <li><strong>Soft Skills:</strong> Proficient in English and Hindi, Strong problem-solving and collaboration skills</li>
            </ul>

            <h2>PROFESSIONAL EXPERIENCE</h2>
            <h3>Senior Software Engineer</h3>
            <p>Great Developer Info Tech Pvt. Ltd. | Noida, Uttar Pradesh<br/>
            Dec 2022 – Sep 2024</p>
            <ul>
                <li>Developed robust mobile and web applications leveraging the .NET framework to meet business needs.</li>
                <li>Conducted manual testing and debugging, ensuring high-quality application performance.</li>
                <li>Collaborated with cross-functional teams to identify, review, and implement functional and non-functional requirements.</li>
                <li>Delivered scalable, maintainable, and efficient code for long-term software stability.</li>
            </ul>

            <h3>Software Trainee</h3>
            <p>Great Developer Info Tech Pvt. Ltd. | Noida, Uttar Pradesh<br/>
            Jul 2022 – Dec 2022</p>
            <ul>
                <li>Contributed to the HR Management System, achieving a 10% growth in functionality using ASP.NET Core, C#, RabbitMQ, Azure, and AWS.</li>
                <li>Spearheaded system enhancements, leading to a 20% improvement in operational efficiency.</li>
                <li>Gained hands-on experience in developing applications with the ASP.NET framework.</li>
            </ul>

            <h2>PROJECTS</h2>
            <h3>Sorting Visualizer (ReactJs)</h3>
            <ul>
                <li>Designed and developed a visual tool to demonstrate sorting algorithms in real-time using JavaScript, HTML5, and CSS3.</li>
                <li>Created a user-friendly interface for dynamic and interactive data visualization, leveraging JavaScript and CSS animations to provide a seamless experience for analyzing algorithm performance.</li>
                <li>Enabled users to visualize the sorting process and analyze algorithm performance effectively.</li>
            </ul>

            <h3>ChatterUp</h3>
            <ul>
                <li>Built a real-time chat application with user authentication and messaging features.</li>
                <li>Implemented message persistence using MongoDB to ensure reliable storage and retrieval of conversations.</li>
                <li>Added end-to-end encryption to secure messages and protect user data.</li>
                <li>Optimized the application for scalability, enabling it to handle concurrent users seamlessly using WebSocket technology.</li>
                <li>Utilized Node.js and WebSocket for instant communication, ensuring seamless user experience.</li>
            </ul>

            <h3>Hospital Management System (HMS) (C#, ReactJS)</h3>
            <ul>
                <li>Developed a comprehensive system to manage hospital operations efficiently using C# for backend processing and ReactJS for a dynamic user interface.</li>
                <li>Integrated functionalities for patient management, appointment scheduling, and reporting while ensuring data accuracy and integrity.</li>
                <li>Addressed challenges such as handling large data sets by implementing optimized database queries and ensured data security compliance with industry standards.</li>
                <li>Integrated functionalities for patient management, appointment scheduling, and reporting.</li>
            </ul>

            <h2>INTERNSHIP</h2>
            <p><strong>Full-Stack Development Bootcamp</strong><br/>
            Coding Ninjas | 2024 - Present</p>
            <ul>
                <li>Completed an intensive bootcamp focused on full-stack development.</li>
                <li>Gained expertise in HTML, CSS, JavaScript, React.js, Node.js, and database management.</li>
            </ul>

            <h2>ACHIEVEMENTS</h2>
            <ul>
                <li>Improved HR Management System efficiency by 20%, driving better organizational performance.</li>
                <li>Successfully delivered multiple projects with a focus on scalability, usability, and maintainability.</li>
            </ul>

            <h2>ADDITIONAL INFORMATION</h2>
            <p>Availability: Immediate</p>
        </div>
    );
};

export default Profile;
