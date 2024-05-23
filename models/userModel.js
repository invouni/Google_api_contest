const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://vbhv15:vaibhav@cluster0.pyiue9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log("successfully connected to database")
}).catch((err) => {
  console.log(err.message + "error connecting database");
  console.log(err);
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: false,
    default: "Vaibhav Gupta"
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: false,
    default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fblue-color&psig=AOvVaw1lU8wTlW4oe_RBIVenVfWN&ust=1716398711325000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICK-s6hn4YDFQAAAAAdAAAAABAE"
  },
  points: {
    type: Number,
    required: false,
    default: 0
  },
  badges: {
    type: Array,
    required: false,
    default: []
  },
  email:{
    type:String,
    required: true,
  }
})

const model = mongoose.model("userData",userSchema)

module.exports = model;