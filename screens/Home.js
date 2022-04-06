// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import List from "../components/List";
import SearchBar from "../components/SearchBar";
import glycemicPrunedData from "../data/glycemic_pruned.json";

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api
  useEffect(() => {
    const getData = async () => {
      console.log("glycemicPrunedData:" + JSON.stringify(glycemicPrunedData));
      setFakeData(glycemicPrunedData);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Glycemic Index</Text>}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {!fakeData ? (
        <ActivityIndicator size="large" />
      ) : (
        <List
          searchPhrase={searchPhrase}
          data={fakeData}
          setClicked={setClicked}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
