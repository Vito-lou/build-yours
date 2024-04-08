export const isArray = (obj: any) => {
  return Object.prototype.toString.call(obj) === "[object Array]";
};

export const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

export const isString = (obj: any) => {
  return Object.prototype.toString.call(obj) === "[object String]";
};
