import React from "react";

export const metadata = {
  title: "Patents - I Love IIIT Naya Raipur",
  description:
    "Explore the innovative patents filed by IIIT Naya Raipur's talented students and faculty. Learn about their inventions and contributions to technology.",
  keywords: "IIIT Naya Raipur patents, Innovative patents, Student inventions",
};

// Patent data
const patents = [
  {
    title: "Smart Electricity Metering System and Method Thereof",
    inventors:
      "Nenavath Srinivas Naik, Yathin Prakash Kethepalli, Rony Joseph, Nandita Yadav",
    applicationNo: "202221045988",
    filingDate: "12-08-2022",
    publicationDate: "--",
    patentNo: "Awaited",
    status: "Awarded",
  },
  {
    title: "System and Method to Segregate the Fruits by Machine Learning",
    inventors: "Mallikharjuna Rao K, Yathin Prakash Kethepalli, Chahat Mittal",
    applicationNo: "202221052788",
    filingDate: "15 Sept 2022",
    publicationDate: "--",
    patentNo: "Awaited",
    status: "Awarded",
  },
  {
    title:
      "System and Method for Determining Body Temperature Using Smartphone Coupled With USB Thermal Camera",
    inventors:
      "Shrivishal Tripathi; Divyansh Kushwaha; Deepanshu Pratik; Shivanshu Kumar Prajapati; Manoj Kumar Majumder; Vivek Tiwari; Anurag Singh; Sresha Yadav, Muneendra Ojha",
    applicationNo: "202221041826",
    filingDate: "23/7/2022",
    publicationDate: "--",
    patentNo: "Awaited",
    status: "Awarded",
  },
  // Add additional patents as needed
];

const Patents = () => {
  return (
    <main className="px-6 py-10 bg-gray-100">
      <section className="max-w-5xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-900">
          Patents
        </h1>
        <p className="mb-12 text-lg text-center text-gray-700">
          Discover the groundbreaking inventions and contributions to technology
          from the innovative minds at IIIT Naya Raipur.
        </p>

        {/* Patent List */}
        <div className="space-y-8">
          {patents.map((patent, index) => (
            <div
              key={index}
              className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {patent.title}
              </h2>
              <p className="mt-2 text-gray-700">
                <strong>Inventors:</strong> {patent.inventors}
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Application No.:</strong> {patent.applicationNo}
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Filing Date:</strong> {patent.filingDate}
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Publication Date:</strong> {patent.publicationDate}
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Patent No.:</strong> {patent.patentNo}
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Status:</strong>{" "}
                <span
                  className={`${
                    patent.status === "Awarded"
                      ? "text-green-600"
                      : "text-yellow-600"
                  } font-semibold`}
                >
                  {patent.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Patents;
