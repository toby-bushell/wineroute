import { useState, useEffect, useMemo } from 'react';
import { fitBounds } from 'google-map-react/utils';
import { sizes } from '../../styles/breakpoint';

export const calculateDistance = (lat1, lon1, lat2, lon2, unit) => {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  }
  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === 'K') {
    dist *= 1.609344;
  }
  if (unit === 'N') {
    dist *= 0.8684;
  }
  return dist;
};

export const orderVineyards = (vineyards, center) => {
  const vineyardsWithDistance = [...vineyards].map(vineyard => {
    vineyard.distance = calculateDistance(
      vineyard.latitude,
      vineyard.longitude,
      center.lat,
      center.lng,
      'K'
    );

    return vineyard;
  });

  const vineyardsSortedByDistance = vineyardsWithDistance.sort(function(a, b) {
    return a.distance - b.distance;
  });

  return vineyardsSortedByDistance;
};

const getBoundsFromCoordinates = list => {
  let maxS = list[0].lat;
  let maxN = list[0].lat;
  let maxE = list[0].lng;
  let maxW = list[0].lng;

  const ordered = [...list].reduce(
    (acc, val) => {
      // Max Longitude (maxE)
      if (val.lng >= maxE) {
        maxE = val.lng;
        acc.ne.lng = val.lng;
      }
      // Max Longitude (maxN)
      if (val.lat >= maxN) {
        maxN = val.lat;
        acc.ne.lat = val.lat;
      }
      // Max Longitude (maxW)
      if (val.lng <= maxW) {
        maxW = val.lng;
        acc.sw.lng = val.lng;
      }
      // Max Longitude (maxS)
      if (val.lat <= maxS) {
        maxS = val.lat;
        acc.sw.lat = val.lat;
      }
      return acc;
    },
    {
      ne: {
        lat: list[0].lat,
        lng: list[0].lng,
      },
      sw: {
        lat: list[0].lat,
        lng: list[0].lng,
      },
    }
  );
  return ordered;
};

export const useHandleBounds = () => {
  const [center, setCenter] = useState({ lat: -25.435059, lng: -71.56521 });
  const [zoom, setZoom] = useState(5);

  const updateBounds = useMemo(
    () => vineyards => {
      const bounds = getBoundsFromCoordinates(
        vineyards.map(vineyard => ({
          lat: vineyard.latitude,
          lng: vineyard.longitude,
        }))
      );
      const size = {
        width: 340, // Map width in pixels
        height: 802, // Map height in pixels
      };

      const { center: boundsCenter, zoom: boundsZoom } = fitBounds(
        bounds,
        size
      );
      setCenter(boundsCenter);
      setZoom(boundsZoom);
    },
    []
  );

  // const updateBounds = () => null;
  return [center, setCenter, zoom, setZoom, updateBounds];
};

export const useHandleMobileWidth = vineyards => {
  const [showMap, setShowMap] = useState(false);
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const [isMobile, setIsMobile] = useState(windowWidth < sizes.tablet);

  // Only show map either on desktop or when requested by user
  useEffect(() => {
    const setDeviceSpecificStates = () => {
      if (windowWidth > sizes.tablet) {
        setIsMobile(false);
        setShowMap(true);
      } else if (windowWidth <= sizes.tablet) {
        setIsMobile(true);
      }
    };

    setDeviceSpecificStates();

    const handleResize = () => {
      setDeviceSpecificStates();
    };

    let resizeTimer;
    window.addEventListener('resize', () => {
      // Simple debounce
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        handleResize();
      }, 200);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return [isMobile, showMap, setShowMap];
};
