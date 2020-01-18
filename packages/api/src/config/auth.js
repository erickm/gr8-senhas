require('dotenv/config')

export default {
  secret: process.env.HASH_SECRET,
  expiresIn: process.env.HASH_EXPIRESIN,
}
