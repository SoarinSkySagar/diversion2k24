const express = require('express')
const passport = require('passport')
const path = require('path')
const socketIO = require('socket.io');
const teacherFuncs = require('../models/teachers.model')
const studentFuncs = require('../models/students.model')
const { getRemainingString, getPartBeforeSubstring } = require('../services/userid')
const chatFuncs = require('./../models/chats.model')

const chatRouter = express.Router()

chatRouter.get('/chat/:room', async (req, res) => {
    if (req.isAuthenticated() && req.params.room.includes(req.user.userid)) {
        if (!req.user.dms.includes(req.params.room)) {
            let studentID
            let teacherID

            if (req.user.type === 'student') {
                studentID = req.user.userid
                teacherID = getPartBeforeSubstring(req.params.room, studentID)
                console.log('teacher id requested by student is:',teacherID)
                if (!await teacherFuncs.teacherIDExists(teacherID)) {
                    res.status(404).json({error: 'teacher not found'})
                    return
                }
            } else {
                teacherID = req.user.userid
                studentID = getRemainingString(req.params.room, teacherID)
                console.log('student id requested by teacher is:',studentID)
                if (!await studentFuncs.studentIDExists(studentID)) {
                    res.status(404).json({error: 'student not found'})
                    return
                }
            }
    
            await teacherFuncs.addRoomToTDms(teacherID, req.params.room)
            await studentFuncs.addRoomToSDms(studentID, req.params.room)
            await chatFuncs.createRoom(req.params.room)
    
            if (req.user.type === 'student') {
                req.user.dms = await studentFuncs.getSDmsByUsername(studentID)
            } else {
                req.user.dms = await teacherFuncs.getTDmsByUsername(teacherID)
            }
            // res.status(200).json({resolved: 'dm created and access granted'})
            res.sendFile(path.join(__dirname, '..', 'public', 'chat.html'))
        } else {
            // res.status(200).json({resolved: 'dm already exists and you have access'})
            res.sendFile(path.join(__dirname, '..', 'public', 'chat.html'))
        }
    } else {
        res.status(401).json({error: 'forbidden'})
    }
})

chatRouter.get('/chat', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({dms: req.user.dms})
    } else {
        res.status(401).json({error: 'forbidden'})
    }
})



module.exports = chatRouter