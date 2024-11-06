
interface CompanyInfoProps {
  ticker: string;
  name: string;
  legal_name: string;
  stock_exchange: string;
  short_description: string;
  long_description: string;
  company_url: string;
  business_address: string;
  business_phone_no: string;
  entity_legal_form: string;
  latest_filing_date: string;
}

const CompanyInfo = ({ company }: { company: CompanyInfoProps }) => {
  const companyDetails = [
    { label: 'Ticker', value: company.ticker },
    { label: 'Name', value: company.name },
    { label: 'Legal Name', value: company.legal_name },
    { label: 'Stock Exchange', value: company.stock_exchange },
    { label: 'Short Description', value: company.short_description },
    { label: 'Long Description', value: company.long_description },
    { label: 'Company URL', value: company.company_url},
    { label: 'Business Address', value: company.business_address },
    { label: 'Business Phone No', value: company.business_phone_no },
    { label: 'Entity Legal Form', value: company.entity_legal_form },
    { label: 'Latest Filing Date', value: company.latest_filing_date }
  ];

  return (
    <div className="p-4 max-h-96">
      <div className="space-y-3 text-sm sm:text-base">
        {companyDetails.map((detail, index) => (
          <p key={index}>
            <strong className="font-medium">{detail.label}:</strong> {detail.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
