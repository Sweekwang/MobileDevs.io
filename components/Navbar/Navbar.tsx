import React, { Fragment } from "react";
import classes from "./Navbar.module.css";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from "@mui/icons-material/People";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContentLayout from "../layout/ContentLayout/ContentLayout";
import RoundedCornerButton from "../buttons/RoundedCornerButton/RoundedCornerButton";

const Navbar: React.FC = () => {
    return(
        <div className={classes.navbar}>
            <ContentLayout className={classes.navContent}>
                <Fragment>
                    <div>
                        <p>MobileDevs</p>
                        {/* TODO: ADD LOGO */}
                    </div>
                    <ul>
                        <li>
                            <a href="#home">
                                <HomeIcon fontSize="small"/>
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a href="#news">
                                <PeopleIcon fontSize="small"/>
                                <p>Community</p>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <PlayCircleIcon fontSize="small"/>
                                <p>Tutorials</p>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <LocalPhoneIcon fontSize="small"/>
                                <p>Abouts</p>
                            </a>
                        </li>
                    </ul>
                    <div className={classes.btnContainer}>
                        <RoundedCornerButton title="Join Us" className={classes.btn}/>
                    </div>
                </Fragment>
            </ContentLayout>
        </div>
    )
};

export default Navbar;