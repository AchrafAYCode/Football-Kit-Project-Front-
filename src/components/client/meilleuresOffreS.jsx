import React from "react";
import Image from "next/image";

const MeilleuresOfferS = () => {
  return (
    <div className="container mt-5">
      <div className="row gy-4">
        <div className="col-md-6">
          <div className="p-3 border bg-light text-center">
            <Image
              src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714774639/sn45kyoyqpey45psl29r.png"
              width={900}
              height={400}
              alt="Picture"
              className="img-fluid rounded"
            />
            <div className="mt-3">
              <p className="text-muted">Maillot Inter Milan saison 2022/2023</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border bg-light text-center">
            <Image
              src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714774638/o8ofsjr8wfzrchkixyhm.png"
              width={900}
              height={400}
              alt="Picture"
              className="img-fluid rounded"
            />
            <div className="mt-3">
              <p className="text-muted">Maillot Olympique De Marseille saison 2022/2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeilleuresOfferS;
