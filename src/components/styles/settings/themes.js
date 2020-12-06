const defaultColors = {
  whiteColor: '#FFF',
  blackColor: '#000',
  grayColor: '#666',
  lightGrayColor: '#ccc',
  borderColor: '#eee',
};

const lightTheme = {
  ...defaultColors,
  id: 'lightTheme',
  primaryColor: '#F8049C',
  secondaryColor: '#FDD45F',
  bgColor: defaultColors.whiteColor,
  textColor: defaultColors.blackColor,
  darkTextColor: defaultColors.blackColor,
};

const draculaTheme = {
  ...defaultColors,
  id: 'draculaTheme',
  primaryColor: '#BD93F9',
  secondaryColor: '#F1FA8C',
  bgColor: '#383A59',
  textColor: '#F8F8F2',
  darkTextColor: '#44475A',
};

const themes = { lightTheme, draculaTheme };

export { themes };
