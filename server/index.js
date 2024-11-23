import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv"; 
import bcrypt from "bcrypt"

const app = express();
app.use(express.json());
app.use(express.urlencoded());

// app.use(cors({
//   origin: "https://next-quiz-bice.vercel.app/", // Vervang door de juiste oorsprong
//   methods: "GET, POST, PUT, DELETE", // Vervang door de toegestane methoden
//   allowedHeaders: "Content-Type", // Vervang door de toegestane headers
//   credentials: true, // Schakel cookies en verificatie in indien nodig
//   optionsSuccessStatus: 200
// }));

// app.use(cors())
// app.use(cors({
//   origin: ['https://next-quiz-bice.vercel.app/'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: false
// }))

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// })

dotenv.config();
const DB="mongodb+srv://user:koHKbEuxFTqC6OSk@cluster0.4lsix.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

const Quiz =  mongoose.model('quizes', userSchema);

//Routes
app.post("/login", async(req, res) => {
  const { email, password} = req.body
  Quiz.find({email: email}).then((user)=>{
    if(user){
      const isValidPassword = bcrypt.compareSync(password, user[0].password);
      if(isValidPassword){
      res.send({message: "Login Successfully",user})
      }else{
        res.send({message : "Incorrect Password"})
      }
    }else{
      res.send({message: "User Not Registered"})
    }
  }).catch((error)=>{
    res.send({message: "User Not Registered"});
  });
});


app.post("/signup", async(req, res) => {
  const { name, email, password } = req.body;
  Quiz.findOne({ email:email }).then((user) => {
    if (user) {
      res.send({message: "User Already Registered", user})
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashedpassword = bcrypt.hashSync(password, salt);
      const user = new Quiz({
        name,
        email,
        password: hashedpassword,
      })    
      user.save().then(()=>{
          res.send({ message: "Successfully Registered"});
        }
      );
    }
  }).catch((error)=>{
    res.send(404, "BAD REQUEST");
  });
});

app.get("/", (req,res)=>{
  res.json("Hello Server From Next Quiz")
})

app.listen(9002, () => {
  console.log("Be started at Port 9002");

});
