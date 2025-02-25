// import { Redirect } from "expo-router";

// const Home = () => {
//   return <Redirect href="/(auth)/welcome" />;
// };

// export default Home;
import "react-native-get-random-values";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};
export default Home;
