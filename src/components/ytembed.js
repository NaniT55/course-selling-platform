import React from "react";

function Embed() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 py-12 flex justify-center">
      <div className="max-w-4xl w-full px-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
        
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/6eZ6QYcMc2c?si=KFYjtPm7sIhnCLgc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            controls='true'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Embed;
