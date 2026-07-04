const { ImageKit } = require("@imagekit/nodejs");

console.log("Private Key:", process.env.IMAGEKIT_PRIVATE_KEY ? "Found" : "Missing");
console.log("Public Key:", process.env.IMAGEKIT_PUBLIC_KEY ? "Found" : "Missing");
console.log("URL Endpoint:", process.env.IMAGEKIT_URL_ENDPOINT ? "Found" : "Missing");

const ImageKitClient = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file) {
  try {
    const result = await ImageKitClient.files.upload({
      file,
      fileName: `music_${Date.now()}`,
      folder: "/SPOTIFY-CLONE/music",
    });

    return result;
  } catch (error) {
    console.error("ImageKit Upload Error:", error);
    throw error;
  }
}

module.exports = { uploadFile };