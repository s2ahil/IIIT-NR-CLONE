import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Address:</h2>
            <p className="text-gray-600">
              IIIT–Naya Raipur<br />
              Plot No. 7, Sector 24, Near Purkhoti Muktangan,<br />
              Atal Nagar – 493661 Chhattisgarh
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Phone:</h2>
            <p className="text-gray-600">Tel: (0771) 2474182</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Emails:</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>General Information:</strong> iiitnr@iiitnr.ac.in</li>
              <li><strong>B.Tech Admissions:</strong> btech_admissions@iiitnr.ac.in</li>
              <li><strong>Convocation:</strong> convocation@iiitnr.edu.in</li>
              <li><strong>Academic Affairs:</strong> registrar@iiitnr.edu.in</li>
              <li><strong>HR:</strong> recruitment@iiitnr.ac.in</li>
              <li><strong>Placement:</strong> placement@iiitnr.ac.in</li>
              <li><strong>Ph.D. Admissions:</strong> phd_admissions@iiitnr.ac.in</li>
              <li><strong>M.Tech Admissions:</strong> mtech_admissions@iiitnr.ac.in</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Routes:</h2>
            <ul className="text-gray-600">
              <li>
                <a
                  href="https://goo.gl/maps/99ScvLnW9aT2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Route from Raipur Railway Station to IIIT-NR
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/B1sLfu9iRDk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Route from Raipur Airport to IIIT-NR
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Useful Services:</h2>
            <p className="text-gray-600">OLA Cabs: (0771) 3355335</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
