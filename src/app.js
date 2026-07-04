const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes');


const app = express();

app.use(express.json());                                         //taaki req.body me data aa sake
app.use(cookieParser());                                       //taaki cookie me data set kr skte aur cookie me jo data aayega usko padh kr skte

app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);



module.exports = app;