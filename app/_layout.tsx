import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2D3748",
        },
        headerTintColor: "#CBD5E0",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        animation: "slide_from_right",
        animationDuration: 500,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Login", headerShown: false }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="metrics" options={{ presentation: "modal" }} />
    </Stack>
  );
};

export default StackLayout;
