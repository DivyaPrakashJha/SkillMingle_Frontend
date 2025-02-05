import PropTypes from "prop-types";
import { Card, Typography, Button, Grid, Box } from "@mui/material";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const AboutCard = ({
    profilePhoto,
    name,
    bio,
    title,
    email,
    github,
    linkedin,
    instagram,
    twitter,
}) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{
                    textAlign: "center",
                    borderRadius: "16px",
                    padding: "16px",
                    paddingTop: "96px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    background: "rgba(173, 216, 230, 0.3)",
                    color: "#fff",
                    position: "relative",
                    overflow: "visible",
                    minWidth: "320px",
                    maxWidth: "320px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
                    },
                }}
            >
                {/* Profile Image */}
                <Box
                    component="img"
                    src={profilePhoto}
                    alt="Profile"
                    sx={{
                        width: "140px",
                        height: "140px",
                        position: "absolute",
                        top: "-60px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderRadius: "20%",
                        border: "3px solid white",
                        zIndex: 1,
                    }}
                />

                {/* Name and Title */}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {name}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ color: "#fff", marginBottom: "16px" }}
                >
                    {title}
                </Typography>

                {/* About Section */}
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        variant="body1"
                        fontSize={"25px"}
                        sx={{ paddingY: "11px" }}
                    >
                        About Me
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                        {bio}
                    </Typography>

                    {/* Social Media Icons */}
                    <Typography
                        variant="body1"
                        fontSize={"25px"}
                        sx={{
                            paddingTop: "11px",
                            paddingBottom: "5px",
                            textAlign: "center"
                        }}
                    >
                        Profile Links
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            gap: "16px",
                            marginBottom: "16px",
                        }}
                    >
                        {github && (
                            <GitHub
                                sx={{ cursor: "pointer" }}
                                onClick={() => window.open(github, "_blank")}
                            />
                        )}
                        {linkedin && (
                            <LinkedIn
                                sx={{ cursor: "pointer" }}
                                onClick={() => window.open(linkedin, "_blank")}
                            />
                        )}
                        {instagram && (
                            <Instagram
                                sx={{ cursor: "pointer" }}
                                onClick={() => window.open(instagram, "_blank")}
                            />
                        )}
                        {twitter && (
                            <Twitter
                                sx={{ cursor: "pointer" }}
                                onClick={() => window.open(twitter, "_blank")}
                            />
                        )}
                    </Box>
                </Box>

                {/* Contact Button */}
                <Button
                    sx={{
                        backgroundColor: "White",
                        color: "Black",
                        textTransform: "none",
                        padding: "10px 20px",
                        width: "100%",
                        borderRadius: "10px",
                        "&:hover": {
                            backgroundColor: "#b0245f",
                        },
                    }}
                    onClick={() => window.open(`mailto:${email}`, "_self")}
                >
                    Contact Me
                </Button>
            </Card>
        </Grid>
    );
};

AboutCard.propTypes = {
    profilePhoto: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
};

AboutCard.defaultProps = {
    bio: "No bio provided.",
    github: null,
    linkedin: null,
    instagram: null,
    twitter: null,
};

export default AboutCard;