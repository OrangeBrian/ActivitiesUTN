const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const ActivitySchema = new Scheme({

    creator: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now },

});

const Activity = mongoose.model ('activity', ActivitySchema);

module.exports = Activity;