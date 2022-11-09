const setAuthCookies = (tokens, res) => {
  const { accessToken, refreshToken } = tokens;
  res.cookie('accessToken', accessToken);
  res.cookie('refreshToken', refreshToken, { httpOnly: true });
};

const clearAuthCookies = res => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
};

export { setAuthCookies, clearAuthCookies };
