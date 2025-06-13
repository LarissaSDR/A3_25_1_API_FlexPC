import { admin } from "../services/firebaseAdmin.js"

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) return res.sendStatus(401)

  admin.auth().verifyIdToken(token)
    .then(decodedToken => {
      req.user = decodedToken 
      next()
    })
    .catch(() => res.sendStatus(403))
}

export function isAdmin(req, res, next) {
  if (req.user.tipo !== "admin") return res.sendStatus(403)
  next()
}
