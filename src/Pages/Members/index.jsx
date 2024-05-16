import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import MembershipsHeroSection from "../../Components/MembershipHeroSection";
import Memberships from "../../Components/Memberships";
import MembershipForm from "../../Components/MembershipForm";
import WriteUp from "../../Components/WriteUps";

export default function Members() {
  return (
    <div className="members">
      <MembershipsHeroSection />
      <WriteUp writeUp={"SEAMLESS, RELIABLE TRAVEL ON THE WORLD'S LEADING BUSINESS JET SERVICE."} buttonLetters={'DESIGN YOUR MEMBERSHIP'}/>
      <Memberships />
      <MembershipForm />
    </div>
  );
}
