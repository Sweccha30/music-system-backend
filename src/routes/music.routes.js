const express = require('express');
const musicController = require("../controllers/music.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require('multer');



const storage = multer.memoryStorage();      // RAM me file store hogi
const upload = multer({ storage });          //imp hai

const router = express.Router();

console.log(musicController);
console.log(musicController.createAlbum);
router.post(
  "/upload", authMiddleware.authArtist,
  upload.single("music"),
  musicController.createMusic
);

router.post("/album",authMiddleware.authArtist, musicController.createAlbum)            //authartist middleware h -->multer for storage

router.get("/", authMiddleware.authUser, musicController.getAllMusics)
router.get("/albums", authMiddleware.authUser, musicController.getAllAlbums)
router.get("/albums/:albumId", authMiddleware.authUser, musicController.getAlbumById)     //album by id

module.exports = router;