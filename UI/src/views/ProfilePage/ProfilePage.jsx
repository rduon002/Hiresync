import React from "react";
// nodejs library that concatenates classes
import { Link } from "react-router-dom";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
// core components



import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import profile from "assets/img/faces/christian.jpg";




import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import team1 from "assets/img/faces/christian.jpg";
import team2 from "assets/img/faces/avatar.jpg";
import team3 from "assets/img/faces/christian.jpg";
import team4 from "assets/img/faces/christian.jpg";
import team5 from "assets/img/faces/christian.jpg";


class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="HireSync"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>RECRUITER PROFILE </h3>
                      <h6>John Doe</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>

                  {"Prism Analytics, Inc."}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Account",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem cs={12} sm={12} md={8}>
                              <h2 className={classes.title}>Edit Your Profile</h2>
                              <h4 className={classes.description}>

                              </h4>
                              <form>
                                <GridContainer>
                                  <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                      labelText="Your Name"
                                      id="name"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                    />
                                  </GridItem>
                                  <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                      labelText="Password"
                                      id="password"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                    />
                                  </GridItem>
                                  <CustomInput
                                    labelText="Company Name"
                                    id="name"
                                    formControlProps={{
                                      fullWidth: true,
                                    }}
                                  />

                                  <CustomInput
                                    labelText="HR E-mail"
                                    id="e-mail"
                                    formControlProps={{
                                      fullWidth: true,
                                    }}
                                  />

                                  <CustomInput
                                    labelText="Phone Number"
                                    id="number"
                                    formControlProps={{
                                      fullWidth: true,
                                    }}
                                  />
                                  <GridContainer justify="center">
                                    <GridItem
                                      xs={12}
                                      sm={12}
                                      md={4}
                                      className={classes.textCenter}
                                    >
                                      <Button color="primary">Submit</Button>
                                    </GridItem>
                                  </GridContainer>
                                </GridContainer>
                              </form>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Post a Job",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem cs={12} sm={12} md={8}>
                              <h2 className={classes.title}>Post a Job</h2>
                              <h4 className={classes.description}>

                              </h4>
                              <form>
                                <GridContainer>
                                  <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                      labelText="Job Title"
                                      id="name"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                    />
                                  </GridItem>
                                  <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                      labelText="Job Description"
                                      id="description"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                    />
                                  </GridItem>
                                  <GridItem xs={12} sm={12} md={12}>
                                  <CustomInput
                                    labelText="Skill"
                                    id="string"
                                    formControlProps={{
                                      fullWidth: true,
                                    }}
                                  />
                                  </GridItem >
                            
                                  <CustomDropdown
                                    buttonText="Proficiency"

                                    id="string"
                                    formControlProps={{
                                      fullWidth: true,
                                    }}
                                    buttonProps={{
                                      className: classes.navLink,
                                      color: "transparent"
                                    }}
                                    dropdownList={[
                                      <Link to="/" className={classes.dropdownLink}>
                                        Beginner
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        Intermediate
                                  </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        Expert
                                </Link>
                                    ]}
                                  />
                                  <CustomDropdown
                                    buttonText="Years of Experience"

                                    id=""
                                    formControlProps={{
                                      fullWidth: true,
                                    }}
                                    buttonProps={{
                                      className: classes.navLink,
                                      color: "transparent"
                                    }}
                                    dropdownList={[
                                      <Link to="/" className={classes.dropdownLink}>
                                        0-5
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        5-10
                                  </Link>,
                                   
                                      <Link to="/" className={classes.dropdownLink}>
                                        10+
                    </Link>
                                    ]}
                                  />
                                  <CustomDropdown
                                    buttonText="Importance of Skill"

                                    id=""
                                    formControlProps={{
                                      fullWidth: true,
                                    }}
                                    buttonProps={{
                                      className: classes.navLink,
                                      color: "transparent"
                                    }}
                                    dropdownList={[
                                      <Link to="/" className={classes.dropdownLink}>
                                        1
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        2
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        3
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        4
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        5
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        6
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        7
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        8
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        9
                                    </Link>,
                                      <Link to="/" className={classes.dropdownLink}>
                                        10
                                    </Link>
                                    ]}
                                  />
                                  <GridContainer justify="center">
                                    <GridItem
                                      xs={12}
                                      sm={12}
                                      md={4}
                                      className={classes.textCenter}
                                    >
                                      <Button color="primary" justify="center">Add Another Skill</Button>
                                      <Button color="info" justify="center">Submit</Button>
                                    </GridItem>
                                  </GridContainer>
                                </GridContainer>
                              </form>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Results",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                  <img src={team1} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                  Chase Shivers
                                <br />
                                  <small className={classes.smallTitle}>Backend Developer</small>
                                </h4>
                                <CardBody>
                                  <p className={classes.description}>
                                    You can write here details the team member.
                                   <a href="#github">links</a>
                                  </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                  </Button>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                  <img src={team2} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                  Murat Tartan
                                <br />
                                  <small className={classes.smallTitle}>Frontend Developer</small>
                                </h4>
                                <CardBody>
                                  <p className={classes.description}>
                                    You can write here details the team member.
                                   <a href="#github">links</a>
                                  </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-linkedin"} />
                                  </Button>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                  <img src={team3} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                  Rami Wehbe
                                <br />
                                  <small className={classes.smallTitle}>Backend Developer</small>
                                </h4>
                                <CardBody>
                                  <p className={classes.description}>
                                    You can write here details the team member.
                                   <a href="#github">links</a>
                                  </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                  </Button>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                  <img src={team4} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                  Ritchie Duong
                                <br />
                                  <small className={classes.smallTitle}>Backend Developer</small>
                                </h4>
                                <CardBody>
                                  <p className={classes.description}>
                                    You can write here details the team member.
                                   <a href="#github">links</a>
                                  </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                  </Button>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card plain>
                                <GridItem sytle xs={12} sm={12} md={6} className={classes.itemGrid}>
                                  <img src={team5} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                  Tim Kariev
                                <br />
                                  <small className={classes.smallTitle}>Frontend Developer</small>
                                </h4>
                                <CardBody>
                                  <p className={classes.description}>
                                    You can write here details the team member.
                                   <a href="#github">links</a>
                                  </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                  >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                  </Button>
                                </CardFooter>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
