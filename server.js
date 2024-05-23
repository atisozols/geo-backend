const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const corsOptions = require('./config/corsOptions');
app.use(cors(corsOptions));
app.use(express.json()); // for parsing POST request body
const PORT = process.env.PORT || 3000;
const Path = require('./model/Path');
const requestIP = require('request-ip');
const quizes = require('./questions');
// const bothPaths = [("path1", false, false), ("path2", false, false)]

connectDB();

function getRandomQuizzes(numberOfQuizzes) {
  const shuffled = quizes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfQuizzes);
}

app.get('/', async (req, res) => {
  try {
    const ipAddress = requestIP.getClientIp(req);
    const foundUser = await Path.findOne({ ip: ipAddress });

    if (!foundUser) {
      const randomQuizzes = getRandomQuizzes(8);
      const newUser = await Path.create({
        ip: ipAddress,
        path: { questions: randomQuizzes },
      });
      res.json({ user: newUser, next: 0 });
    } else {
      let notFoundIndex = -1;

      for (let i = 0; i < foundUser.path.questions.length; i++) {
        if (
          !foundUser.path.questions[i].found ||
          !foundUser.path.questions[i].answered
        ) {
          notFoundIndex = i;
          break;
        }
      }

      res.json({
        user: foundUser,
        next: notFoundIndex < 8 ? notFoundIndex : null,
      });
    }
  } catch (error) {
    console.error('GET / error:', error.message);
    res.status(400).send({ message: error.message });
  }
});

// set question with id to found if all is valid
app.get('/:id', async (req, res) => {
  try {
    const ipAddress = requestIP.getClientIp(req);
    const foundUser = await Path.findOne({ ip: ipAddress });

    if (!foundUser) {
      const randomQuizzes = getRandomQuizzes(8);
      const newUser = await Path.create({
        ip: ipAddress,
        path: { questions: randomQuizzes },
      });
      res.json({ user: newUser, next: 0 });
    } else {
      // user is in the correct spot
      let notFoundIndex = -1;

      for (let i = 0; i < foundUser.path.questions.length; i++) {
        if (
          !foundUser.path.questions[i].found ||
          !foundUser.path.questions[i].answered
        ) {
          notFoundIndex = i;
          break;
        }
      }

      if (notFoundIndex == req.params.id) {
        foundUser.path.questions[notFoundIndex].found = true;
        await foundUser.save();
      }

      res.json({
        user: foundUser,
        next: notFoundIndex < 8 ? notFoundIndex : null,
      });
    }
  } catch (error) {
    console.error('GET /:id error:', error.message);
    res.status(400).send({ message: error.message });
  }
});

app.post('/:id', async (req, res) => {
  try {
    const ipAddress = requestIP.getClientIp(req);
    const foundUser = await Path.findOne({ ip: ipAddress });

    if (!foundUser) {
      // needs to be sent to the start location
      res.status(400).json({ message: 'Bad request: user not found' });
    } else {
      // user is in the correct spot
      let notFoundIndex = -1;

      for (let i = 0; i < foundUser.path.questions.length; i++) {
        if (
          !foundUser.path.questions[i].found ||
          !foundUser.path.questions[i].answered
        ) {
          notFoundIndex = i;
          break;
        }
      }

      if (notFoundIndex == req.params.id) {
        if (foundUser.path.questions[notFoundIndex].found) {
          foundUser.path.questions[notFoundIndex].answered = true;
          await foundUser.save();
          notFoundIndex += 1;
        }
      }

      res.json({
        user: foundUser,
        next: notFoundIndex < 8 ? notFoundIndex : null,
      });
    }
  } catch (error) {
    console.error('POST /:id error:', error.message);
    res.status(400).send({ message: error.message });
  }
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
