const admin = require("firebase-admin");

let privateKey;

if( process.env.PRIVATE_KEY ) {
    privateKey = JSON.parse(process.env.PRIVATE_KEY)
} else {
    privateKey = require("./firebase-key.json")
}


 admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
 });



 function getDatabase() {
	return admin.firestore()
}

module.exports = getDatabase
