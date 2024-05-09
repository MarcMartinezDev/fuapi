// generates a new id for the given model
export const createNewId = async model => {
  const lastId = await model.findOne().select("id").sort({ id: -1 });
  if (lastId === null) {
    return 1;
  } else {
    return lastId.id + 1;
  }
};

// check if the value passed in parameter is a valid Number
export const isValid = value => {
  if (value.length > 3) return false;
  for (let index = 0; index < value.length; index++) {
    let parsedValue = parseInt(value[index]);
    if (isNaN(parsedValue)) return false;
  }
  return true;
};
