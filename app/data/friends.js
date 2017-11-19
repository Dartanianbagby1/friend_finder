// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var newFriend = [
  {friend_name: "",
    friend_photo_url: "https://www.google.com/search?q=kitty+pic&rlz=1C5CHFA_enUS750US753&tbm=isch&source=iu&pf=m&ictx=1&fir=_kk95Fpy8jVq6M%253A%252Cc8U5mkgSmZOa3M%252C_&usg=__QKv1L9XMT62_Et-IQ9Ohb96_6lU%3D&sa=X&ved=0ahUKEwik49Wfq8vXAhUU4GMKHahZDOoQ9QEILDAB#imgrc=_kk95Fpy8jVq6M:",
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
console.log('friends');

// Note how we export the array. This makes it accessible to other files using require.
module.exports = newFriend;
