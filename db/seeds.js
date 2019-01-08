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
    url: "data:image/jpeg;base64,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",
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
    spots: [newSpot1,newSpot2]
})

State.deleteMany({})
    .then(() => Spot.deleteMany({}))
    .then(() =>Media.deleteMany({}))
    .then(() =>Comment.deleteMany({}))
    .then(() => Comment.insertMany([newComment1,newComment2,newComment3]))
    .then(() => Media.insertMany([newMedia1,newMedia2]))
    .then(() =>Spot.insertMany([newSpot1,newSpot2]))
    .then(()=>  State.save())
    .then(() => console.log("DB SEEDED, Lets Go!!!!"))

// State.deleteMany({})
//     .then(()=>{
//         return State.create({
//             name: "Georgia",
//             spots: []
//         }).then((state)=>{
//             const newSpot = Spot.create({
//                 name: "Brook Run",
//                 location: "4770 N Peachtree Rd, Dunwoody, GA 30338",
//                 description: 'Fun park with big transitions and two awesome bowls',
//                 egm: `<div class="mapouter"><div class="gmap_canvas"><iframe width="380" height="380" id="gmap_canvas" src="https://maps.google.com/maps?q=%204770%20N%20Peachtree%20Rd%2C%20Dunwoody%2C%20GA%2030338&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net">website skins templates</a></div><style>.mapouter{text-align:right;height:380px;width:380px;}.gmap_canvas {overflow:hidden;background:none!important;height:380px;width:380px;}</style></div>`,
//                 comments: [],
//                 media: []
//             }).then((spot)=>{
//                 state.spots.push(spot)
//             })
//             const newSpot2 = Spot.create({
//                 name: "4th Ward",
//                 location: "830 Willoughby Way NE, Atlanta, GA 30312",
//                 description: 'Skatepark in the middle of Atlanata',
//                 egm: `<div class="mapouter"><div class="gmap_canvas"><iframe width="380" height="380" id="gmap_canvas" src="https://maps.google.com/maps?q=%20830%20Willoughby%20Way%20NE%2C%20Atlanta%2C%20GA%2030312&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net">website skins templates</a></div><style>.mapouter{text-align:right;height:380px;width:380px;}.gmap_canvas {overflow:hidden;background:none!important;height:380px;width:380px;}</style></div>`,
//                 comments: [],
//                 media: []
//             }).then((spot)=>{
//                 state.spots.push(spot)
//             })
//             .then((spot)=>{
//                 const newComment =
//             })
//         })

//     })


