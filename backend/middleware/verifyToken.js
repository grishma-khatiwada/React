import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  //1. Get the token from the header
  const authHeader = req.headers["authorization"];
  const pureToken = authHeader.split(" ")[1];

  if (!pureToken) {
    return res.status(401).json({
      Message: "You are not authorized to perform this action",
    });
  }

  //2. Check if token is valid or not
  //   Use Jwt package
  jwt.verify(pureToken, "this_is_private_key", function (err, decoded) {
    if (err) {
      return res.status(401).json({
        Message: "Token invalid",
      });
    }
    console.log(decoded, "This is decoded"); // bar
     //3. If token is valid then proceed forward else  block the request
  next();
  });

 
};
