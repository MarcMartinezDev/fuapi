export const getPeopleById = async id => {
  try {
    const res = await fetch(`${window.location.origin}/api/v1/users/${id}`).then(
      response => response.json()
    );
    if (res) return res;
    else return false; // no data returned
  } catch (error) {
    console.error(error);
  }
};