const controller = new AbortController();
const signal = controller.signal;

function fakeAsyncTask({ signal }) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      resolve("Finished!");
    }, 5000);

    signal.addEventListener("abort", () => {
      clearTimeout(timeoutId);
      reject("Aborted manually!");
    });
  });
}

fakeAsyncTask({ signal })
  .then(console.log)
  .catch(console.error);

// Now run this manually in console to cancel: