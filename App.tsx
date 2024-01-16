import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
      <Image source={require("./image/logo.jpg")} style={styles.topImage} />
        <Text style={{ color: "gray", paddingVertical: 15 }}>Sent successfully to 
        <Text style={{fontWeight: 'bold', color: 'gray'}}> Talha Zubayer 
        </Text>
        </Text> 
        <Text style={styles.amount}> $100.00</Text>
        <View style={styles.profile}>
          <Image 
          source={require('./image/me.jpg')}
          style={styles.profileImage}
          resizeMode='cover'
          />  
          <View style={styles.profileInfo}>
              <Text 
              style={{ fontWeight: "bold", fontSize: 18 }}>
                Mst Airen Aktar
              </Text>
              <Text 
              style={{color: "gray"}}>
                airenaktar412@gmail.com
                </Text>
          </View>
        </View>
        <View style={styles.transaction}>
            <Text>
                Transaction done on {" "}
                <Text style={{ fontWeight: "bold" }}>
                    10 September 2019. 
                </Text>
            </Text>
            <Text>
                Your reference number is 894739227
            </Text>
        </View>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#406C6C',
    alignItems: 'center',
    justifyContent: 'space-between',
    weight: "100%",
    height: "100%",
    paddingVertical: 80,
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 90,
    backgroundColor: "white",
    marginHorizontal: 30,
    marginVertical: 20,
    borderRadius: 10,
    height: "100%",
  },
  topImage: {
    width: 100,
    height: 100,
  },
  amount: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 15,
    color: "#406C6C",
  },
  profile: {
    height: 60,
    paddingVertical: 15,
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  profileInfo: {
    paddingLeft: 10,
  },
  transaction: {
    paddingVertical: 15,
    marginVertical: 15,
    borderBottomColor: " lightgray",
    borderBottomWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#406C6C",
    paddingVertical: 10,
    marginVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  }, 
});
