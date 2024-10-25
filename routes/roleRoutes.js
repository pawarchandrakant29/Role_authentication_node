// routes/roleRoutes.js
const express = require('express');
const router = express.Router();
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');
const { getAllStudents, getAllTeachers, getAllUsers, getPrincipalDashboard } = require('../controllers/roleController');

// Route accessible by teachers and above
router.get('/students', authMiddleware, authorizeRoles( 'student', 'teacher', 'principal', 'master'), getAllStudents);

// Route accessible by principals and above
router.get('/teachers', authMiddleware, authorizeRoles('teacher', 'principal', 'master'), getAllTeachers);

// Principal-specific dashboard route (accessible by principal and master)
router.get('/principal', authMiddleware, authorizeRoles('principal', 'master'), getPrincipalDashboard);

// Route accessible only by master
router.get('/master', authMiddleware, authorizeRoles('master'), getAllUsers);

module.exports = router;
