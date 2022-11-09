const setAuthCookies = (tokens, res) => {
  const { accessToken, refreshToken } = tokens;
  res.cookie('accessToken', accessToken);
  res.cookie('refreshToken', refreshToken, { httpOnly: true });
};

export { setAuthCookies };
