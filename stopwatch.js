import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 600);
    const seconds = Math.floor((time % 600) / 10);
    const milliseconds = time % 10;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds}`;
  };

  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    setIsPaused(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
      <Text style={styles.buttonsT}>Stopwatch 67-443</Text>
        <Text style={styles.timerText}>{formatTime(time)}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, isRunning ? styles.disabled : styles.start]}
          onPress={startTimer}
          disabled={isRunning}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pause]}
          onPress={pauseTimer}
          disabled={!isRunning}
        >
          <Text style={styles.buttonText}>
            {isPaused ? "Resume" : "Pause"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.reset]}
          onPress={resetTimer}
          disabled={!isRunning}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Ensures content starts at the top
    alignItems: "center",
    paddingTop: 300, // Adjusts padding for desired positioning
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timerContainer: {
    backgroundColor: "#EAEAEA",
    padding: 30,
    borderRadius: 150,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  buttonsT: {
    fontWeight: "bold",

  
    width: "80%",
    paddingBottom:10,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 20, // Consistent button height
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  start: {
    backgroundColor: "#4CAF50",
  },
  pause: {
    backgroundColor: "#2196F3",
  },
  reset: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
    paddingBottom:40,    
  },
  disabled: {
    backgroundColor: "#BDBDBD",
  },
});
