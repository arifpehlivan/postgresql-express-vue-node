import express from 'express';
import professor from '../controllers/professor';

const router = express.Router();

router.post('/course', professor.createCourse);

router.get('/course/:id_c', professor.readCourse);

router.put('/course/:id_c', professor.updateCourse);

router.delete('/course/:id_c', professor.deleteCourse);

router.post('/my-courses', professor.getCourse);


router.post('/assignment/:id_c', professor.createAssignment);

router.get('/course-assignments/:id_c', professor.getAssignments);


router.get('/deliveries/:id_a', professor.getDeliveries);

module.exports = router;