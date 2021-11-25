import { Router } from 'express';
import pool from '../database/keys';

const authentication = {};

authentication.signUp = async (req, res) => {
    const { name, email, password , role } = req.body;
    if(role=='professor'){
        try {
            await pool.query('INSERT INTO professor (p_name, p_email, p_password) VALUES ($1, $2, $3)', [name, email, password]);
            res.status(200).json({
                message: 'Succesful registered professor',
                professor: {name, email, password}
            })
        }catch(error){
            if(error.constraint=='professor_p_email_key'){
                res.status(500).json({
                    message: 'Someone is already using that email',
                    error
                })
            }else{
                res.status(500).json({
                message: 'An error  has occured',
                error
            });
            }
           
        }
    }else {
        res.send('Student');
    }
};

module.exports = authentication;