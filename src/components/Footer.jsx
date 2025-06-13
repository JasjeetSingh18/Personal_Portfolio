import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto flex items-center">
        {/* Left (empty spacer) */}
        <div className="w-1/3"></div>

        {/* Centered icons */}
        <div className="w-1/3 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/jasjeet-singh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Linkdin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/JasjeetSingh18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
        </div>

        {/* Right-aligned icon */}
        <div className="w-1/3 flex justify-end">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/GitRepo.png" alt="RepoLink" className="w-[100px] h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
