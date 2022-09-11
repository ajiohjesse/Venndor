import Head from "next/head";
import ProfileList from "../../components/ProfileList";
import ProfileCards from "../../components/ProfileCards";

const Profile = () => {
  return (
    <>
      <ProfileCards />
      <ProfileList />
    </>
  );
};

export default Profile;
