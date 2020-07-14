export const beforeRequest = config => {
  window.console.log(config);
  config.data = JSON.stringify(config.data);
  return config;
};

export const afterResponse = response => {
  window.console.log(response);
  return response;
};
