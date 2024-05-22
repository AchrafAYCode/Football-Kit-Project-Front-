import React from "react";
import Image from "next/image";

const MainGridHome = () => {
  return (
    <div className="container mt-5">
      <div className="row gy-4">
        <div className="col-md-6">
          <div className="p-3 border bg-light text-center">
            <Image
              src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714771984/ijqeragraizyzzqury3y.png"
              width={900}
              height={400}
              alt="Picture"
              className="img-fluid rounded"
            />
            <div className="mt-3">
              <p className="text-muted">Maillot Club Sportif Sfaxien saison 2023/2024</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border bg-light text-center">
            <Image
              src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714772289/nwqpivu97yhffgxba8ag.png"
              width={900}
              height={400}
              alt="Picture"
              className="img-fluid rounded"
            />
            <div className="mt-3">
              <p className="text-muted">Maillot FC Barcelone saison 2023/2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGridHome;
