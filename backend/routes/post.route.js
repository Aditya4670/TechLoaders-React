const router = require("express").Router();
let Post = require("../models/post.model");

router.get("/", (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json("Error: " + err));
});

router.post("/", (req, res) => {
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const content = req.body.content;

    const newPost = new Post({
        title,
        subtitle,
        content
    });

    newPost.save()
        .then(() => res.json("Post added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json("Deleted Successfully!"))
});

router.put("/:id", (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.title = req.body.title;
            post.subtitle = req.body.subtitle;
            post.content = req.body.content;

            post.save()
                .then(() => res.json("Post Updated!"))
                .catch(err => res.status(400).json("Error: " + err));
        })
})

module.exports = router;