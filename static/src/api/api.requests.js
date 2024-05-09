export const getPeopleById = async id => {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/users/${id}`).then(
      response => response.json()
    );
    if (res) return res;
    else return false; // no data returned
  } catch (error) {
    console.error(error);
  }
};