import {
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";
import { REGISTER_USER } from "../graphql/mutations";
import { GET_PRODUCTS } from "../graphql/queries";
import { NEW_NOTIFICATION } from "../graphql/subscriptions";

export const useCreateUser = () => {
  const [createUser, { loading, error, data }] = useMutation(REGISTER_USER, {
    // variables can also be passed here
    // variables: {
    //     ...variables
    // }
  });
  //   variables such as params can be passed inside the useMutation options or in createUser functions i.e.
  //   createUser({
  //     variables: {
  //         ...variables
  //     }
  // })
  return {
    createUser,
    loading,
    error,
    data,
  };
};

// instant querying data
export const useGetProducts = () => {
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS);
  return { data, loading, error, refetch };
};

// query data by user action
export const useLazyGetProducts = () => {
  const [fetchProducts, { data, loading, error, refetch }] =
    useLazyQuery(GET_PRODUCTS);
  return { data, loading, error, refetch, fetchProducts };
};

export const useGetRealTimeNotifications = () => {
  const { data, loading, error } = useSubscription(NEW_NOTIFICATION);
  return { data, loading, error };
};
