import React, { useState, useRef, useEffect } from 'react';

const SearchBox = ({ map, googlemaps }) => {
  const searchRef = useRef(null);
  const [searchBox, setSearchBox] = useState(null);

  const handleOnChange = () => console.log('firing');

  useEffect(() => {
    setSearchBox(new googlemaps.places.SearchBox(searchRef.current));
  }, [googlemaps]);

  useEffect(() => {
    if (!searchBox) return;
    const onPlacesChanged = () => {
      if (!searchBox) return;

      const selected = searchBox.getPlaces();
      const { 0: place } = selected;
      if (!place) return
      console.log('place selected', place);
      if (!place.geometry) return;
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
    };
    searchBox.addListener('places_changed', onPlacesChanged);
  }, [map, searchBox]);

  return (
    <input
      ref={searchRef}
      onChange={handleOnChange}
      type="text"
      // onFocus={this.clearSearchBox}
      placeholder="Enter a location"
    />
  );
};

export default SearchBox;
