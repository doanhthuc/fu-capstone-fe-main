import log from "console-log-colors";

// ! logError("error", { v: 1, y: "???" }, { s: 2, y: "???" });
const logError = (s, ...params) => {
  console.log(log.bgRed(`❌ ${s}`), ...params);
};

// !  logLoading("something is loading");
const logLoading = (s) => {
  console.log(log.bold.italic.bgBlueBright("☢ Loading"), s);
};

// ! logSuccess("success", { s: 1, y: "lmeo" }, { s: 2, y: "lmao" });
const logSuccess = (s, ...params) => {
  console.log(log.bgGreen(`✅ ${s}`), ...params);
};

export { logError, logLoading, logSuccess };
