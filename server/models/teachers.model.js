const teacherModel = require('./teachers.mongo')
const bcrypt = require('bcrypt')
const {getEmailUsername} = require('../services/userid')

async function teacherEmailExists(email) {
    try {
      const teacher = await teacherModel.findOne({ email });
      return !!teacher;
    } catch (error) {
      console.error('Error checking email existence:', error);
      throw error;
    }
}

async function teacherIDExists(userid) {
  try {
    const teacher = await teacherModel.findOne({ userid });
    return !!teacher;
  } catch (error) {
    console.error('Error checking email existence:', error);
    throw error;
  }
}

async function registerTeacher(email, password) {
  try {
    const emailExists = await teacherEmailExists(email);

    if (!emailExists) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newTeacher = new teacherModel({
        email,
        password: hashedPassword,
        userid: getEmailUsername(email)
      });

      await newTeacher.save();

      console.log('Teacher registered successfully:', newTeacher);
      return true;
    } else {
      console.log('Email already exists. Registration failed.');
      return false;
    }
  } catch (error) {
    console.error('Error registering teacher:', error);
    throw error;
  }
}

async function authenticateTeacher(email, password) {
  try {
    const teacher = await teacherModel.findOne({ email });

    if (teacher) {
      const passwordMatch = await bcrypt.compare(password, teacher.password);

      if (passwordMatch) {
        console.log('Authentication successful for email:', email);
        return true;
      } else {
        console.log('Authentication failed. Incorrect password for email:', email);
        return false;
      }
    } else {
      console.log('Authentication failed. Email not found:', email);
      return false;
    }
  } catch (error) {
    console.error('Error authenticating teacher:', error);
    throw error;
  }
}

async function updateTeacherData(email, newData) {
  try {
    const existingTeacher = await teacherModel.findOne({ email });

    if (existingTeacher) {
      for (const key in newData) {
        if (newData.hasOwnProperty(key)) {
          existingTeacher[key] = newData[key];
        }
      }

      await existingTeacher.save();

      console.log('Teacher data updated successfully:', existingTeacher);
      return true;
    } else {
      console.log('Email not found. Update failed.');
      return false;
    }
  } catch (error) {
    console.error('Error updating teacher data:', error);
    throw error;
  }
}

async function deleteTeacher(email) {
  try {
    const deletionResult = await teacherModel.deleteOne({ email });

    if (deletionResult.deletedCount > 0) {
      console.log('Student deleted successfully.');
      return true;
    } else {
      console.log('Student not found. Deletion failed.');
      return false;
    }
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
}

async function isTeacherComplete(email) {
  try {
    const teacher = await teacherModel.findOne({ email });

    if (teacher) {
      return teacher.complete;
    } else {
      console.log('Email not found. Check failed.');
      return false;
    }
  } catch (error) {
    console.error('Error checking "complete" field:', error);
    throw error;
  }
}

async function getTeacher(email) {
  try {
    const teacher = await teacherModel.findOne({email})
    return teacher
  } catch(err) {
    console.error('Error getting student:', err);
    throw err;
  }
}

async function getTeacherByID(id) {
  try {
    const teacher = await teacherModel.findOne({userid: id})
    return teacher
  } catch(err) {
    console.error('Error getting student:', err);
    throw err;
  }
}

async function getAllTeachers(location, minRating, teacherClass) {
  try {
    let query = {};

    if (location) {
      query.location = location;
    }

    if (minRating) {
      query.rating = { $gte: minRating };g
    }

    if (teacherClass) {
      query.class_subject = teacherClass;
    }

    const teachers = await teacherModel.find(query);

    return teachers;
  } catch (error) {
    console.error('Error retrieving teachers:', error);
    throw error;
  }
}

async function addRoomToTDms(userid, room) {
  try {
    const user = await teacherModel.findOne({ userid });

    if (user) {
      user.dms.push(room);

      await user.save();
      return true;
    } else {
      console.log(`User with userid ${userid} not found`);
      return false;
    }
  } catch (error) {
    console.error('Error updating dms array:', error);
    throw error;
  }
}

async function getTDmsByUsername(username) {
  try {
    const user = await teacherModel.findOne({ userid: username });

    if (user) {
      return user.dms;
    } else {
      console.log(`User with username ${username} not found`);
      return null;
    }
  } catch (error) {
    console.error('Error retrieving dms array:', error);
    throw error;
  }
}

module.exports = {
  teacherEmailExists,
  registerTeacher,
  authenticateTeacher,
  updateTeacherData,
  deleteTeacher,
  isTeacherComplete,
  getTeacher,
  getAllTeachers,
  getTeacherByID,
  addRoomToTDms,
  getTDmsByUsername,
  teacherIDExists
};