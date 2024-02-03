const studentModel = require('./students.mongo')
const bcrypt = require('bcrypt')
const {getEmailUsername} = require('../services/userid')

async function studentEmailExists(email) {
    try {
      const student = await studentModel.findOne({ email });
      return !!student;
    } catch (error) {
      console.error('Error checking email existence:', error);
      throw error;
    }
}

async function studentIDExists(userid) {
  try {
    const student = await studentModel.findOne({ userid });
    return !!student;
  } catch (error) {
    console.error('Error checking email existence:', error);
    throw error;
  }
}

async function registerStudent(email, password) {
  try {
    const emailExists = await studentEmailExists(email);

    if (!emailExists) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newStudent = new studentModel({
        email,
        password: hashedPassword,
        userid: getEmailUsername(email)
      });

      await newStudent.save();

      console.log('Student registered successfully:', newStudent);
      return true;
    } else {
      console.log('Email already exists. Registration failed.');
      return false;
    }
  } catch (error) {
    console.error('Error registering student:', error);
    throw error;
  }
}

async function authenticateStudent(email, password) {
  try {
    const student = await studentModel.findOne({ email });

    if (student) {
      const passwordMatch = await bcrypt.compare(password, student.password);

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
    console.error('Error authenticating student:', error);
    throw error;
  }
}

async function updateStudentData(email, newData) {
  try {
    const existingStudent = await studentModel.findOne({ email });

    if (existingStudent) {
      for (const key in newData) {
        if (newData.hasOwnProperty(key)) {
          existingStudent[key] = newData[key];
        }
      }

      await existingStudent.save();

      console.log('Student data updated successfully:', existingStudent);
      return true;
    } else {
      console.log('Email not found. Update failed.');
      return false;
    }
  } catch (error) {
    console.error('Error updating student data:', error);
    throw error;
  }
}

async function deleteStudent(email) {
  try {
    const deletionResult = await studentModel.deleteOne({ email });

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

async function isStudentComplete(email) {
  try {
    const student = await studentModel.findOne({ email });

    if (student) {
      return student.complete;
    } else {
      console.log('Email not found. Check failed.');
      return false;
    }
  } catch (error) {
    console.error('Error checking "complete" field:', error);
    throw error;
  }
}

async function getStudent(email) {
  try {
    const student = await studentModel.findOne({email})
    return student
  } catch(err) {
    console.error('Error getting student:', err);
    throw err;
  }
}

async function addRoomToSDms(userid, room) {
  try {
    const user = await studentModel.findOne({ userid });

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

async function getSDmsByUsername(username) {
  try {
    const user = await studentModel.findOne({ userid: username });

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
  studentEmailExists,
  registerStudent,
  authenticateStudent,
  updateStudentData,
  deleteStudent,
  isStudentComplete,
  getStudent,
  addRoomToSDms,
  getSDmsByUsername,
  studentIDExists
}