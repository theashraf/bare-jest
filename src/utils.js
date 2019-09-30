exports.toUpperCase = str => {
  if (typeof str !== "string") throw new Error("invalid string parameter");
  return str.toUpperCase();
};
