const phoneNumberValidator = (value: string): boolean => {
  const regex = /^(([+]|00)39)?((3[1-6][0-9]))(\d{7})$/;
  const result = regex.exec(value);
  if (result) return true;
  return false;
};

export default phoneNumberValidator;
