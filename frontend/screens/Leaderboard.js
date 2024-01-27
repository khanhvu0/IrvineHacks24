import * as React from "react";
import { Image, StyleSheet, View, Text ,ScrollView} from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Leaderboard = () => {
  return (
    <ScrollView>
    <View style={styles.leaderboard}>
      <View style={[styles.statusBarIphone13Mini, styles.headerPosition]}>
        <View style={[styles.indicators, styles.personFlexBox]}>
          {/* <Image
            style={styles.elementsSignal}
            resizeMode="cover"
            source={require("../assets/elements--signal.png")}
          />
          <Image
            style={[styles.elementsConnection, styles.elementsSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/elements--connection.png")}
          /> */}
          <View style={[styles.elementsBattery, styles.elementsSpaceBlock]}>
            <View style={[styles.border, styles.borderPosition]} />
            {/* <Image
              style={[styles.capIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cap.png")}
            /> */}
            <View style={styles.capacity} />
          </View>
        </View>
        {/* <Image
          style={styles.micCam}
          resizeMode="cover"
          source={`Mic & Cam_4`}
        /> */}
        
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.groupItemPosition]} />
        <View style={styles.rectangleParent}>
          <View style={[styles.headerChild, styles.groupItemPosition]} />
          {/* <Image
            style={[styles.iconback, styles.iconbackPosition]}
            resizeMode="cover"
            source={require("../assets/iconback.png")}
          /> */}
        </View>
        <Text style={[styles.title, styles.textTypo3]}>Leaderboard</Text>
        {/* <Image
          style={[styles.headerItem, styles.headerItemPosition]}
          resizeMode="cover"
          source={require("../assets/group-20031.png")}
        /> */}
        <View style={[styles.rectangleGroup, styles.headerItemPosition]}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={styles.iconbackPosition}>
            {/* <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            /> */}
            <View style={styles.iconlivechatChild} />
          </View>
        </View>
      </View>
      <View style={[styles.leaderboardChild, styles.headerPosition]} />
      <View style={styles.autoLayoutVertical}>
        <View style={styles.groupViewLayout}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <Text style={[styles.pts, styles.ptsPosition]}>36 pts</Text>
          <View style={[styles.rank, styles.rankFlexBox]} />
          <Text style={[styles.text, styles.textTypo1]}>4</Text>
          <View style={[styles.person, styles.personFlexBox]}>
            {/* <Image
              style={styles.personChild}
              resizeMode="cover"
              source={require("../assets/ellipse-56.png")}
            /> */}
            <Text style={[styles.garyLee, styles.garySpaceBlock]}>
              Marsha Fisher
            </Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <Text style={[styles.pts, styles.ptsPosition]}>35 pts</Text>
          <View style={[styles.rank, styles.rankFlexBox]} />
          <Text style={[styles.text1, styles.textText]}>5</Text>
          <View style={[styles.person, styles.personFlexBox]}>
            {/* <Image
              style={styles.personChild}
              resizeMode="cover"
              source={require("../assets/ellipse-561.png")}
            /> */}
            <Text style={[styles.garyLee, styles.garySpaceBlock]}>
              Juanita Cormier
            </Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.groupChild2, styles.groupViewLayout]} />
          <Text style={[styles.pts2, styles.pts2Typo]}>34 pts</Text>
          <View style={[styles.rank, styles.rankFlexBox]} />
          <Text style={[styles.text2, styles.pts2Typo]}>6</Text>
          <View style={[styles.person, styles.personFlexBox]}>
            {/* <Image
              style={styles.personChild}
              resizeMode="cover"
              source={require("../assets/ellipse-562.png")}
            /> */}
            <Text style={[styles.garyLee2, styles.pts2Typo]}>You</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <Text style={[styles.pts, styles.ptsPosition]}>33 pts</Text>
          <View style={[styles.rank, styles.rankFlexBox]} />
          <Text style={[styles.text3, styles.textText]}>7</Text>
          <View style={[styles.person, styles.personFlexBox]}>
            {/* <Image
              style={styles.personChild}
              resizeMode="cover"
              source={require("../assets/ellipse-563.png")}
            /> */}
            <Text style={[styles.garyLee, styles.garySpaceBlock]}>
              Tamara Schmidt
            </Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <Text style={[styles.pts, styles.ptsPosition]}>32 pts</Text>
          <View style={[styles.rank, styles.rankFlexBox]} />
          <Text style={[styles.text4, styles.textTypo1]}>8</Text>
          <View style={[styles.person, styles.personFlexBox]}>
            {/* <Image
              style={styles.personChild}
              resizeMode="cover"
              source={require("../assets/ellipse-564.png")}
            /> */}
            <Text style={[styles.garyLee, styles.garySpaceBlock]}>
              Ricardo Veum
            </Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <Text style={[styles.pts5, styles.ptsPosition]}>31 pts</Text>
          <View style={[styles.rank, styles.rankFlexBox]} />
          <Text style={[styles.text5, styles.textText]}>9</Text>
          <View style={[styles.person, styles.personFlexBox]}>
            {/* <Image
              style={styles.personChild}
              resizeMode="cover"
              source={require("../assets/ellipse-565.png")}
            /> */}
            <Text style={[styles.garyLee, styles.garySpaceBlock]}>
              Gary Sanford
            </Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <Text style={[styles.pts, styles.ptsPosition]}>30 pts</Text>
          <View style={[styles.rank, styles.rankFlexBox]} />
          <Text style={[styles.text6, styles.textTypo1]}>10</Text>
          <View style={[styles.person, styles.personFlexBox]}>
            {/* <Image
              style={styles.personChild}
              resizeMode="cover"
              source={require("../assets/ellipse-566.png")}
            /> */}
            <Text style={[styles.garyLee, styles.garySpaceBlock]}>
              Becky Bartell
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.leaderboardInner}>
        <View style={[styles.ellipseParent, styles.groupChild7Position]}>
          {/* <Image
            style={[styles.groupChild7, styles.groupChild7Position]}
            resizeMode="cover"
            source={require("../assets/ellipse-55.png")}
          /> */}
          <View style={[styles.ellipseGroup, styles.frameChildLayout]}>
            {/* <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-78.png")}
            /> */}
            <Text style={[styles.text7, styles.textTypo1]}>1</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={[styles.ellipseContainer, styles.ellipsePosition]}>
          {/* <Image
            style={[styles.groupChild8, styles.ellipsePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-567.png")}
          /> */}
          <View style={[styles.ellipseParent1, styles.ellipseParentPosition]}>
            {/* <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-781.png")}
            /> */}
            <Text style={[styles.text8, styles.textTypo]}>2</Text>
          </View>
        </View>
      </View>
      <View style={[styles.leaderboardInner1, styles.frameViewLayout]}>
        <View style={[styles.ellipseParent2, styles.ellipsePosition]}>
          {/* <Image
            style={[styles.groupChild8, styles.ellipsePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-57.png")}
          /> */}
          <View style={[styles.ellipseParent3, styles.ellipseParentPosition]}>
            {/* <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-782.png")}
            /> */}
            <Text style={[styles.text9, styles.textTypo]}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.bryanWolfParent}>
        <Text style={[styles.bryanWolf, styles.ptsLayout]}>Bryan Wolf</Text>
        <View style={[styles.iconmenuworkoutParent, styles.personFlexBox]}>
          {/* <Image
            style={styles.iconmenuworkout}
            resizeMode="cover"
            source={require("../assets/iconmenuworkout.png")}
          /> */}
          <Text style={styles.pts7}>43 pts</Text>
        </View>
      </View>
      <View style={[styles.meghanJesParent, styles.parentPosition]}>
        <Text style={[styles.meghanJes, styles.ptsLayout]}>Meghan Jes...</Text>
        <View style={[styles.iconmenuworkoutParent, styles.personFlexBox]}>
          {/* <Image
            style={styles.iconmenuworkout}
            resizeMode="cover"
            source={require("../assets/iconmenuworkout1.png")}
          /> */}
          <Text style={styles.pts7}>40 pts</Text>
        </View>
      </View>
      <View style={[styles.alexTurnerParent, styles.parentPosition]}>
        <Text style={[styles.alexTurner, styles.ptsLayout]}>Alex Turner</Text>
        <View style={[styles.iconmenuworkoutParent, styles.personFlexBox]}>
          {/* <Image
            style={styles.iconmenuworkout}
            resizeMode="cover"
            source={require("../assets/iconmenuworkout2.png")}
          /> */}
          <Text style={styles.pts7}>38 pts</Text>
        </View>
      </View>
      {/* <Image
        style={styles.crown1Icon}
        resizeMode="cover"
        source={require("../assets/crown-1.png")}
      /> */}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  personFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  elementsSpaceBlock: {
    marginLeft: 6.5,
    height: 13,
  },
  borderPosition: {
    left: "0%",
    bottom: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  rankFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  groupItemPosition: {
    opacity: 0,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconbackPosition: {
    left: "31.82%",
    bottom: "31.82%",
    right: "31.82%",
    top: "31.82%",
    width: "36.36%",
    height: "36.36%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo3: {
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
  },
  headerItemPosition: {
    display: "none",
    bottom: "15.63%",
    top: "15.63%",
    width: "11.73%",
    height: "68.75%",
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  groupViewLayout: {
    height: 48,
    width: 343,
  },
  ptsPosition: {
    textAlign: "right",
    top: 13,
    position: "absolute",
  },
  textTypo1: {
    textShadowRadius: 13,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  garySpaceBlock: {
    marginLeft: 12,
    textAlign: "left",
  },
  textText: {
    left: 17,
    textShadowRadius: 13,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    top: 13,
    textAlign: "center",
    position: "absolute",
  },
  pts2Typo: {
    color: Color.colorDarkslategray,
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
  },
  groupChild7Position: {
    marginLeft: -42,
    width: 84,
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    height: 28,
    width: 28,
    position: "absolute",
  },
  frameViewLayout: {
    height: 125,
    top: 154,
    width: 74,
    position: "absolute",
  },
  ellipsePosition: {
    width: 74,
    top: 0,
    position: "absolute",
  },
  ellipseParentPosition: {
    left: 23,
    height: 28,
    width: 28,
    position: "absolute",
  },
  textTypo: {
    marginLeft: -5,
    textShadowRadius: 13,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.title16PtBold_size,
    textAlign: "center",
    color: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  ptsLayout: {
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
  },
  parentPosition: {
    top: 250,
    width: 110,
    alignItems: "center",
    position: "absolute",
  },
  elementsSignal: {
    width: 20,
    height: 12,
  },
  elementsConnection: {
    width: 17,
  },
  border: {
    width: "91.47%",
    right: "8.53%",
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    opacity: 0.4,
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  capIcon: {
    height: "30.77%",
    width: "4.87%",
    top: "34.62%",
    bottom: "34.62%",
    left: "95.13%",
    opacity: 0.5,
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  capacity: {
    height: "69.23%",
    width: "62.2%",
    top: "15.38%",
    right: "30.48%",
    bottom: "15.38%",
    left: "7.32%",
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  elementsBattery: {
    width: 27,
    overflow: "hidden",
  },
  indicators: {
    top: 23,
    right: 19,
    alignItems: "center",
    position: "absolute",
  },
  micCam: {
    top: 6,
    left: 282,
    width: 6,
    height: 6,
    position: "absolute",
  },
  time: {
    fontSize: 17,
    letterSpacing: 0,
    lineHeight: 17,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    color: Color.colorBlack,
  },
  elementsTime: {
    marginTop: -2.5,
    marginLeft: -149,
    left: "50%",
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
  },
  statusBarIphone13Mini: {
    height: 47,
    top: 0,
    overflow: "hidden",
  },
  headerChild: {
    backgroundColor: Color.colorBlack,
  },
  iconback: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  rectangleParent: {
    right: "84.53%",
    left: "3.73%",
    bottom: "15.63%",
    top: "15.63%",
    width: "11.73%",
    height: "68.75%",
    position: "absolute",
  },
  title: {
    top: "31.25%",
    left: "36.27%",
    color: Color.gray2,
    lineHeight: 24,
    fontSize: FontSize.title16PtBold_size,
    textAlign: "center",
    position: "absolute",
  },
  headerItem: {
    right: "3.73%",
    left: "84.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupItem: {
    backgroundColor: "#d9d9d9",
  },
  groupInner: {
    height: "90.91%",
    width: "90.91%",
    top: "4.55%",
    right: "4.55%",
    bottom: "4.55%",
    left: "4.55%",
    backgroundColor: "#fcfaf3",
  },
  vectorIcon: {
    height: "100.02%",
    top: "-0.02%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  iconlivechatChild: {
    height: "50%",
    width: "31.25%",
    top: "12.5%",
    right: "43.75%",
    bottom: "37.5%",
    left: "25%",
    backgroundColor: Color.primaryGray,
    position: "absolute",
  },
  rectangleGroup: {
    right: "16.53%",
    left: "71.73%",
  },
  header: {
    top: 47,
    height: 64,
  },
  leaderboardChild: {
    top: 318,
    borderTopLeftRadius: Border.br_13xl,
    borderTopRightRadius: Border.br_13xl,
    backgroundColor: "#f3f7ff",
    height: 494,
  },
  rectangleView: {
    borderRadius: Border.br_xs,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  pts: {
    fontFamily: FontFamily.label113pt,
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    left: 284,
    textAlign: "right",
    color: Color.gray2,
  },
  rank: {
    top: 21,
    left: 12,
    width: 14,
  },
  text: {
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    top: 13,
    textShadowRadius: 13,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.gray2,
    left: 16,
  },
  personChild: {
    borderRadius: 12,
    height: 32,
    width: 32,
  },
  garyLee: {
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    color: Color.gray2,
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
  },
  person: {
    top: 8,
    left: 38,
    width: 165,
    alignItems: "center",
    position: "absolute",
  },
  text1: {
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    color: Color.gray2,
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
  },
  groupView: {
    marginTop: 8,
  },
  groupChild2: {
    backgroundColor: Color.youLeaderboard,
    borderRadius: Border.br_xs,
    position: "absolute",
    left: 0,
    top: 0,
  },
  pts2: {
    textAlign: "right",
    top: 13,
    position: "absolute",
    left: 284,
  },
  text2: {
    left: 17,
    textShadowRadius: 13,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    top: 13,
    textAlign: "center",
    position: "absolute",
  },
  garyLee2: {
    marginLeft: 12,
    textAlign: "left",
  },
  text3: {
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    color: Color.gray2,
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
  },
  text4: {
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    top: 13,
    textShadowRadius: 13,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.gray2,
    left: 16,
  },
  pts5: {
    left: 285,
    fontFamily: FontFamily.label113pt,
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    color: Color.gray2,
  },
  text5: {
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    color: Color.gray2,
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
  },
  text6: {
    left: 13,
    lineHeight: 21,
    fontSize: FontSize.body14ptBold_size,
    top: 13,
    textShadowRadius: 13,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.gray2,
  },
  autoLayoutVertical: {
    top: 342,
    left: 16,
    position: "absolute",
  },
  groupChild7: {
    height: 84,
    borderRadius: Border.br_base,
    top: 0,
  },
  frameChild: {
    top: 4,
    left: 0,
  },
  text7: {
    marginLeft: -3,
    marginTop: -8,
    lineHeight: 24,
    fontSize: FontSize.title16PtBold_size,
    color: Color.colorBlack,
    left: "50%",
    top: "50%",
  },
  ellipseGroup: {
    marginLeft: -14,
    top: 70,
    left: "50%",
  },
  ellipseParent: {
    top: 24,
    height: 98,
  },
  leaderboardInner: {
    left: 146,
    height: 159,
    width: 84,
    top: 101,
    position: "absolute",
  },
  groupChild8: {
    height: 74,
    borderRadius: Border.br_base,
    left: 0,
  },
  text8: {
    marginTop: -9,
  },
  ellipseParent1: {
    top: 60,
  },
  ellipseContainer: {
    left: -6,
    height: 88,
  },
  frameView: {
    left: 48,
  },
  text9: {
    marginTop: -8,
  },
  ellipseParent3: {
    top: 62,
  },
  ellipseParent2: {
    left: 5,
    height: 90,
  },
  leaderboardInner1: {
    left: 254,
  },
  bryanWolf: {
    width: 110,
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  iconmenuworkout: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  pts7: {
    fontSize: FontSize.label113pt_size,
    lineHeight: 20,
    marginLeft: 2,
    fontFamily: FontFamily.label113pt,
    textAlign: "center",
    color: Color.colorBlack,
  },
  iconmenuworkoutParent: {
    marginTop: 2,
    alignItems: "center",
  },
  bryanWolfParent: {
    marginLeft: -54.5,
    top: 230,
    width: 110,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  meghanJes: {
    width: 109,
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  meghanJesParent: {
    marginLeft: -163.5,
    left: "50%",
  },
  alexTurner: {
    width: 94,
    fontFamily: FontFamily.body14ptBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  alexTurnerParent: {
    left: 241,
  },
  crown1Icon: {
    left: 171,
    top: 101,
    height: 32,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  leaderboard: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Leaderboard;
