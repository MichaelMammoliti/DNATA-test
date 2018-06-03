const getWords = str => String(str).trim().replace(/\s\s+/g, ' ').split(' ');

export default {
  getWords,
};
