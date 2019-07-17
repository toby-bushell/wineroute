import React, { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import { useGetVineyards } from '../../actions';
import {
  orderVineyards,
  useHandleMobileWidth,
  useHandleBounds,
} from './helpers';
import { MapContainer, Map, ListWrapper, MarkerIcon, MapIcon } from './styles';
import MapList from './list';
import Marker from './marker';
import SearchBox from './search-box';

const MapComponent = () => {
  const vineyards = useGetVineyards();
  const [vineyardsByDistance, setVineyardsByDistance] = useState(null);
  const [activeVineyard, setActiveVineyard] = useState(null);
  const [isMobile, showMap, setShowMap] = useHandleMobileWidth();
  const [api, setApi] = useState({
    loaded: false,
    googlemaps: null,
    map: null,
  });
  const [center, setCenter, zoom, setZoom, updateBounds] = useHandleBounds();

  const listRef = useRef(null);
  const mapRef = useRef(null);

  // Set ordered vineyards
  useEffect(() => {
    if (!vineyards || !center) return;
    setVineyardsByDistance(orderVineyards(vineyards, center));
  }, [center, vineyards]);

  // Update bounds
  useEffect(() => {
    if (!vineyards) return;
    updateBounds(vineyards, mapRef);
  }, [updateBounds, vineyards]);

  const onAPiLoaded = (map, googlemaps) => {
    setApi({ loaded: true, googlemaps, map });
  };

  // // Only show ma
  // const onBoundsChange = ({ lat, lng }, zoom, bounds, marginBounds) => {};

  const activeAndCenter = (lat, lng, id) => {
    setCenter({ lat, lng });
    setActiveVineyard(id);
    setZoom(5);
    // Ensure the active item in list is in view
    const itemList = listRef.current;
    itemList.scrollTo(0, 0);
  };

  const setActive = (lat, lng, id) => {
    setActiveVineyard(id);
  };

  const showMapClick = () => {
    setShowMap(!showMap);
  };

  return (
    <MapContainer>
      {showMap && (
        <Map showMobile={showMap}>
          {/* {api.loaded && (
            <SearchBox map={api.map} googlemaps={api.googlemaps} />
          )} */}
          <GoogleMapReact
            ref={mapRef}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_API_KEY,
              libraries: 'places',
            }}
            defaultCenter={center}
            center={center}
            defaultZoom={5}
            zoom={zoom}
            onChildClick={(key, { lat, lng, id }) => {
              console.log('id ', id, lat, lng);
              activeAndCenter(lat, lng, id);
            }}
            yesIWantToUseGoogleMapApiInternals
            // onBoundsChange={onBoundsChange}
            onGoogleApiLoaded={({ map: apiMap, maps: googleMaps }) =>
              onAPiLoaded(apiMap, googleMaps)
            }

            // yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            {vineyards &&
              vineyards.map((vineyard, i) => (
                <Marker
                  lat={vineyard.latitude}
                  lng={vineyard.longitude}
                  key={i}
                  id={vineyard._id}
                  text="My Marker"
                  active={vineyard._id === activeVineyard}
                />
              ))}
          </GoogleMapReact>
        </Map>
      )}
      {vineyardsByDistance && (
        // Show on desktop long list
        <ListWrapper inline={isMobile && showMap} ref={listRef}>
          <MapList
            vineyards={vineyardsByDistance}
            setActive={setActive}
            activeVineyard={activeVineyard}
          />
        </ListWrapper>
      )}
      <MapIcon type="button" onClick={showMapClick}>
        Go to map icon
      </MapIcon>
    </MapContainer>
  );
};

export default MapComponent;
