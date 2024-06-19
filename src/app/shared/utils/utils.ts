export const removingFirstCurrencyName = (name: string): string => {
  const index = name.lastIndexOf('/');
  const nameTreated = index !== -1 ? name.substring(0, index) : name;

  return nameTreated;
}

export const formatCreateDate = (date: string): string => {
  const index = date.lastIndexOf(' ');
  const nameTreated = index !== -1 ? date.substring(index + 1) : date;

  return nameTreated;
}
