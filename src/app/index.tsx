import colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>
          Dev
          <Text style={{ color: colors.green }}>App</Text>
        </Text>
        <Text style={styles.slogan}>O futuro da programação</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="Digite seu email" style={styles.input} />
        </View>

        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            style={styles.input}
            secureTextEntry
          />
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

        <Text style={styles.link}>
          Ainda não possui uma conta?{" "}
          <Link href="/(auth)/signup/page" style={{ color: colors.green }}>
            Cadastre-se
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor: colors.zinc,
  },
  header: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 8,
  },
  slogan: {
    fontSize: 34,
    color: colors.white,
    marginBottom: 34,
  },
  form: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 24,
    paddingLeft: 14,
    paddingRight: 14,
  },
  label: {
    marginBottom: 5,
    color: colors.zinc,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 14,
  },
  button: {
    backgroundColor: colors.green,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
  },
  buttonText: {
    fontWeight: "bold",
    color: colors.zinc,
  },
  link: {
    marginTop: 16,
    textAlign: "center",
  },
});
