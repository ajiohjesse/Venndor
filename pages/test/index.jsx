import { useMutation, useQuery, gql } from "@apollo/client";
import { GET_ALL_ACCOUNTS } from "../../graphql/queries/userQueries";
import {
  CREATE_ACCOUNT,
  PUBLISH_ACCOUNT,
} from "../../graphql/mutations/userMutations";
import { toast } from "react-hot-toast";

const Test = () => {
  const { data, loading, error } = useQuery(GET_ALL_ACCOUNTS);

  if (loading) return <h2>Loading. . .</h2>;
  console.log(data);

  return <div>{data && <button>get accounts</button>}</div>;
};

export default Test;
