// Utility functions
const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
};

const throttle = (fn, limit) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

module.exports = { debounce, throttle, deepClone };
// Update 1 - 1767118778
// Update 2 - 1767118778
// Update 3 - 1767118778
// Update 4 - 1767118778
// Update 5 - 1767118778
// Update 6 - 1767118778
// Update 7 - 1767118779
// Update 8 - 1767118779
// Update 9 - 1767118779
// Update 10 - 1767118779
// Update 11 - 1767118779
// Update 12 - 1767118779
// Update 13 - 1767118779
// Update 14 - 1767118779
// Update 15 - 1767118779
// Update 16 - 1767118779
// Update 17 - 1767118779
// Update 18 - 1767118779
// Update 19 - 1767118779
// Update 20 - 1767118779
// Update 21 - 1767118779
// Update 22 - 1767118779
// Update 23 - 1767118779
// Update 24 - 1767118779
// Update 25 - 1767118780
// Update 26 - 1767118780
// Update 27 - 1767118780
// Update 28 - 1767118780
// Update 29 - 1767118780
// Update 30 - 1767118780
// Update 31 - 1767118780
// Update 32 - 1767118780
