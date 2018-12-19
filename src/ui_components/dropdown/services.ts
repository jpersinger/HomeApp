import { filter } from "lodash";

const getRegex = (search: string) => {
  let regex = ".*";

  const lowerSearch = search.toLowerCase();

  for (let i = 0; i < search.length; i++) {
    regex += `${lowerSearch.charAt(i)}+.*`;
  }

  return regex;
};

export const getSearchedItems = (search: string, items: string[]): string[] => {
  const regex = getRegex(search);
  return filter(items, (item: string) =>
    item.toLowerCase().match(regex)
  ) as string[];
};
