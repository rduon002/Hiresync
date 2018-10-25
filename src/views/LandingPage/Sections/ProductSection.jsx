import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";

class ProductSection extends React.Component {

 

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Recruiting Simplified!</h2>
            <h5 className={classes.description}>
              HireSync is aiming to disrupt the recruiting industry by providing an innovative approach to hiring. 
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            
              <InfoArea

                title="RECRUITER"
                description="Hire the best with us"
                icon={VerifiedUser}
                iconColor="info"
                vertical />
                <Button
                 
                  color="info"
                  size="large"
                  width="50%"
                  href="/profile-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Recruiter Profile
                </Button>
             

            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                href="/profile-page-candidate"
                title="CANDIDATE"
                description="Find your dream job with us"
                icon={VerifiedUser}
                iconColor="info"
                vertical
              />
               <Button
                 
                 color="info"
                 size="large"
                 width="50%"
                 href="/profile-page-candidate"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <i className="fas fa-play" />Candidate Profile
               </Button>
         </GridItem>

          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
