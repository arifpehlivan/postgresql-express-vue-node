import express from 'express';
import student from '../controllers/student';

const router = express.Router();

router.get('/courses', student.getCourses);
// router.post('/my-courses', student.getMyCourses);

module.exports = router;
