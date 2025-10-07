

function isLogin(req, res, next) {
  
  if (!req.headers["authorization"]) {
    return res.status(401).json({ error: "Access denied. No Authorization header" });
  }
  next();
}


function isSignup(req, res, next) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  next();
}

module.exports = { isLogin, isSignup };
