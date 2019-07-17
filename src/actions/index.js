import { useEffect } from 'react';
import axios, { CancelToken } from 'axios';
import { useStateValue } from '../state/index';

// function getDataAndStore(stateToUpdate, 'VINEYARDS_UPDATE','../json/vineyards.json', 'vineyards') {
//   // TODO: Create abstraction on shared code to fetch data and update state
// }

export const useGetVineyards = () => {
  const [{ vineyards }, dispatch] = useStateValue();

  useEffect(() => {
    if (vineyards) return;
    const source = CancelToken.source();
    let mounted = true;

    async function fetchData() {
      try {
        const response = await axios.get('../json/vineyards.json', {
          cancelToken: source.token,
        });
        if (mounted) {
          dispatch({
            type: 'VINEYARDS_UPDATE',
            vineyards: response.data,
          });
          return response.data;
        }
      } catch (e) {
        dispatch({
          type: 'ERROR',
          message: e.message,
        });
      }
    }

    fetchData();

    return function cleanup() {
      mounted = false;
      source.cancel('Operation canceled by the user.');
    };
  }, [dispatch, vineyards]);

  return vineyards;
};

export const useGetVineyard = id => {
  const [{ singleVineyard, vineyards }, dispatch] = useStateValue();

  useEffect(() => {
    if (singleVineyard) return;
    const source = CancelToken.source();
    let mounted = true;

    if (vineyards) {
      const alreadyStored = vineyards.find(
        vineyard => vineyard._id === '5c8ea07c78e3d8d723f226e1'
      );
      if (mounted && alreadyStored) {
        dispatch({
          type: 'SINGLE_VINEYARD_UPDATE',
          singleVineyard: alreadyStored,
        });
      }
    }

    async function fetchData() {
      try {
        const response = await axios.get('../json/vineyard.json', {
          cancelToken: source.token,
        });
        if (mounted) {
          dispatch({
            type: 'SINGLE_VINEYARD_UPDATE',
            singleVineyard: response.data,
          });
          return response.data;
        }
      } catch (e) {
        dispatch({
          type: 'ERROR',
          message: e.message,
        });
      }
    }

    fetchData();

    return function cleanup() {
      mounted = false;
      source.cancel('Operation canceled by the user.');
    };
  }, [dispatch, singleVineyard, vineyards]);

  return singleVineyard;
};
