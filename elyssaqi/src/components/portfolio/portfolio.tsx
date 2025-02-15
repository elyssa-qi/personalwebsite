import backgroundvideo from '../../assets/northernlights.mp4';

const PortfolioPage = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1, // Ensures the video remains in the background
        }}
      >
        <source src={backgroundvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Page Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: '#fff',
          padding: '2rem',
        }}
      >
        <div>
          <h1>Portfolio</h1>
          <p>Here are some of my best works:</p>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;