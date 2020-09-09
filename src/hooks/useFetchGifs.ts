import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { RespDataGiphy } from '../types/auxTypes';

interface IGiphy {
  data: Partial<RespDataGiphy>[];
  loading: boolean;
}

export const useFetchGifs = (category: string) => {
  const [State, setState] = useState<IGiphy>({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs(category)
      .then(img => {
        setState({ data: img, loading: false })
      })
  }, [category]);

  return State;
}