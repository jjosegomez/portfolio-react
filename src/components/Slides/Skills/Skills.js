import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

import reactIcon from "../../../assets/skills/React-icon.svg"
import expressIcon from "../../../assets/skills/expressjs-icon.svg"
import mongoIcon from "../../../assets/skills/mongodb-icon.svg"
import nodeIcon from "../../../assets/skills/nodejs-icon.svg"
import htmlIcon from "../../../assets/skills/html-5-svgrepo-com.svg"
import cssIcon from "../../../assets/skills/css-3-logo-svgrepo-com.svg"
import jsIcon from "../../../assets/skills/Unofficial_JavaScript_logo_2.svg"
import pythonIcon from "../../../assets/skills/python-icon.svg"
import cppIcon from "../../../assets/skills/ISO_C++_Logo.svg"
import swiftIcon from "../../../assets/skills/swift-icon.svg"
import gitLogo from "../../../assets/skills/git-icon-logo-svgrepo-com.svg"

import "./Skills.css"

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function SpringModal({ skill, img, description }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button sx={{width:"150px", margin:"1rem"}} onClick={handleOpen}><img src={img} alt='img'></img></Button>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            {skill}
                        </Typography>
                        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                            {description}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}


const Skills = () => {
    return (
        <div className="slider-content-container">
            <div className="centered">
                <h1>Skills</h1>
                <div className='skills-container'>
                    <SpringModal img={reactIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={expressIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={nodeIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={mongoIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={htmlIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={cssIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={jsIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={cppIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={pythonIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={swiftIcon} skill={"this is a skill"} description={"this is a description"} />
                    <SpringModal img={gitLogo} skill={"this is a skill"} description={"this is a description"} />
                </div>
            </div>
        </div>
    )
}

export default Skills