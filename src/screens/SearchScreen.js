import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    //price is going to be equal to $ or $$ or $$$
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
      <ResultsList results={filterResultsByPrice("$")} title="CostEffective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList
        results={filterResultsByPrice("$$$")}
        title="Hey Big Spender"
      />
      <ResultsList
        results={filterResultsByPrice("$$$$")}
        title="Too Rich to Care"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
