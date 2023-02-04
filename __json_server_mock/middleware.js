module.exports = (req, res, next) => {
  const { username, password } = req.body;
  // console.log(req);
  if (req.method === "POST" && req.path === "/login") {
    if (username === "jtr" && password === "123") {
      return res.status(200).json({ token: "123" });
    }
    return res.status(400).json({ message: "username or password error" });
  }
  next();
};
