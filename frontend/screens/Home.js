import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Color, Border, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <ScrollView>
    <View style={styles.home}>
        
        {/*Hello Andrew Beginner*/}
            <View style={[styles.infoFrame, styles.infoFramePosition]}>
            <View style={[styles.greeting, styles.statusPosition]}>
                <Text style={[styles.hello, styles.nameClr]}>Hello,</Text>
                <Text style={[styles.name, styles.nameClr]}>Andrew</Text>
            </View>     
            <Text style={[styles.status, styles.statusPosition]}>Beginner</Text>
            </View>

        {/*Week Goal*/}
            <View style={[styles.goalFrame, styles.tabBarPosition]}>
                <View style={styles.progressLine}>
                <View style={[styles.progressLineChild, styles.progressPosition]} />
                <View style={[styles.progressLineItem, styles.progressPosition]} />
                </View>
                <Text style={[styles.kmLeft, styles.kmLeftTypo]}>15 km left</Text>
                <Text style={[styles.kmDone, styles.kmLeftTypo]}>35 km done</Text>
            
                <Text style={[styles.km4, styles.km4Position]}>50 km</Text>
                <Text style={[styles.weekGoal, styles.km4Position]}>Week goal</Text>
            </View>

        {/*Current Jogging*/}
            <View style={[styles.currentActivity, styles.tabBarPosition]}>
                <Text style={[styles.kcal3, styles.textPosition]}>539 kcal</Text>
                <Text style={[styles.text, styles.textPosition]}>01:09:44</Text>
                <Text style={[styles.km3, styles.km3Typo]}>10,9 km</Text>
                <Text style={[styles.currentJogging, styles.km3Typo]}>
                Current jogging
                </Text>
            </View>

        {/*Recent Activity / All*/}
            <View style={[styles.subtitle, styles.tabBarPosition]}>
                <Text style={[styles.recentActivity, styles.map1IconPosition]}>
                Recent activity
                </Text>
            <Text style={styles.all}>All</Text>
            </View>

        {/*Recent Activity - change to components*/}
            <View style={[styles.activityFrame, styles.frameShadowBox]}>
                <View style={styles.activityhistory1Parent}>
                <View style={[styles.activityhistory1, styles.activityhistoryLayout]}>
                    <View style={[styles.data, styles.kmPosition]}>
                    <Text style={[styles.kcal, styles.kcalTypo]}>701 kcal</Text>
                    <Text style={[styles.kmhr, styles.kcalTypo]}>11,2 km/hr</Text>
                    </View>
                    
                    <Text style={[styles.km, styles.kmTypo]}>10,12 km</Text>
                    <Text style={[styles.november26, styles.kcalTypo]}>
                    November 26
                    </Text>
                    
                </View>
                <View style={styles.divider} />
                <View style={[styles.activityhistory2, styles.activityhistoryLayout]}>
                    <View style={[styles.data, styles.kmPosition]}>
                    <Text style={[styles.kcal, styles.kcalTypo]}>669 kcal</Text>
                    <Text style={[styles.kmhr, styles.kcalTypo]}>10,8 km/hr</Text>
                    </View>
                
                    <Text style={[styles.km, styles.kmTypo]}>9,89 km</Text>
                    <Text style={[styles.november26, styles.kcalTypo]}>
                    November 21
                    </Text>
                
                </View>
                <View style={styles.divider} />
                <View style={[styles.activityhistory2, styles.activityhistoryLayout]}>
                    <View style={[styles.data, styles.kmPosition]}>
                    <Text style={[styles.kcal, styles.kcalTypo]}>608 kcal</Text>
                    <Text style={[styles.kmhr, styles.kcalTypo]}>10 km/hr</Text>
                    </View>
                
                    <Text style={[styles.km, styles.kmTypo]}>9,12 km</Text>
                    <Text style={[styles.november26, styles.kcalTypo]}>
                    November 16
                    </Text>
                
                </View>
                </View>
            </View>
     

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabBarPosition: {
    width: 327,
    position: "absolute",
  },
  activityhistoryLayout: {
    width: 287,
    height: 70,
  },
  kmPosition: {
    left: 86,
    position: "absolute",
  },
  kcalTypo: {
    fontSize: FontSize.caption_size,
  },
 
  kmTypo: {
    fontWeight: "600",
  },
 
  textPosition: {
    opacity: 0.9,
    top: 34,
    color: Color.lightGrey,
    letterSpacing: 0.1,
    fontSize: FontSize.caption_size,
    position: "absolute",
  },
  km3Typo: {
    fontSize: FontSize.title2_size,
    top: 17,
    color: Color.lightGrey,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0.1,
    position: "absolute",
  },
  
  infoFramePosition: {
    width: 375,
    position: "absolute",
  },
  statusPosition: {
    left: 76,
    position: "absolute",
  },
  nameClr: {
    color: Color.lightGrey,
    textAlign: "left",
    letterSpacing: 0.1,
  },
  progressPosition: {
    borderRadius: Border.br_9xs,
    height: 8,
    left: 0,
    top: 0,
    position: "absolute",
  },
  kmLeftTypo: {
    fontWeight: "500",
    top: 65,
    fontSize: FontSize.title2_size,
    color: Color.dark,
    letterSpacing: 0.1,
    position: "absolute",
  },
  km4Position: {
    top: 24,
    fontSize: FontSize.title1_size,
    textAlign: "left",
    letterSpacing: 0.1,
    position: "absolute",
  },
  kmhr: {
    marginLeft: 8,
    opacity: 0.7,
    textAlign: "left",
    color: Color.dark,
    letterSpacing: 0.1,
  },
  data: {
    top: 56,
    flexDirection: "row",
  },
 
  km: {
    fontSize: FontSize.title1_size,
    top: 27,
    textAlign: "left",
    color: Color.dark,
    letterSpacing: 0.1,
    left: 86,
    position: "absolute",
  },
  november26: {
    top: 2,
    opacity: 0.7,
    textAlign: "left",
    color: Color.dark,
    letterSpacing: 0.1,
    left: 86,
    position: "absolute",
  },
 
  activityhistory1: {
    height: 70,
  },
  divider: {
    width: 200,
    height: 1,
    marginTop: 12,
    opacity: 0.1,
    backgroundColor: Color.dark,
  },
  activityhistory2: {
    marginTop: 12,
    height: 70,
  },
  activityhistory1Parent: {
    alignItems: "center",
  },
  activityFrame: {
    top: 409,
    padding: 20,
    left: 24,
    position: "absolute",
  },
  recentActivity: {
    fontWeight: "600",
    fontSize: FontSize.title1_size,
    textAlign: "left",
    color: Color.dark,
    letterSpacing: 0.1,
    position: "absolute",
  },
  all: {
    left: 310,
    textAlign: "right",
    color: Color.primary,
    top: 0,
    fontSize: FontSize.title1_size,
    letterSpacing: 0.1,
    position: "absolute",
  },
  subtitle: {
    top: 376,
    height: 17,
  },
  kcal3: {
    left: 257,
    textAlign: "right",
  },
  text: {
    left: 80,
    textAlign: "left",
  },
  km3: {
    left: 257,
  },
  currentJogging: {
    left: 80,
  },
 
  currentActivity: {
    top: 284,
    borderRadius: 30,
    height: 64,
    backgroundColor: Color.primary,
    overflow: "hidden",
  },
  hello: {
    fontSize: FontSize.title1_size,
  },
  name: {
    marginLeft: 2,
    fontWeight: "600",
    fontSize: FontSize.title1_size,
  },
  greeting: {
    top: 72,
    flexDirection: "row",
  },
 
  status: {
    top: 91,
    opacity: 0.8,
    color: Color.lightGrey,
    textAlign: "left",
    letterSpacing: 0.1,
    fontSize: FontSize.caption_size,
  },
  infoFrame: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    height: 232,
    backgroundColor: Color.primary,
    top: 0,
    overflow: "hidden",
  },
  progressLineChild: {
    width: 279,
    borderRadius: Border.br_9xs,
    opacity: 0.1,
    backgroundColor: Color.dark,
  },
  progressLineItem: {
    width: 210,
    backgroundColor: Color.primary,
  },
  progressLine: {
    top: 88,
    height: 8,
    width: 279,
    left: 24,
    position: "absolute",
  },
  kmLeft: {
    left: 245,
    textAlign: "right",
    opacity: 0.7,
  },
  kmDone: {
    left: 25,
    textAlign: "left",
  },
 
  km4: {
    left: 104,
    fontWeight: "700",
    color: Color.primary,
  },
  weekGoal: {
    fontWeight: "600",
    color: Color.dark,
    left: 24,
  },
  goalFrame: {
    top: 136,
    borderStyle: "solid",
    borderColor: "rgba(93, 99, 209, 0.1)",
    borderWidth: 3,
    height: 120,
    shadowOpacity: 1,
    elevation: 28,
    shadowRadius: 28,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(46, 49, 118, 0.1)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 782,
    height: 30,
  },
  
  rightSide: {
    right: 15,
    width: 67,
    height: 11,
    top: 17,
    position: "absolute",
  },
 
  statusBar: {
    height: 44,
    top: 0,
  },
  home: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    backgroundColor: Color.lightGrey,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Home;
