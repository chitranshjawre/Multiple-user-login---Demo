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
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center flex-wrap">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav className="w-full md:w-auto mt-2 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-4 text-center">
            <li><Link to="/about" className="hover:underline block p-2">About</Link></li>
            <li><Link to="/projects" className="hover:underline block p-2">Projects</Link></li>
            <li><Link to="/contact" className="hover:underline block p-2">Contact</Link></li>
          </ul>
        </nav>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 mt-2 md:mt-0">Logout</button>
      </header>
      
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6">
        <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">Hi, I'm Chitransh Jawre</h2>
        <p className="text-lg md:text-2xl mt-4 font-light">Front-End Developer | React.js Enthusiast</p>
        <Link to="/projects" className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition">View My Work</Link>
      </section>

      <section id="about" className="p-6 md:p-12 bg-white text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-base md:text-lg text-gray-700">I am a passionate front-end developer skilled in React.js, Tailwind CSS, and modern UI/UX practices.</p>
      </section>

      <section id="projects" className="p-6 md:p-12 bg-gray-200 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl md:text-2xl font-semibold">Project {project}</h3>
              <p className="text-gray-600">Description of project {project}.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="p-6 md:p-12 bg-white text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold">Contact Me</h2>
        <p className="text-base md:text-xl mt-4 text-gray-700">Email: chitransh@example.com</p>
        <p className="text-base md:text-xl text-gray-700">LinkedIn: linkedin.com/in/chitranshjawre</p>
      </section>

      <footer className="bg-gray-900 text-white p-6 text-center mt-auto">
        <p>&copy; 2025 Chitransh Jawre. All rights reserved.</p>
      </footer>
    </div>
  
  );
};

export default Home;
