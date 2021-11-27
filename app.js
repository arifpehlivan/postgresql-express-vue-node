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

// console.log(__dirname);

//routes
app.use('/', require('./routes/auth.routes'));
app.use('/professor', require('./routes/professor.routes'));
app.use('/student', require('./routes/student.routes'));
// app.get('/', (req, res) =>{
//     res.send('Hello World');
// })

app.use(history());
app.use(express.static(path.join(__dirname, 'public')));



app.listen(8080, () =>{
    console.log('Server on port 8080');
})