const express = require('express')
const session = require('express-session');
const passport = require('./config/passport-setup')
const path = require('path')
const flash = require('connect-flash');
const bodyParser = require('body-parser')

const studentFuncs = require('./models/students.model')
const teacherFuncs = require('./models/teachers.model')

const app = express()

app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
}));

app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

app.post('/new', async (req, res) => {
  const { email, password } = req.body;
  await teacherFuncs.registerTeacher(email, password);
  await studentFuncs.registerStudent(email, password)
  res.redirect('/dashboard')
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
})

const authRouter = require('./routes/auth.router')

app.use('/auth', authRouter)

app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
      const userData = {
          email: req.user.email,
          type: req.user.type,
          username: req.user.username,
          phone: req.user.phone,
          location: req.user.location
      };

      res.json(userData);
  } else {
      res.json({ message: 'You are not logged in.' });
  }
});

app.get('/profile/:query', (req, res) => {
  if (req.isAuthenticated()) {
    const query = req.params.query;
    res.status(200).json({[query]: req.user[query]})
  } else {
    res.status(403).json({error: "You are not logged in!"})
  }
})

app.get('/dashboard', async (req, res) => {
  if (req.user) {
    try {
      const tcomplete = await teacherFuncs.isTeacherComplete(req.user.email)
      const scomplete = await studentFuncs.isStudentComplete(req.user.email)

      if (tcomplete || scomplete) {
        let result
        if (tcomplete) {
          result = await teacherFuncs.getTeacher(req.user.email)
        } else {
          result = await studentFuncs.getStudent(req.user.email)
        }
        console.log(result)
        req.user.type = result.type
        req.user.username = result.username
        req.user.phone = result.phone
        req.user.location = result.location
        req.user.userid = result.userid
        req.user.dms = result.dms



        // res.send(`You are logged in. Email: ${req.user.email}. Data complete.`);
        res.redirect('/dash')
      } else {
        res.redirect('/select');
      }
    } catch (error) {
      console.error('Error checking "complete" field:', error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.redirect('/auth');
  }
})

app.get('/select', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'selection.html'))
})

app.get('/supdate', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'supdate.html'))
})

app.get('/tupdate', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tupdate.html'))
})

app.post('/scomplete', async (req, res) => {
  const { username, phone, location, class: studentClass} = req.body;
  const email = req.user.email;

  try {
    const updateResult = await studentFuncs.updateStudentData(email, {
      username,
      phone,
      location,
      class: studentClass,
      complete: true,
    });

    if (updateResult) {
      const deleteResult = await teacherFuncs.deleteTeacher(email);

      if (deleteResult) {
        res.redirect('/dashboard')
      } else {
        res.send('Student data updated successfully, but teacher entry deletion failed.');
      }
    } else {
      res.send('Failed to update student data.');
    }
  } catch (error) {
    console.error('Error completing student details:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/tcomplete', async (req, res) => {
  const { username, phone, location, max_qualification, class_subject } = req.body; 

  const email = req.user.email;

  try {
    const updateResult = await teacherFuncs.updateTeacherData(email, {
      username,
      phone,
      location,
      max_qualification,
      class_subject,
      complete: true,
    });

    if (updateResult) {
      const deleteResult = await studentFuncs.deleteStudent(email);

      if (deleteResult) {
        res.redirect('/dashboard')
      } else {
        res.send('Teacher data updated successfully, but student entry deletion failed.');
      }
    } else {
      res.send('Failed to update teacher data.');
    }
  } catch (error) {
    console.error('Error completing teacher details:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/teacher', async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.type === 'student') {
      const { location, minRating, teacherClass } = req.query;

      const teachers = await teacherFuncs.getAllTeachers(location, minRating, teacherClass);

      const simplifiedTeachers = teachers.map(teacher => ({
        email: teacher.email,
        username: teacher.username,
        phone: teacher.phone,
      }));

      res.json(simplifiedTeachers);
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  } catch (error) {
    console.error('Error retrieving teachers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/teacher/:username', async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.type === 'student') {
      const requestedUsername = req.params.username;
      const teacher = await teacherFuncs.getTeacherByID(requestedUsername)
      console.log(requestedUsername)
      if (teacher) {
        const teacherDetails = {
          email: teacher.email,
          username: teacher.username,
          phone: teacher.phone,
          location: teacher.location,
          rating: teacher.rating,
          max_qualification: teacher.max_qualification,
          class_subject: teacher.class_subject,
        };

        res.json(teacherDetails);
      } else {
        res.status(404).json({ error: 'Teacher not found' });
      }

    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  } catch (error) {
    console.error('Error retrieving teacher details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/request/:requested', (req, res) => {
  if (req.isAuthenticated() && req.user.type === 'student') {
    const teacher = req.query.r
    const student = req.user.email

    studentFuncs.createRequest(teacher, student)
    res.status(200).json({message: 'Request sent'})
  } else if (req.isAuthenticated() && req.user.type === 'teacher') {
    const teacher = req.user.email
    const student = req.query.r



    teacherFuncs.handleRequestResponse(teacher, req.query.resp, student)
    res.status(200).json({message: 'Request handled'})

  } else {
    res.status(403).json({ error: 'Forbidden' });
  }
})

const chatRouter = require('./routes/chat.router')

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use('/', chatRouter)

module.exports = app