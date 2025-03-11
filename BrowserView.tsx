import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";
import BottomBarIcon from "../Components/BottomBarIcon";

const BrowserView = () => {
  const [currentUrl, setCurrentUrl] = useState("https://google.com");
  const [url, setUrl] = useState("");
  const webviewRef = useRef<WebView>(null);

  const handleLoadUrl = () => {
    setCurrentUrl(url);
  };

  const handleBack = () => {
    webviewRef.current?.goBack();
  };

  const handleForward = () => {
    webviewRef.current?.goForward();
  };

  const handleReload = () => {
    webviewRef.current?.reload();
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.urlBar}>
        <Text style={styles.label}>URL:</Text>
        <TextInput
          style={styles.input}
          value={url}
          onChangeText={setUrl}
          placeholder="Enter URL"
          keyboardType="url"
          returnKeyType="go"
          onSubmitEditing={handleLoadUrl}
        />
      </View>

      {/* WebView */}
      <WebView 
        ref={webviewRef}
        source={{ uri: currentUrl }} 
        style={{ flex: 1 }} 
      />

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <BottomBarIcon iconName="arrow-back" onPress={handleBack} />
        <BottomBarIcon iconName="arrow-forward" onPress={handleForward} />
        <BottomBarIcon iconName="refresh" onPress={handleReload} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  urlBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "white",
  },
  label: {
    fontSize: 16,
    marginRight: 8,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 7,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "white",
  },
});

export default BrowserView;
