import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false // Remove todos os cabeçalhos
      }}
    />
  );
}