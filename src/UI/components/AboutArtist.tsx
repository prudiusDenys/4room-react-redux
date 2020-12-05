import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getArtistInfoTC} from "../../BLL/reducers/tracks-reducer";
import {RootReducersType} from "../../BLL/store";
import photo from "../assets/images/no-avatar.png";
import styled from "styled-components";
import {ArtistBlockName, H3, Image} from "./Tracks";
import {ArtistInfoType} from "../../DAL/api/types";

type ParamTypes = {
	name: string
}

export const AboutArtist = () => {

	const dispatch = useDispatch()
	const artistInfo = useSelector<RootReducersType, ArtistInfoType>(state => state.tracks.artistInfo)
	const {name} = useParams<ParamTypes>()

	useEffect(() => {
		dispatch(getArtistInfoTC(name))
	}, [dispatch])


	if (!artistInfo) {
		return (
			<div>
				Loading Info...
			</div>
		)
	}

	return (
		<>
			<Artist>
				<ArtistWrapper>
					<ArtistBlockName>
						<H3 style={{margin: 0, textAlign: 'center'}}>{artistInfo.name}</H3>
					</ArtistBlockName>
					<Image src={artistInfo.image.text ? artistInfo.image.text : photo} alt=""/>
					<Tags>
						{artistInfo.tags.tag.map((t, i) => (
							<Tag key={i}>{t.name}</Tag>
						))}
					</Tags>
				</ArtistWrapper>
				<ArtistInfo>
					{artistInfo.bio.content}
				</ArtistInfo>
			</Artist>
		</>
	)
}

const Artist = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 -15px;
`
const ArtistWrapper = styled.div`
  flex: 0 0 25%;
  margin: 0 15px;
`
const Tags = styled.div`
  margin-top: 15px;
  font-size: 16px;
`
const Tag = styled.span`
  display: block;
  font-size: 16px;
`
const ArtistInfo = styled.div`
  margin: 0 15px;
`
