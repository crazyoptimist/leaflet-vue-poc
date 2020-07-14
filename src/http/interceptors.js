export const beforeRequest = config => {
  // window.console.log(config);
  return config;
};

export const afterResponse = response => {
  // window.console.log(response);
  return response;
};
