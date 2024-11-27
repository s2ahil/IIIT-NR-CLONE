import React from 'react';

// Patent data
const patents = [
  {
    title: "Smart Electricity Metering System and Method Thereof",
    inventors: "Nenavath Srinivas Naik, Yathin Prakash Kethepalli, Rony Joseph, Nandita Yadav",
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
    title: "System and Method for Determining Body Temperature Using Smartphone Coupled With USB Thermal Camera",
    inventors: "Shrivishal Tripathi; Divyansh Kushwaha; Deepanshu Pratik; Shivanshu Kumar Prajapati; Manoj Kumar Majumder; Vivek Tiwari; Anurag Singh; Sresha Yadav, Muneendra Ojha",
    applicationNo: "202221041826",
    filingDate: "23/7/2022",
    publicationDate: "--",
    patentNo: "Awaited",
    status: "Awaiting Examination",
  },
  // Add the rest of the patents here
];

const Patents = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patents</h1>
      {patents.map((patent, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <h2 className="text-lg font-semibold">{patent.title}</h2>
          <p><strong>Inventors:</strong> {patent.inventors}</p>
          <p><strong>Application No.:</strong> {patent.applicationNo}</p>
          <p><strong>Filing Date:</strong> {patent.filingDate}</p>
          <p><strong>Publication Date:</strong> {patent.publicationDate}</p>
          <p><strong>Patent No.:</strong> {patent.patentNo}</p>
          <p><strong>Status:</strong> {patent.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Patents;
