// Filtering
// =============================================
const filterByName = (item, key, value) => {
  const value1 = String(item[key]).toLowerCase().trim();
  const value2 = String(value).toLowerCase().trim();

  const words1 = value1.split(' ');
  const words2 = value2.split(' ');

  return words2.some(wordItem => words1.indexOf(wordItem) !== -1);
};

const filterByStars = (item, key, value) => {
  return String(item[key]) === String(value);
};

const filterByUserRating = (item, key, value) => {
  return Number(item[key]) >= Number(value);
};

const filterByMinCost = (item, key, value) => {
  return Number(item[key]) >= Number(value);
};

const filterCollectionCallbacksMap = {
  Name: filterByName,
  Stars: filterByStars,
  UserRating: filterByUserRating,
  MinCost: filterByMinCost,
};

const filterCollection = (collection, filters = {}) => {
  const { amount, filterBy } = {
    amount: 20,
    page: 0,
    ...filters,
    filterBy: {
      ...filters.filterBy || {},
    },
  };

  const results = [];
  let loopCount = 0;
  let shouldAdd = false;
  const filterKeys = Object.keys(filterBy);
  const hasFilters = !!filterKeys.length;

  while (true) {
    const collectionItem = collection[loopCount];

    if (!collectionItem || results.length === amount) {
      break;
    }

    if (hasFilters) {
      const everyFn = key => {
        const callback = filterCollectionCallbacksMap[key];

        return callback(collectionItem, key, filterBy[key]);
      };

      shouldAdd = filterKeys.every(everyFn);
    }

    if (!hasFilters || shouldAdd) {
      results.push(collectionItem);
    }

    loopCount += 1;
    shouldAdd = false;
  }

  return results;
};


// Sorting
// =============================================
const sortCollectionByKey = (collection, key) =>
  collection.sort((a, b) => a[key] < b[key]);

export default {
  filterCollection,
  sortCollectionByKey,
};
