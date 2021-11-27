import pool from '../database/keys';

const student = {};

student.getCourses = async (req, res) => {
    try {
        const courses = await (await pool.query('SELECT * FROM course ')).rows;//course JOIN professor p_id=id_p
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({
            message: 'An error has occured',
            error
        })
    }
};

// student.getMyCourses = async (req, res) => {
//     const id = req.body.id;
//     try {
//         const courses = await pool.query('SELECT * FROM ')
//     } catch (error) {
//         res.status(500).json({
//             message: 'An error has occured',
//             error
//         })
//     }
// };

module.exports = student;