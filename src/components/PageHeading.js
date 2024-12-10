import React from "react";

function PageHeading({ name }) {
  return (
    <div
      className="bg-cover bg-center py-16  "
      style={{ backgroundImage: "url('/maincourse-bg.png')" }}
    >
      <h1 className="text-start text-white text-4xl font-bold ml-24 ">
        {name}
      </h1>
    </div>
  );
}

export default PageHeading;
