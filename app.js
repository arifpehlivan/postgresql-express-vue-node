import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import history from 'connect-history-api-fallback';
import path from 'path';

const app = express();

//middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}));
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

//routes
app.use('/', require('./routes/auth.routes'));
// app.get('/', (req, res) =>{
//     res.send('Hello World');
// })



app.listen(3000, () =>{
    console.log('Server on port 3000');
})