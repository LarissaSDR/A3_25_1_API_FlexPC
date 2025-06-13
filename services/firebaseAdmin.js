import admin from "firebase-admin"
import fs from "fs"

const serviceAccount = JSON.parse(
  fs.readFileSync("./services/firebase-admin-credentials.json", "utf8")
)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export { admin }
