const getValue = (object, keys) => keys.reduce((o, k) => (o || {})[k], object);

export const getByProperty = (...path) => (obj) => getValue(obj, path);
