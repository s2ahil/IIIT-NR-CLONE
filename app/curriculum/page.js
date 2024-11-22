import React from "react";

const Curriculum = () => {
  return (
    <div className="p-6">
    

     

      <main>
        <h2 className="text-2xl font-semibold">B.Tech Curriculum</h2>
        <p className="mt-4">
          DSPM-IIITNR currently runs three undergraduate programs: 
          <b> B.Tech. in Computer Science & Engineering (CSE)</b>, 
          <b> B.Tech. in Electronics & Communication Engineering (ECE)</b>, and 
          <b> B.Tech. in Data Science and Artificial Intelligence (DSAI)</b>. 
          These credit-based programs are designed to foster core skills alongside innovation and entrepreneurship among students.
          The dynamic structure of the curriculum aligns with the changing needs of industry and academia. IIIT Naya Raipur follows the Fractal Curriculum.
        </p>

        <section className="mt-8">
          <h3 className="text-xl font-semibold">Course Structure</h3>
          <ul className="list-disc ml-8 mt-4">
            <li>
              <b>B.Tech DSAI</b>:
              <ul className="list-disc ml-8">
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Academic year 2019-2023
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Academic year 2022-2026
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <b>B.Tech CSE</b>:
              <ul className="list-disc ml-8">
                {["2015-2019", "2016-2020", "2017-2021", "2018-2022", "2019-2023", "2022-2026"].map(
                  (year) => (
                    <li key={year}>
                      <a href="#" className="text-blue-500 hover:underline">
                        Academic year {year}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </li>
            <li>
              <b>B.Tech ECE</b>:
              <ul className="list-disc ml-8">
                {["2015-2019", "2016-2020", "2017-2021", "2018-2022", "2019-2023", "2022-2026"].map(
                  (year) => (
                    <li key={year}>
                      <a href="#" className="text-blue-500 hover:underline">
                        Academic year {year}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-4">
            IIIT–Naya Raipur, Plot No. 7, Sector 24, Near Purkhoti Muktangan, Atal Nagar – 493661 Chhattisgarh
          </p>
          <p>Tel: (0771) 2474182</p>
          <p>
            General Information:{" "}
            <a href="mailto:iiitnr@iiitnr.ac.in" className="text-blue-500 hover:underline">
              iiitnr@iiitnr.ac.in
            </a>
          </p>
          <p>
            Admissions:{" "}
            <a href="mailto:btech_admissions@iiitnr.ac.in" className="text-blue-500 hover:underline">
              btech_admissions@iiitnr.ac.in
            </a>
          </p>
        </section>
      </main>

      <footer className="mt-12 border-t pt-4 text-center">
        <p>
          Page last updated on: 16/02/22 | Helpline No: 0771-2474182 (Available on working days between 9:30 am - 6:00 pm)
        </p>
      </footer>
    </div>
  );
};

export default Curriculum;
