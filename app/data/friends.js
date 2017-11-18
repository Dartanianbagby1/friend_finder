// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {friendName: "kittyt",
    frindPhoto: "kittyPic.html",
    q1: 1,
    q2: 2,
    q3: 3,
    q4: 4,
    q5: 5,
    q6: 1,
    q7: 2,
    q8: 3,
    q9: 4,
    q10: 5
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
