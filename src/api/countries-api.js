const baseUrl = 'https://restcountries.com/v3.1';

const urlGenerator = (pageUrl) => {
  return baseUrl + pageUrl
}

export const loadData = async () => {
  const url = urlGenerator('/all');
  try {
    const responce = await (await fetch(url)).json();
    return responce;
  }
  catch(e) {
    throw new Error(e.message)
  }

}

export const loadDetailByName = async (name) => {
  const url = urlGenerator('/name/' + name);
  try {
    const responce = await (await fetch(url)).json();
    return responce;
  }
  catch(e) {
    throw new Error(e.message)
  }

}