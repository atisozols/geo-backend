const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed'));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
