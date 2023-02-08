export const fetchFriendApi = async (url: string) => {
  const data = await fetch(url);
  if (data.ok) {
    return data.json();
  }
};
