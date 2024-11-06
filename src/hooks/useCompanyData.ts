import { useState, useEffect } from 'react';

interface Company {
  id: string;
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

const useCompanyData = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/companies-lookup.json');
        if (!response.ok) {
          throw new Error('Failed to fetch company data');
        }
        const data: Company[] = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching company data:', error);
        setError('Failed to load companies.');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  return { companies, loading, error };
};

export default useCompanyData;
