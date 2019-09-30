exports.describe = (title, callback) => {
  console.log("\x1b[33m", `* ${title}`);
  callback();
  console.log("\x1b[0m");
};

exports.test = (title, callback) => {
  try {
    callback();
    console.log("\x1b[32m", `✔ ${title}`);
  } catch (error) {
    console.error("\x1b[31m", `✖ ${title}`);
    console.error("\x1b[31m", error.message);
  } finally {
    console.log("\x1b[0m");
  }
};

exports.it = (title, callback) => {
  try {
    callback();
    console.log("\x1b[32m", `✔ ${title}`);
  } catch (error) {
    console.error("\x1b[31m", `✖ ${title}`);
    console.error("\x1b[31m", error.message);
  } finally {
    console.log("\x1b[0m");
  }
};

exports.expect = actual => {
  return {
    notToBe(expected) {
      if (actual === expected) {
        throw new Error(`${actual} === ${expected}`);
      }
    },
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} !== ${expected}`);
      }
    }
  };
};
