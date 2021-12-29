import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as DashboardIcon } from '../assets/DashboardIcon.svg';
import { ReactComponent as BuddydIcon } from '../assets/BuddyIcon.svg';
import { ReactComponent as TeamIcon } from '../assets/TeamIcon.svg';
import { ReactComponent as EnergyIcon } from '../assets/EnergyIcon.svg';
import { ReactComponent as JournalIcon } from '../assets/JournalIcon.svg';

const Navigation = () => {
    return (
        <NavigationWrapper>
            <nav>
                <NavLink to="/Dashboard">
                    <DashboardIcon />
                </NavLink>
            <BuddydIcon />
            <TeamIcon />
            <EnergyIcon />
            <JournalIcon />
            </nav>
        </NavigationWrapper>
    )
}

export default Navigation;

const NavigationWrapper = styled.div`
align-items: center;
box-shadow: 0 2px 11px HSLA(213, 52.8%, 20.8%, 0.2);
border-radius: 10px;
bottom: 0;
display: flex;
flex-direction: row;
justify-content: space-around;
height: 2.75rem;
margin: 1.25rem;
position: fixed;
width: 20.938rem;
`
