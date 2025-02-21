import { useDispatch } from "react-redux";
import { logout } from '../store/Store'
import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header class="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">My Portfolio</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><Link to="/about" class="hover:underline">About</Link></li>
          <li><Link to="/projects" class="hover:underline">Projects</Link></li>
          <li><Link to="/contact" class="hover:underline">Contact</Link></li> 
        </ul>
      </nav>
      <button onClick={handleLogout} class="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
    </header>
     <section class="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6">
        <h2 class="text-6xl font-extrabold drop-shadow-lg">Hi, I'm Chitransh Jawre</h2>
        <p class="text-2xl mt-4 font-light">Front-End Developer | React.js Enthusiast</p>
        <Link to="/projects" class="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition">View My Work</Link>
      </section>

      {/* About Section */}
      <section id="about" class="p-12 bg-white text-center shadow-lg">
        <h2 class="text-4xl font-semibold">About Me</h2>
        <p class="mt-4 text-lg text-gray-700">I am a passionate front-end developer skilled in React.js, Tailwind CSS, and modern UI/UX practices. I love crafting interactive and user-friendly web applications.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" class="p-12 bg-gray-200 text-center">
        <h2 class="text-4xl font-semibold">Projects</h2>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 class="text-2xl font-semibold">Project 1</h3>
            <p class="text-gray-600">A cutting-edge web app with seamless UI/UX.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 class="text-2xl font-semibold">Project 2</h3>
            <p class="text-gray-600">An innovative solution to enhance productivity.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 class="text-2xl font-semibold">Project 3</h3>
            <p class="text-gray-600">A modern and interactive e-commerce platform.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="p-12 bg-white text-center shadow-lg">
        <h2 class="text-4xl font-semibold">Contact Me</h2>
        <p class="text-xl mt-4 text-gray-700">Email: chitransh@example.com</p>
        <p class="text-xl text-gray-700">LinkedIn: linkedin.com/in/chitranshjawre</p>
      </section>

      {/* Footer */}
      <footer class="bg-gray-900 text-white p-6 text-center mt-auto">
        <p>&copy; 2025 Chitransh Jawre. All rights reserved.</p>
      </footer>
    </div>
  
  );
};

export default Home;
