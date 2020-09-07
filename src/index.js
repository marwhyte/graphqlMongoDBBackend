import "babel-polyfill";

(async () => {
  try {
    console.log("connect here");
  } catch (error) {
    console.log("check for DB connect here");
    process.exit(1);
  }

  console.log("server running on port");
})();
