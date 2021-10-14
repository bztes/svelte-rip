export const propValue = (prop, data) => {
  if (typeof prop === 'function') {
    return prop(data);
  }
  return prop;
};
