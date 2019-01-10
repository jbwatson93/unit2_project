const State = require('../models/State')
const Spot = require('../models/Spot')
const Media = require('../models/Media')
const Comment = require('../models/Comment')
const mongoose = require('../db/connection')

const newComment1 = new Comment({
    author: "Young Sk8r",
    content: "I love this park, i shred sooo much gnar there"
})

const newComment2 = new Comment({
    author: "Hippy Man1969",
    content: "chill park dude"
})

const newComment3 = new Comment({
    author: "Karen Lazy",
    content: "I love skating the bowl"
})

const newMedia1 = new Media({
    url: "https://c1.staticflickr.com/7/6026/5906800274_2f885b5680.jpg",
    postedBy: "jerry Garcia"
})

const newMedia2 = new Media({
    url: "http://www.jmwilkerson.com/wp-content/uploads/2013/12/Brookrun-300x200.jpg",
    postedBy: "Tony Hawk"
})

const newSpot1 = new Spot({
    name: "Brook Run",
    location: "4770 N Peachtree Rd, Dunwoody, GA 30338",
    description: 'Fun park with big transitions and two awesome bowls',
    egm: `<div class="mapouter"><div class="gmap_canvas"><iframe width="380" height="380" id="gmap_canvas" src="https://maps.google.com/maps?q=%204770%20N%20Peachtree%20Rd%2C%20Dunwoody%2C%20GA%2030338&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net">website skins templates</a></div><style>.mapouter{text-align:right;height:380px;width:380px;}.gmap_canvas {overflow:hidden;background:none!important;height:380px;width:380px;}</style></div>`,
    comments: [newComment1, newComment2],
    media: [newMedia2]
})

const newSpot2 = new Spot({
    name: "4th Ward",
    location: "830 Willoughby Way NE, Atlanta, GA 30312",
    description: 'Skatepark in the middle of Atlanata',
    egm: `<div class="mapouter"><div class="gmap_canvas"><iframe width="380" height="380" id="gmap_canvas" src="https://maps.google.com/maps?q=%20830%20Willoughby%20Way%20NE%2C%20Atlanta%2C%20GA%2030312&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net">website skins templates</a></div><style>.mapouter{text-align:right;height:380px;width:380px;}.gmap_canvas {overflow:hidden;background:none!important;height:380px;width:380px;}</style></div>`,
    comments: [newComment3],
    media: [newMedia1]
})

const newState1 = new State({
    name: "Georgia",
    spots: [newSpot1, newSpot2]
})
const allStates = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']



State.deleteMany({})
    .then(() => Spot.deleteMany({}))
    .then(() => Media.deleteMany({}))
    .then(() => Comment.deleteMany({}))
    .then(() => Comment.insertMany([newComment1, newComment2, newComment3]))
    .then(() => Media.insertMany([newMedia1, newMedia2]))
    .then(() => Spot.insertMany([newSpot1, newSpot2]))
    .then(() => newState1.save())
    .then(()=>{
        allStates.forEach((stateName)=>{
            State.create({
                name: stateName,
                spots: []
            }).then((newState)=>{
                newState.save()
            })
        })
    })
    .then(() => console.log("DB SEEDED, Lets Go!!!!"))
    // .then(()=> mongoose.connection.close())