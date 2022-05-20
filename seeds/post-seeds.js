const { Post } = require('../models');

const postData = [
    {
        title: "End of an Era",
        post_content: `The company announced Tuesday that it will discontinue the iPod Touch, the last remnant of a product line that first went on sale in October 2001. The touch-screen model, which launched in 2007, will remain on sale until supplies run out.`,
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts; 