const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://Mirzamurod:microlab1M@musicproject.rxwqn.mongodb.net/new-music-project?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB