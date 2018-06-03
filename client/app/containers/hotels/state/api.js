import hotelResponse from '../../../__mocks__/hotels.json';

import HotelUtilities from '../../../utilities/hotel';

const fetchData = filters => {
  const promiseFn = resolve => {
    // Emilate response
    window.setTimeout(() => {
      const newItems = HotelUtilities.filterCollection(hotelResponse.Establishments, filters);

      resolve(newItems);
    }, parseInt(Math.random() * 1000, 10));
  };

  return new Promise(promiseFn);
};

export default {
  fetchData,
};
