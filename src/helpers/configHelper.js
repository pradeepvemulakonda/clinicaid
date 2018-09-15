const getBasepath = () => {
  const homepage = process.env.REACT_APP_HOMEPAGE;
  const basepath = homepage.replace(/^http(s?):\/\//i, '');
  return process.env.NODE_ENV === 'production' ? basepath : '/';
};

export default getBasepath;
