const mongoose = require('mongoose');

const soccerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    keyPlayer: {
      type: String,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SoccerTeam', soccerSchema);
