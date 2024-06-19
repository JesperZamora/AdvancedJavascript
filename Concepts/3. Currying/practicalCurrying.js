/**
 * Constructs a complete URL by appending an endpoint and query parameters to a base URL.
 *
 * @param {string} baseUrl - The base URL to which the endpoint and query parameters will be appended.
 * @param {string} endpoint - The specific endpoint to be added to the base URL.
 * @param {Object} queryParams - An object representing the query parameters to be included in the URL.
 *   - Each key-value pair in the object represents a query parameter name and its corresponding value.
 *
 * @returns {string} - The complete URL with the endpoint and query parameters appended.
 *
 * @example
 * const baseUrl = "https://api.example.com";
 * const endpoint = "users";
 * const queryParams = { id: 123, name: "John Doe" };
 * const completeUrl = buildUrl(baseUrl, endpoint, queryParams);
 * console.log(completeUrl); // Output: https://api.example.com/users?id=123&name=John%20Doe
 */

// Passing multiple arguments
function buildUrl(baseUrl, endpoint, queryParams) {
  const queryString = Object.keys(queryParams)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
    )
    .join("&");
  return `${baseUrl}/${endpoint}?${queryString}`;
}

const baseUrl = "https://api.example.com";
const useUrl = buildUrl(baseUrl, "users", { id: 123, name: "John Doe" });

console.log(useUrl); // Output: https://api.example.com/users?id=123&name=John%20Doe

// Currying
function curryBuildUrl(baseUrl) {
  return function (endpoint) {
    return function (queryParams) {
      const queryString = Object.keys(queryParams)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
        )
        .join("&");

      return `${baseUrl}/${endpoint}?${queryString}`;
    };
  };
}

const buildQuery = curryBuildUrl(baseUrl);
const endpoint = buildQuery("users");
const user = endpoint({ id: 123, name: "Jane Doe" });

console.log(user); //https://api.example.com/usersid=123&name=Jane%20Doe

// Currying - Fuctional approach
const curryBuildUrlTwo = (baseUrl) => (endpoint) => (queryParams) => {
  const queryString = Objects.keys(queryParams)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');
  
  return `${baseUrl}/${endpoint}?${queryString}`;
}

const buildQuery2 = curryBuildUrl(baseUrl);
const endpoint2 = buildQuery2("users");
const user2 = endpoint2({id: 123, name: "Alice"});

console.log(user2);