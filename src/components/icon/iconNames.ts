const names = {
  "list-menu": true,
  close: true,
  add: true,
  "empty-checkbox": true,
  "filled-checkbox": true,
  edit: true,
  delete: true
};

// This is used instead of an enum to allow e.g. `<Icon name="trash" />` over
// `<Icon name={IconName.trash}` while still enforcing validity of icon names.
type IconName = keyof (typeof names);

export const iconNames = Object.keys(names) as IconName[];
export default IconName;
