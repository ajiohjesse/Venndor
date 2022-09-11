import UserProfileCards from "../../components/UserProfileCards";
import UserProfileList from "../../components/UserProfileList";


import client from "../../apollo-client";
import { GET_USER } from "../../graphql/queries/userQueries";

const UserProfile = ({ data }) => {
  if (!data.account) return <p> Account does not exist! </p>;

  return (
    <>
      <UserProfileCards user={data.account} />
      {data.account.store && (
        <UserProfileList products={data.account.store.products} />
      )}
    </>
  );
};

export default UserProfile;

export const getServerSideProps = async ({ params }) => {
  const username = params.username;

  const { data } = await client.query({
    query: GET_USER,
    variables: { username },
  });

  return {
    props: {
      data,
    },
  };
};
