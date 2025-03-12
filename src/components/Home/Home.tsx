import "./Home.css";

interface Props {
  social: string[];
  // onSelectItem: (item: string) => void;
}

function Home({ social }: Props) {
  const handleDownload = () => {
    const pdfUrl = "./src/assets/Resume/Harold_Dumlao_Resume_2025.pdf"; // Adjust the path if needed
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Harold_Dumlao_Resume.pdf"); // Ensures it downloads instead of opening
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="home-container"></div>
      <div className="home-content">
        <div className="description-group">
          <img className="profile-pic" src="./src/assets/Harold_PFP.svg"></img>
          <p className="home-text">
            <h1>I'm a Web Developer</h1>
            I'm a Software Engineer at Accenture Philippines. I have three and a
            half years of experience in web development. I have worked with
            various technologies such as Angular, React and Node.js. If you want
            to know more about me, you can download my CV on the button below or
            look in to my social media accounts. {" ;)"}
            <button className="download-cv" onClick={handleDownload}>
              Download CV
            </button>
          </p>
        </div>
        <div className="button-social-group">
          {social.map((item) => {
            switch (item) {
              case "Linkedin":
                return (
                  <button className="button-social-items">
                    <a
                      href="https://www.linkedin.com/in/harold-dumlao-22327b1b1/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </button>
                );
              // Add more cases for other social media links if needed
              case "GitHub":
                return (
                  <button className="button-social-items">
                    <a href="https://github.com/hcanoza" target="_blank">
                      GitHub
                    </a>
                  </button>
                );
              case "Instagram":
                return (
                  <button className="button-social-items">
                    <a
                      href="https://www.instagram.com/roldcanoza/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </button>
                );
              case "Facebook":
                return (
                  <button className="button-social-items">
                    <a
                      href="https://www.facebook.com/hcanoza.1"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </button>
                );
            }
          })}
        </div>
      </div>
      <div className="home-content-2"></div>
    </>
  );
}

export default Home;
