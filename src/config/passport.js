import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { PersonnelService } from "../services";

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "phone",
      passwordField: "password",
      passReqToCallback: true
    },
    PersonnelService.login
  )
);
