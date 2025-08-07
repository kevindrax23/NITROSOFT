// Import the functions you need from the SDKs you need
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth ,onAuthStateChanged, signOut, User } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_iYpje0F17fF-O26jk-d9ImAEc2fCP_A",
  authDomain: "nitroedu-bbe53.firebaseapp.com",
  databaseURL: "https://nitroedu-bbe53-default-rtdb.firebaseio.com",
  projectId: "nitroedu-bbe53",
  storageBucket: "nitroedu-bbe53.firebasestorage.app",
  messagingSenderId: "758285076680",
  appId: "1:758285076680:web:e99e0cfe93748f1daebdfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  getAuthInstance() {
    return auth;
  }
// Devuelve una promesa que resuelve con el usuario actual (o null)
  currentUser(): Promise<User | null> {
    return new Promise((resolve) => {
      const unsub = onAuthStateChanged(auth, (user) => {
        resolve(user);
        unsub();
      });
    });
  }

  // Método auxiliar para saber si hay sesión activa
  async isAuthenticated(): Promise<boolean> {
    const user = await this.currentUser();
    return user != null;
  }

  // Cerrar sesión
  async logout(): Promise<void> {
    await signOut(auth);
  }
}






