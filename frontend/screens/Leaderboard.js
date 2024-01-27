import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Border, Color, FontSize } from "../GlobalStyles";

const Leaderboard = () => {
  return (
    <ScrollView>
    <View style={styles.leaderboard}>

        {/*number 1*/}
            <View style={styles.leaderboardInner}>
                <View style={[styles.ellipseParent, styles.groupChild7Position]}>
                                
                    <Text style={[styles.text7, styles.textTypo1]}>1</Text>
                </View>
            </View>

            <View style={styles.bryanWolfParent}>
                <Text style={[styles.bryanWolf, styles.ptsLayout]}>Bryan Wolf</Text>
                <View style={[styles.iconmenuworkoutParent, styles.personFlexBox]}>
                    <Text style={styles.pts7}>43 pts</Text>
                </View>
            </View>
      
        {/*number 2*/}
            <View style={[styles.frameView, styles.frameViewLayout]}>
                <View style={[styles.ellipseContainer, styles.ellipsePosition]}>
                
                <View style={[styles.ellipseParent1, styles.ellipseParentPosition]}>
                
                    <Text style={[styles.text8, styles.textTypo]}>2</Text>
                </View>
                </View>
            </View>

            <View style={[styles.meghanJesParent, styles.parentPosition]}>
                <Text style={[styles.meghanJes, styles.ptsLayout]}>Meghan Jes...</Text>
                <View style={[styles.iconmenuworkoutParent, styles.personFlexBox]}>
                    <Text style={styles.pts7}>40 pts</Text>
                </View>
            </View>
      
        {/*number 3*/}
            <View style={[styles.leaderboardInner1, styles.frameViewLayout]}>
                <View style={[styles.ellipseParent2, styles.ellipsePosition]}>
                
                <View style={[styles.ellipseParent3, styles.ellipseParentPosition]}>
                    
                    <Text style={[styles.text9, styles.textTypo]}>3</Text>
                </View>
                </View>
            </View>

            <View style={[styles.alexTurnerParent, styles.parentPosition]}>
                <Text style={[styles.alexTurner, styles.ptsLayout]}>Alex Turner</Text>
                    <View style={[styles.iconmenuworkoutParent, styles.personFlexBox]}>
                        <Text style={styles.pts7}>38 pts</Text>
                    </View>
            </View>

        {/*Number 4 through ... */}
            <View style={styles.autoLayoutVertical}>
                
                <View style={styles.groupViewLayout}>
                <View style={[styles.rectangleView, styles.groupViewLayout]} />
                <Text style={[styles.pts, styles.ptsPosition]}>36 pts</Text>
                <View style={[styles.rank, styles.rankFlexBox]} />
                <Text style={[styles.text, styles.textTypo1]}>4</Text>
                <View style={[styles.person, styles.personFlexBox]}>
                
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
                
                    <Text style={[styles.garyLee2, styles.pts2Typo]}>You</Text>
                </View>
                </View>

                <View style={[styles.groupView, styles.groupViewLayout]}>
                <View style={[styles.rectangleView, styles.groupViewLayout]} />
                <Text style={[styles.pts, styles.ptsPosition]}>33 pts</Text>
                <View style={[styles.rank, styles.rankFlexBox]} />
                <Text style={[styles.text3, styles.textText]}>7</Text>
                <View style={[styles.person, styles.personFlexBox]}>
                
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
                    
                    <Text style={[styles.garyLee, styles.garySpaceBlock]}>
                    Becky Bartell
                    </Text>
                </View>
                </View>

            </View>
     
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  personFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo3: {
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
    fontWeight: "700",
  },
  groupChild7Position: {
    marginLeft: -42,
    width: 84,
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    height: 0,
    width: 28,
    position: "absolute",
  },
  frameViewLayout: {
    height: 125,
    top: 0,
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
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.title16PtBold_size,
    textAlign: "center",
    color: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    top: 100, 
    width: 110,
    alignItems: "center",
    position: "absolute",
  },
  
  pts: {
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
    lineHeight: 21,
    color: Color.gray2,
  },
  text5: {
    lineHeight: 21,
    color: Color.gray2,
    fontWeight: "700",
  },
  text6: {
    left: 13,
    lineHeight: 21,
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
    top: 180,
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
    color: Color.colorBlack,
    left: "50%",
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
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  pts7: {
    lineHeight: 20,
    marginLeft: 2,
    textAlign: "center",
    color: Color.colorBlack,
  },

  bryanWolfParent: {
    marginLeft: -54.5,
    top: 50, //asld;fjsalkfjs;alfkjsla;fjksla;dfj;l
    width: 110,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  meghanJes: {
    width: 109,
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
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  alexTurnerParent: {
    left: 241,
  },
  leaderboard: {
    flex: 1,
    height: 900,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Leaderboard;