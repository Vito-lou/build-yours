import { isString, isArray, isObject } from "../is";
type ClassList = String | String[] | { [key: string]: any } | undefined | null;
export default function (...args) {
  let length = args.length;
  let classNames: string[] = [];
  for (let i = 0; i < length; i++) {
    const v = args[i];
    //filter falsy; like: cls('clas', false)
    if (!v) {
      continue;
    }
    if (isString(v)) {
      classNames.push(v);
    } else if (isArray(v)) {
      classNames = classNames.concat(v);
    } else if (isObject(v)) {
      Object.keys(v).forEach((k) => {
        if (v[k]) {
          classNames.push(k);
        }
      });
    } else {
      console.warn("arguments must be one of string/array/object.");
    }
  }
  return [...new Set(classNames)].join(" ");
}
