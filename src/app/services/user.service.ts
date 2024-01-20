import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword } from "@angular/fire/auth";

@Injectable({ providedIn: "root" })
export class UserService {
    constructor(private auth: Auth) { }

    login({ email, password }: any) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    logout() {
        return signOut(this.auth);
    }

    register({ email, password }: any) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    updatePassword(newPassword: string) {
        const user = this.auth.currentUser;
        
        if (user) {
            return updatePassword(user, newPassword);
        } else {
            return Promise.reject("No hay usuario autenticado.");
        }
    }
}
