const getBackOptions = (stringArrayWithOptions) => {
  const optionsArray = stringArrayWithOptions.split(';:*:;');
  return optionsArray.slice(0, optionsArray.length - 1);
};

module.exports = getBackOptions;
