import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href={"/"} replace asChild>
        <Button title="Logout" />
      </Link>
      <Link href={"/(tabs)/(one)/details"} asChild>
        <Button title="Open Details" />
      </Link>
      <Link href={"/(tabs)/(one)/11"} asChild>
        <Button title="Open Details 11" />
      </Link>
      <Link href={"/(tabs)/(one)/22"} asChild>
        <Button title="Open Details  22" />
      </Link>
      <Link href={"/modal"} asChild>
        <Button title="Open Modal" />
      </Link>
      <Link href={"/(aux)/disclaimer"} asChild>
        <Button title="Open Disclaimer" />
      </Link>
    </View>
  );
};

export default Page;
