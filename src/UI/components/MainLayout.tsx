import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components'
import { Search } from "./Search";

type PropsType = {
	children: React.ReactNode
}

export const MainLayout = ({children}: PropsType) => {
	return (
		<React.Fragment>
			<Header>
				<nav>
					<StyledNavLink to={'/'}>Главная</StyledNavLink>
				</nav>
				<Search/>
			</Header>
			<Main>
				<Container>
					{children}
				</Container>
			</Main>
		</React.Fragment>
	)
}
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #eee;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
	z-index: 2;
`
const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 16px;
`
const Main = styled.main`
  margin-top: 90px;
`
const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`
