import pool from '../database/keys';


const professor = {};

professor.createCourse = async (req, res) => {
    const {
        id,
        c_name,
        c_description
    } = req.body;
    try {
        await pool.query('INSERT INTO course (p_id, c_name, c_description) VALUES ($1, $2, $3)', [id, c_name, c_description]);
        res.status(200).json({
            message: 'Successful added course',
            course: {
                id,
                c_name,
                c_description
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error has occured',
            error
        })
    }
};

professor.readCourse = async (req, res) => {
    const id = req.params.id_c;
    try {
        const course = await (await pool.query('SELECT * FROM course WHERE id_c=$1', [id])).rows[0];
        res.status(200).json({
            course
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error has occured',
            error
        })
    }
};

professor.updateCourse = async (req, res) => {
    const id = req.params.id_c;
    const {
        c_name,
        c_description
    } = req.body;
    try {
        await pool.query('UPDATE course SET c_name=$1, c_description=$2 WHERE id_c=$3', [c_name, c_description, id]);
        res.status(200).json({
            message: 'Suucesful edited course',
            course: {
                c_name,
                c_description
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error has occured',
            error
        })
    }

};

professor.deleteCourse = async (req, res) => {
    const id = req.params.id_c;
    const {
        c_name,
        c_description
    } = req.body;
    try {
        await pool.query('DELETE FROM course WHERE id_c=$1', [id]);
        res.status(200).json({
            message: 'Suucesful deleted course',
            course: {
                c_name,
                c_description
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error has occured',
            error
        })
    }

};

professor.getCourse = async (req, res) => {
    const {id} = req.body;
    try {
        const courses = await (await pool.query('SELECT * FROM course WHERE p_id=$1',[id])).rows;
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({
            message: 'An error has occured',
            error
        })
    }

};

module.exports = professor;