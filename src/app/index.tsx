import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerIcon}>+</Text>
        <Text style={styles.username}>leon.kennedy</Text>
        <Text style={styles.headerIcon2}>☰</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/images/leon.png")}
          style={styles.profileImage}
        />
        <Text style={styles.displayName}>Leon S. Kennedy</Text>
        <Text style={styles.pronouns}>he/him</Text>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.profileButton}>
          <Text style={styles.buttonText}>Following</Text>
        </View>
        <View style={styles.profileButton}>
          <Text style={styles.buttonText}>Message</Text>
        </View>
      </View>

      <View style={styles.highlightsSection}>
        <Image
          source={require("../../assets/images/highlights.png")}
          style={styles.highlightImage}
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>11</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1.1M</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>11</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111a1a",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 7,
    paddingLeft: 20,
  },
  headerIcon: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  headerIcon2: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    paddingRight: 20,
  },
  username: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  profileSection: {
    flexDirection: "row",
    marginTop: 50,
    paddingLeft: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 100,
  },
  displayName: {
    color: "white",
    fontSize: 18,
    paddingLeft: 20,
    marginTop: -70,
  },
  pronouns: {
    color: "grey",
    fontSize: 14,
    marginTop: -70,
    paddingLeft: 10,
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: 80,
    marginTop: -100,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    color: "white",
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  profileButton: {
    backgroundColor: "#353535",
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  highlightsSection: {
    flexDirection: "row",
    marginTop: 20,
    paddingLeft: 20,
  },
  highlightImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
});
