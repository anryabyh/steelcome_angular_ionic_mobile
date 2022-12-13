import { Injectable } from "@angular/core";
import { resolve } from "dns";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class UserDataResolve {
    constructor(private authServise: AuthService) { }
    resolve() {
        console.log("home user");
        return this.authServise.getUserData();
    }
}
