import React from 'react';

const RedlistStatus = () => {
  const statuses = [
    {status: "Extinct (EX)", icon: "EX.png"},
    {status: "Extinct in the Wild (EW)", icon: "EW.png"},
    {status: "Critically Endangered (CR)", icon: "CR.png"},
    {status: "Endangered (EN)", icon: "EN.png"},
    {status: "Vulnerable (VU)", icon: "VU.png"},
    {status: "Near Threatened (NT)", icon: "NT.png"},
    {status: "Least Concern (LC)", icon: "LC.png"},
    {status: "Data Deficient (DD)", icon: "DD.png"},
    {status: "Not Evaluated (NE)", icon: "NE.png"},
  ];

  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  return (
    <div>
      <span className="Title">{randomStatus.status}</span>
      <img src={`http://datazone.birdlife.org/images/redlisticons_v2/${randomStatus.icon}`} alt={randomStatus.status} />
    </div>
  );
};

export default RedlistStatus;