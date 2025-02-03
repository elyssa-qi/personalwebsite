import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import './homepage.css'

const Homepage: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ShaderGradient
          control="query" // Use the URL to control the gradient
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23f0b0c9&color2=%23eb7143&color3=%23f3a851&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
        <h1>Elyssa Qi</h1>
        <p><strong>a Systems Design Engineering Student<br /> at the University of Waterloo</strong></p>
      </div>
    </div>
  );
};

export default Homepage;