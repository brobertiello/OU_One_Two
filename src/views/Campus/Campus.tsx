import { useState } from 'react';
import styles from './Campus.module.css';

export const Campus = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const buildings = [
    // Academic Buildings
    { id: 'gould', name: 'Gould Hall', type: 'academic' },
    { id: 'gaylord', name: 'Gaylord Hall', type: 'academic' },
    { id: 'price', name: 'Price Hall', type: 'academic' },
    { id: 'sarkeys', name: 'Sarkeys Energy Center', type: 'academic' },
    { id: 'dunham', name: 'Dunham Hall', type: 'academic' },
    { id: 'carson', name: 'Carson Engineering Center', type: 'academic' },
    { id: 'adams', name: 'Adams Hall', type: 'academic' },
    { id: 'ellison', name: 'Ellison Hall', type: 'academic' },
    { id: 'cate1', name: 'Cate Center 1', type: 'academic' },
    { id: 'cate2', name: 'Cate Center 2', type: 'academic' },
    { id: 'cate3', name: 'Cate Center 3', type: 'academic' },
    { id: 'cate4', name: 'Cate Center 4', type: 'academic' },
    { id: 'cate5', name: 'Cate Center 5', type: 'academic' },
    { id: 'monnet', name: 'Monnet Hall', type: 'academic' },
    { id: 'george', name: 'George Lynn Cross Hall', type: 'academic' },
    { id: 'david', name: 'David L. Boren Hall', type: 'academic' },
    { id: 'david_ross', name: 'David Ross Boyd Hall', type: 'academic' },
    { id: 'richards', name: 'Richards Hall', type: 'academic' },
    { id: 'carpenter', name: 'Carpenter Hall', type: 'academic' },
    { id: 'felgar', name: 'Felgar Hall', type: 'academic' },
    { id: 'nielsen', name: 'Nielsen Hall', type: 'academic' },
    { id: 'stephenson', name: 'Stephenson Research Center', type: 'academic' },
    { id: 'devon', name: 'Devon Energy Hall', type: 'academic' },
    { id: 'exxon', name: 'ExxonMobil Lawrence G. Rawl Engineering Practice Facility', type: 'academic' },
    
    // Libraries
    { id: 'bizzell', name: 'Bizzell Memorial Library', type: 'library' },
    { id: 'young', name: 'Young Research Library', type: 'library' },
    { id: 'fine_arts', name: 'Fine Arts Library', type: 'library' },
    
    // Student Services
    { id: 'union', name: 'Oklahoma Memorial Union', type: 'services' },
    { id: 'health', name: 'Goddard Health Center', type: 'services' },
    { id: 'career', name: 'Career Services', type: 'services' },
    { id: 'housing', name: 'Housing and Food Services', type: 'services' },
    { id: 'registrar', name: 'Registrar\'s Office', type: 'services' },
    { id: 'financial', name: 'Financial Services', type: 'services' },
    
    // Dining
    { id: 'couch', name: 'Couch Restaurants', type: 'dining' },
    { id: 'crossroads', name: 'Crossroads Restaurant', type: 'dining' },
    { id: 'cate_commons', name: 'Cate Commons', type: 'dining' },
    { id: 'couch_towers', name: 'Couch Restaurants - Towers', type: 'dining' },
    { id: 'union_food', name: 'Union Food Court', type: 'dining' },
    
    // Recreation
    { id: 'sarkeysfitness', name: 'Sarkeys Fitness Center', type: 'recreation' },
    { id: 'mccasland', name: 'McCasland Field House', type: 'recreation' },
    { id: 'intramural', name: 'Intramural Fields', type: 'recreation' },
    { id: 'tennis', name: 'Headington Family Tennis Center', type: 'recreation' },
    { id: 'golf', name: 'Jimmie Austin OU Golf Club', type: 'recreation' },
    
    // Residential
    { id: 'walker', name: 'Walker Center', type: 'residential' },
    { id: 'couch_towers_res', name: 'Couch Towers', type: 'residential' },
    { id: 'david_ross_res', name: 'David Ross Boyd Center', type: 'residential' },
    { id: 'dunham_res', name: 'Dunham Center', type: 'residential' },
    { id: 'traditions', name: 'Traditions Square', type: 'residential' }
  ];

  const buildingTypes = [
    { value: 'all', label: 'All Buildings' },
    { value: 'academic', label: 'Academic Buildings' },
    { value: 'library', label: 'Libraries' },
    { value: 'services', label: 'Student Services' },
    { value: 'dining', label: 'Dining' },
    { value: 'recreation', label: 'Recreation' },
    { value: 'residential', label: 'Residential' }
  ];

  const getMapUrl = () => {
    // Static view of OU campus
    return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.1916000000003!2d-97.4453!3d35.2075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b2698f0b0b0b0b%3A0x0b0b0b0b0b0b0b0b!2sUniversity%20of%20Oklahoma%2C%20Norman%2C%20Oklahoma!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus';
  };

  const handleBuildingClick = (buildingId: string) => {
    setSelectedBuilding(buildingId);
  };

  const filteredBuildings = buildings.filter(building => {
    const matchesSearch = building.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || building.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <iframe
          src={getMapUrl()}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      
      <div className={styles.buildingsList}>
        <h2 className={styles.sectionTitle}>Campus Buildings</h2>
        <div className={styles.filtersContainer}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search buildings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.typeFilterContainer}>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className={styles.typeFilter}
            >
              {buildingTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.buildingsGrid}>
          {filteredBuildings.map((building) => (
            <div
              key={building.id}
              className={`${styles.buildingCard} ${selectedBuilding === building.id ? styles.selected : ''}`}
              onClick={() => handleBuildingClick(building.id)}
            >
              <h3 className={styles.buildingName}>{building.name}</h3>
              <span className={styles.buildingType}>{buildingTypes.find(t => t.value === building.type)?.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 