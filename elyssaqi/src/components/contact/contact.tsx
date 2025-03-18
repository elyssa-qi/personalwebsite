import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <ShaderGradientCanvas className="shader-canvas">
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23f0b0c9&color2=%23eb7143&color3=%23f3a851&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className="contact-content">
        <h1>Contact</h1>
        <p>Feel free to reach out to me at <a href="mailto:your@email.com">your@email.com</a>.</p>
      </div>
    </div>
  );
};

export default Contact; // Default export