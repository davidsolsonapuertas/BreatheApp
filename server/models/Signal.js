const mongoose = require('./index');
const { Schema } = mongoose;

const signalSchema = new Schema({
  type: String,
});

const Signal = mongoose.model('Signal', signalSchema);
module.exports = Signal;
