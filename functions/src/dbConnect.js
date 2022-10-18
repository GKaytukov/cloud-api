import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import  serviceAccount from "../secrets.js";

export function dbConnect() {
    if(!getApps().length) {
        initializeApp ({
            credential: cert(serviceAccount)
        })

    }
    return getFirestore()
}