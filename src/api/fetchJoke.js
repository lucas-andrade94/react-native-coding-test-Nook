const BASE_URL = "https://v2.jokeapi.dev/joke/";

export const getUrl = (category, blacklist) => {
  let url = "";

  if (!blacklist) {
    return url = `${BASE_URL}${category}?type=twopart`;
  }

  url = `${BASE_URL}${category}?blacklistFlags=${blacklist}&type=twopart`;

  return url;
};
