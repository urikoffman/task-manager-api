const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true Depacreted!!
    // useFindAndModify: false Depacreted!!
})