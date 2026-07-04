const jwt = require("jsonwebtoken");

async function authArtist(req,res,next){
  
  const token = req.cookies.token;                                    //sirf artist ko yeh feature milega eske liye verify krne hai
  
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized user"
      });
    }
  
    let decoded;
  
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);              //to verify token
  
      if (decoded.role !== "artist") {                                  //if not artist throw error
        return res.status(403).json({
          message: "You dont have access bhaad me jao"
        });
      }

req.user = decoded;

      next()                                                         //next() middleware se request aage ja skte eseliye use krte hai ->yeh request ke and request ka saara data padh skte hai ->response bhe send kr skte hai ->request ke andr ke data ko modify bhe kr skte hai
     
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

}

async function authUser(req,res,next){

  const token = req.cookies.token;

  if (!token) {
      return res.status(401).json({
        message: "Unauthorized user"
      });
    }
  
    let decoded;
  
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);              //to verify token
  
      if (decoded.role !== "user") {                                  //if not artist throw error
        return res.status(403).json({
          message: "You dont have access bhaad me jao"
        });
      }

req.user = decoded;

      next()                                                         //next() middleware se request aage ja skte eseliye use krte hai ->yeh request ke and request ka saara data padh skte hai ->response bhe send kr skte hai ->request ke andr ke data ko modify bhe kr skte hai
     
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }
}

module.exports = {authArtist , authUser};