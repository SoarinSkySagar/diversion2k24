const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const localStrategy = require('passport-local').Strategy

const teacherFuncs = require('../models/teachers.model')
const studentFuncs = require('../models/students.model')

require('dotenv').config()

const config = {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
}

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
}

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((obj, done) => {
    done(null, obj)
})

async function verifyCallback(accessToken, refreshToken, profile, done) {
    const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;

    try {
        const teacher = await teacherFuncs.teacherEmailExists(email); 
        const student = await studentFuncs.studentEmailExists(email); 
        if (teacher) {
            console.log('Google Authentication successful for email:', email);
        } else if (student) {
            console.log('Google Authentication successful for email:', email);
        } else {
            await teacherFuncs.registerTeacher(email, process.env.IMPOSSIBLE_PWD);
            await studentFuncs.registerStudent(email, process.env.IMPOSSIBLE_PWD);
            console.log(`Created account for Google authentication with email: ${email}`);
        }
        const user = {
            id: profile.id,
            email: email,
        };
        return done(null, user);
    } catch (error) {
        console.error('Error during Google authentication:', error);
        return done(error);
    }
}

passport.use(new googleStrategy(AUTH_OPTIONS, verifyCallback))

const localConfig = {
    usernameField: 'email',
    passwordField: 'password'
}

async function localCallback(email, password, done)  {
    console.log(email, password)

    try {
        const teacher = await teacherFuncs.authenticateTeacher(email, password);
        const student = await studentFuncs.authenticateStudent(email, password);

        if (teacher) {
            console.log('Authentication successful for email:', email);
            const user = {
                id: 69420,
                email: email,
            };
            return done(null, user);
        } else if (student) {
            console.log('Authentication successful for email:', email);
            const user = {
                id: 42069,
                email: email,
            };
            return done(null, user);
        } else {
            console.log('Authentication failed. Email not found:', email);
            return done(null, false, { message: 'Incorrect email or password' });
        }
    } catch (error) {
        return done(error);
    }
}

passport.use(new localStrategy(localConfig, localCallback))

module.exports = passport