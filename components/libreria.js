import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, StyleSheet } from "react-native";

class Principal extends Component {
  entrar = () => {
    const { navigation } = this.props;
    this.props.navigation.navigate("Board");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFE4B5",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
          }}
        >
          Bienvenido a la biblioteca LAMG
        </Text>
        <Image
          source={require("../imagenes/libros.jpg")}
          style={styles.loguito}
        />
        <Text>Da clic para entrar a la biblioteca</Text>
        <Button
          title="Entrar"
          onPress={() => {
            this.entrar();
          }}
        />
        <Text>Integrantes del equipo:</Text>
        <Text>Luisa Andrea Morales García</Text>
        <Image source={require("../imagenes/pingu.png")} style={styles.logo} />
        <Text>Daniel Enrique Guzman Jiménez</Text>
        <Image source={require("../imagenes/geko.png")} style={styles.login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 159,
    marginBottom: 10,
  },
  loguito: {
    width: 305,
    height: 100,
    marginBottom: 10,
  },
  login: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
});

export default Principal;
