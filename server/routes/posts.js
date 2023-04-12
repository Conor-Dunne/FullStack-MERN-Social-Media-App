import { Express } from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/post.js";
import { verifyToken } from "../middleware/auth.js";

const router = Express.router();

// READ

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts". verifyToken, getUserPosts);


// UPDATE

router.patch("/:id/", verifyToken, likePost);

export default router;

