import StringUtilities from './string';

// Filtering
// =============================================

const filterByName = (item, key, value) => {
  const value1 = String(item[key]).toLowerCase();
  const value2 = String(value).toLowerCase();

  const words1 = StringUtilities.getWords(value1);
  const words2 = StringUtilities.getWords(value2);

  return words2.some(wordItem => words1.indexOf(wordItem) !== -1);
};

const filterByStars = (item, key, value) =>
  String(item[key]) === String(value)
;

const filterByUserRating = (item, key, value) =>
  Number(item[key]) >= Number(value)
;

const filterByMinCost = (item, key, value) =>
  Number(item[key]) >= Number(value)
;

const filterCallbacksMap = {
  Name: filterByName,
  Stars: filterByStars,
  UserRating: filterByUserRating,
  MinCost: filterByMinCost,
};

const filter = (collection, filters = {}, limit = 20) => {
  const results = [];
  let loopCount = 0;
  const filterKeys = Object.keys(filters);
  const hasFilters = !!filterKeys.length;

  while (true) {
    let shouldAdd = false;
    const collectionItem = collection[loopCount];

    if (!collectionItem || results.length === limit) {
      break;
    }

    if (hasFilters) {
      const everyFn = key => {
        const callback = filterCallbacksMap[key];

        return callback(collectionItem, key, filters[key]);
      };

      shouldAdd = filterKeys.every(everyFn);
    }

    if (!hasFilters || shouldAdd) {
      results.push(collectionItem);
    }

    loopCount += 1;
  }

  return results;
};


// Sorting
// =============================================
const sortByKeyAsc = (collection, key) => [...collection].sort((a, b) => a[key] - b[key]);
const sortByKeyDesc = (collection, key) => sortByKeyAsc(collection, key).reverse();
const sortByDistance = (collection, key) => sortByKeyAsc(collection, key);
const sortByStars = (collection, key) => sortByKeyDesc(collection, key);
const sortByMinCost = (collection, key) => sortByKeyAsc(collection, key);
const sortByUserRating = (collection, key) => sortByKeyDesc(collection, key);

const sortyByKeyCallbacksMap = {
  Distance: sortByDistance,
  Stars: sortByStars,
  MinCost: sortByMinCost,
  UserRating: sortByUserRating,
};

const sortByKey = (collection, key) => {
  return sortyByKeyCallbacksMap[key](collection, key);
};

export default {
  filter,
  sortByKey,
};
