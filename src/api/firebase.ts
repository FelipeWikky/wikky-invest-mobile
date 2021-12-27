import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { 
    FB_API_KEY, 
    FB_APP_ID, 
    FB_AUTH_DOMAIN, 
    FB_MEASUREMENT_ID, 
    FB_MESSAGING_SENDER_ID, 
    FB_PROJECT_ID, 
    FB_STORAGE_BUCKET 
} from "@env";
import 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
    apiKey: FB_API_KEY,
    authDomain: FB_AUTH_DOMAIN,
    projectId: FB_PROJECT_ID,
    appId: FB_APP_ID,
    measurementId: FB_MEASUREMENT_ID,
    messagingSenderId: FB_MESSAGING_SENDER_ID,
    storageBucket: FB_STORAGE_BUCKET
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;