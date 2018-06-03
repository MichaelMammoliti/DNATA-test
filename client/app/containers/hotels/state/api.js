import hotelResponse from '../../../__mocks__/hotels.json';
import HotelUtilities from '../../../utilities/hotel';

const fetchData = params => {
  const promiseFn = resolve => {
    // Simulate server response with random delay
    window.setTimeout(() => {
      let newCollection = hotelResponse.Establishments;

      if (params.sort) {
        newCollection = HotelUtilities.sortByKey(newCollection, params.sort);
      }

      const response = HotelUtilities.filter(newCollection, params.filters, params.limit);

      resolve(response);
    }, parseInt(Math.random() * 1000, 10));
  };

  return new Promise(promiseFn);
};

export default {
  fetchData,
};
