import React from 'react';

interface CompanySelectProps {
  companies: any[];
  onChange: (companyId: string) => void;
}

const CompanySelect: React.FC<CompanySelectProps> = ({ companies, onChange }) => {
  return (
    <div className="sm:w-80 md:w-96 lg:w-[400px]">
      <h2>Select a Company</h2>
      <select onChange={(e) => onChange(e.target.value)} className="mb-4 p-2 focus:outline-none w-full">
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanySelect;



