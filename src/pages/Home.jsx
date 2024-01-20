import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import DaycareResult from './DaycareResult';

export default function Home() {

  const [address, setAddress ] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSelect = async (selectedAddress) => {
    setAddress(selectedAddress);
    const results = await getDaycareResults(selectedAddress);
    setSearchResults(results);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getDaycareResults = async (location) => {

    try {
      const results = await geocodeByAddress(location);
      const { lat, lng } = await getLatLng(results[0]);

    // Replace this with actual logic to fetch daycare results based on the location.
    // For testing, you can return mock data.
    return [
      { id: 1, name: 'Daycare 1', address: '123 Main St', imageUrl: 'url1.jpg' },
      { id: 2, name: 'Daycare 2', address: '456 Oak St', imageUrl: 'url2.jpg' },
      { id: 3, name: 'Daycare 3', address: '789 Elm St', imageUrl: 'url3.jpg' },
      // Add more daycare objects as needed
    ];
  } catch (error) {
    console.error('Error fetching daycare results:', error);
    return [];
  }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    if (!address){
      const results = getRandomDaycares();
      setSearchResults(results);
    }
  };

  const getRandomDaycares = () => {
    // Replace this with actual logic to fetch random daycares.
    // For testing, you can return mock data.
    return [
      { id: 4, name: 'Random Daycare 1', address: '111 Random St', imageUrl: 'url4.jpg' },
      { id: 5, name: 'Random Daycare 2', address: '222 Random St', imageUrl: 'url5.jpg' },
      { id: 6, name: 'Random Daycare 3', address: '333 Random St', imageUrl: 'url6.jpg' },
      // Add more daycare objects as needed
    ];
  };
 
  return (
    <>
    <section>
      <div className='text-center mt-6'>
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
          {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Enter location...',
                  className: 'px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out',
                })}
                />
                <div>
                {loading ? <div>Loading...</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, {style})} key={suggestion.placeId}>
                      {suggestion.description}
                    </div>
                  );
                })}
                </div>
            </div>
          )}
        </PlacesAutocomplete>
        <button type='submit' className='ml-2 bg-blue-600 text-white px-4 py-2 rounded'>
          Search
        </button>
      </div>
      <div className='flex flex-wrap justify-center mt-6'>
        {searchResults.map((daycare) => (
          <DaycareResult key={daycare.id} daycare={daycare} />
        ))}
      </div>
    </section>
    </>
  );
}
