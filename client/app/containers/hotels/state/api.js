import hotelResponse from '../../../__mocks__/hotels.json';

const fetchData = filters => {
  const { amount, page } = filters;
  // let's say that there are 20 items (amount) per "page"

  const promiseFn = resolve => {
    window.setTimeout(() => {
      const newItems = [];
      const fromNum = page * amount;
      const untilNum = fromNum + amount;

      for (let i = fromNum; i < untilNum; i += 1) {
        newItems.push(hotelResponse.Establishments[i]);
      }

      resolve(newItems);
    }, 1000);
  };

  return new Promise(promiseFn);
};

export default {
  fetchData,
};
