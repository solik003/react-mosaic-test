
import React, { useState, useCallback } from 'react';
import { Mosaic, MosaicWindow, MosaicBranch, MosaicNode } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import CompanyInfo from './CompanyInfo';  
import CompanySelect from './CompanySelect';  
import useCompanyData from '../hooks/useCompanyData'; 
import { FaTimes} from 'react-icons/fa';


const MosaicContainer: React.FC = () => {
  const { companies, loading } = useCompanyData();
  const [initialValue, setInitialValue] = useState<MosaicNode<string> | null>({
    direction: 'row',
    first: '1',
    second: {
      direction: 'column',
      first: '2',
      second: '3',
    },
    splitPercentage: 70,
  });

  const [selectedCompanies, setSelectedCompanies] = useState<{ [key: string]: any | null }>({
    '1': null,
    '2': null,
    '3': null,
  });

  const [removedPanels, setRemovedPanels] = useState<string[]>([]);

  const handleCompanyChange = useCallback(
    (panelId: string, companyId: string) => {
      const selected = companies.find((company) => company.id === companyId) || null;
      setSelectedCompanies((prev) => ({
        ...prev,
        [panelId]: selected,
      }));
    },
    [companies]
  );

  const handleRemovePanel = (id: string) => {
    setRemovedPanels((prevRemovedPanels) => [...prevRemovedPanels, id]);
  };


  return (
    <Mosaic
      onChange={setInitialValue}
      renderTile={(id) => (
        <MosaicWindow<string>
          title={`Company Info ${id}`}
          toolbarControls={[
              <button 
                key="remove-btn" 
                className="p-2"
                onClick={() => handleRemovePanel(id)}
                style={{ background: 'none', border: 'none' }}
              >
                <FaTimes size={16} />
              </button>,
          ]}
          createNode={() => 'new'}
          path={[id] as MosaicBranch[]}
        >
          <div className='h-full overflow-y-auto p-4 mx-auto'>
            {loading ? (
              <p>Loading...</p>
            ) : selectedCompanies[id] === null ? (
              <CompanySelect
                companies={companies}
                onChange={(companyId) => handleCompanyChange(id, companyId)}
              />
            ) : (
              <CompanyInfo company={selectedCompanies[id]} />
            )}
          </div>
        </MosaicWindow>
      )}
      initialValue={initialValue}
    />
  );
};

export default MosaicContainer;
