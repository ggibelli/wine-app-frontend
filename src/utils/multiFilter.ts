export interface IFilters {
  [key: string]: (value: any) => boolean;
}

interface IArray {
  [key: string]: any;
}

// function taken from https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function multiFilter(
  array: Array<IArray>,
  filters: IFilters
): Array<IArray> {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => {
    // validates all filter criteria
    return filterKeys.every((key) => {
      // ignores non-function predicates
      if (typeof filters[key] !== 'function') return true;
      return filters[key](item[key]);
    });
  });
}
