export interface Field {
  id: string;
  label: string;
  department: string;
}

export const fieldsData: Field[] = [
  // Computer Science & Engineering
  { id: "cs-ai", label: "AI & Machine Learning", department: "Computer Science" },
  { id: "cs-systems", label: "Systems & Computing", department: "Computer Science" },
  { id: "cs-security", label: "Security & Cryptography", department: "Computer Science" },
  
  // Electronics & Communication Engineering
  { id: "ece-wireless", label: "5G & Wireless Communication", department: "ECE" },
  { id: "ece-vlsi", label: "VLSI & Embedded Systems", department: "ECE" },
  { id: "ece-optical", label: "Optical & Photonics", department: "ECE" },
  { id: "ece-signal", label: "Signal & Image Processing", department: "ECE" },
  
  // Chemical Engineering
  { id: "chem-separation", label: "Separation & Membrane Processes", department: "Chemical" },
  { id: "chem-green", label: "Green Chemistry & Catalysis", department: "Chemical" },
  { id: "chem-energy", label: "Energy & Sustainability", department: "Chemical" },
  { id: "chem-nano", label: "Nanotechnology & Materials", department: "Chemical" },
  
  // Civil Engineering
  { id: "civil-hydraulics", label: "Hydraulics & Water Resources", department: "Civil" },
  { id: "civil-structural", label: "Structural & Earthquake Engineering", department: "Civil" },
  { id: "civil-geotech", label: "Geotechnical Engineering", department: "Civil" },
  { id: "civil-planning", label: "Planning & Transportation", department: "Civil" },
  { id: "civil-environment", label: "Environmental Engineering", department: "Civil" },
];

export const getFieldLabel = (fieldId: string): string => {
  const field = fieldsData.find(f => f.id === fieldId);
  return field ? field.label : fieldId;
};

export const getFieldsByDepartment = (dept: string): Field[] => {
  return fieldsData.filter(f => f.department === dept);
};
