import express from 'express';
import student from '../controllers/student';

const router = express.Router();

router.get('/courses', student.getCourses);

module.exports = router;
