const mongoose = require('mongoose')
const Schema = mongoose.Schema
//MODELO DE PELI
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    director: {
        type: String
    },
    stars: {
        type: [String]
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: {
        type: [String]
    }
})
//Le decimos a Mongoose que genere el modelo Movie y lo exportamos
module.exports=mongoose.model('Movie', movieSchema)
//
