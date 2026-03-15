/*************************************************
 * 2. DEBOUNCE
 * -----------------------------------------------
 * Definition:
 * Debouncing ensures a function runs only after
 * a certain delay since the last time it was called.
 *
 * Why it is used:
 * - Search input API calls
 * - Window resize events
 * - Avoid unnecessary function executions
 *************************************************/

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}

function search() {
    console.log('Searching Api...');
}

const debouncedSearch = debounce(search, 300);
