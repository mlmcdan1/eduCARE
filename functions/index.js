const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.setAdminClaim = functions.https.onCall(async (data, context) => {
  try {
    if (!context.auth || !context.auth.token.admin) {
      throw new functions.https.HttpsError('unauthenticated', 'Unauthorized');
    }

    await admin.auth().setCustomUserClaims(data.uid, { isBusinessUser: true });

    return { success: true };
  } catch (error) {
    console.error(error);
    throw new functions.https.HttpsError('internal', 'Error setting custom claims');
  }
});
