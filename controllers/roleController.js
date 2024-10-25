// controllers/roleController.js
const User = require("../models/userModel");

// Controller for getting all students (accessible by teachers, principals, and master)
const getAllStudents = async (req, res) => {
  try {
    const studentCount = await User.countDocuments({ role: "student" });

    // Fetch list of all principals
    const students = await User.find({ role: "student" }).select(
      "name username"
    );


    const report = {
      totalStudents: studentCount,
      Students_List: students, // Add list of principals to the response
    };

    res.json({
      message: "Welcome to Students Dashboard",
      report,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller for getting all teachers (accessible by principals and master)
const getAllTeachers = async (req, res) => {
  try {
    const studentCount = await User.countDocuments({ role: "student" });
    const teacherCount = await User.countDocuments({ role: "teacher" });

    // Fetch list of all principals
    const students = await User.find({ role: "student" }).select(
      "name username"
    );
    const teachers = await User.find({ role: "teacher" }).select(
      "name username"
    );

    const report = {
      totalStudents: studentCount,
      totalTeachers: teacherCount,
      Students_List: students, // Add list of principals to the response
      Teachers_list: teachers, // Add list of principals to the response
    };

    res.json({
      message: "Welcome to Teachers Dashboard",
      report,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller for getting all users (accessible only by master)
const getAllUsers = async (req, res) => {
  try {
    const studentCount = await User.countDocuments({ role: "student" });
    const teacherCount = await User.countDocuments({ role: "teacher" });
    const principalCount = await User.countDocuments({ role: "principal" });
    const masterCount = await User.countDocuments({ role: "master" });

    // const users = await User.find().select("name username role");
    const students = await User.find({ role: "student" }).select(
      "name username role"
    );
    const teachers = await User.find({ role: "teacher" }).select(
      "name username role"
    );
    const principals = await User.find({ role: "principal" }).select(
      "name username role"
    );
    const master = await User.find({ role: "master" }).select(
      "name username role"
    );

    const report = {
      totalStudents: studentCount,
      totalTeachers: teacherCount,
      totalPrincipal: principalCount,
      totalMaster: masterCount,
      students_List: students, // Add list of principals to the response
      teachers_list: teachers, // Add list of principals to the response
      principal_List: principals, // Add list of principals to the response
      master_List: master, // Add list of principals to the response
    };

    res.json({
      message: "Welcome to Master Dashboard",
      report,
    });
    // res.json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller for principal dashboard (accessible by principal and master)
const getPrincipalDashboard = async (req, res) => {
  try {
    // Fetch count of students and teachers for the dashboard
    const studentCount = await User.countDocuments({ role: "student" });
    const teacherCount = await User.countDocuments({ role: "teacher" });
    const principalCount = await User.countDocuments({ role: "principal" });

    // Fetch list of all principals
    const students = await User.find({ role: "student" }).select(
      "name username"
    );
    const teachers = await User.find({ role: "teacher" }).select(
      "name username"
    );
    const principals = await User.find({ role: "principal" }).select(
      "name username"
    );

    const report = {
      totalStudents: studentCount,
      totalTeachers: teacherCount,
      totalPrincipal: principalCount,
      Students_List: students, // Add list of principals to the response
      Teachers_list: teachers, // Add list of principals to the response
      Principal_List: principals, // Add list of principals to the response
    };

    res.json({
      message: "Welcome to Principal Dashboard",
      report,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllStudents,
  getAllTeachers,
  getAllUsers,
  getPrincipalDashboard,
};
