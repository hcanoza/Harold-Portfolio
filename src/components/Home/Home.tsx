import "./Home.css";

function Home() {
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
        <img className="profile-pic" src="./src/assets/Harold_PFP.svg"></img>
        <p className="home-text">
          <h1>I'm a Web Developer</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <button className="download-cv" onClick={handleDownload}>
            Download CV
          </button>
        </p>
      </div>
      <div className="home-content-2"></div>
    </>
  );
}

export default Home;
