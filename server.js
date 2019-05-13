let express=require("express"),
    cors=require("cors"),
    morgan=require("morgan"),
    path=require("path"),
    bodyParser=require("body-parser"),
    mongoose=require("mongoose");
    mongoose.connect("mongodb+srv://hind_elshiwy:hindhind@to-do-list-dp9lm.mongodb.net/test?retryWrites=true", {useNewUrlParser: true })
    .then(() => { //Do Some thing if Connection succeed
    })
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });;
    mongoose.set('useCreateIndex', true);

    //Routes
    userRouter=require("./routers/user"),
    listRouter=require("./routers/list");

//Start server
let server=express();
server.use(morgan("short"));
server.use(cors({origin:true})); // To Permit Defffrent Http Methods

server.use(express.static(path.join(__dirname,"dist")));
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

/* Routes */
server.use('/api/user', userRouter)
server.use('/api/list', listRouter)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });



server.listen(process.env.PORT || 8080,()=>{
    console.log("Server Is Listening");
});
