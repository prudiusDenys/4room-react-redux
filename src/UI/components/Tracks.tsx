import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getTopTracksTC} from "../../BLL/reducers/tracks-reducer";
import {RootReducersType} from "../../BLL/store";
import styled from "styled-components";
import photo from '../assets/images/no-avatar.png'
import {TopTracksType} from "../../DAL/api/types";


export const Tracks = () => {

	const dispatch = useDispatch()
	const topTracks = useSelector<RootReducersType, Array<TopTracksType>>(state => state.tracks.topTracks);

	useEffect(() => {
		dispatch(getTopTracksTC())
	}, [dispatch])

	if (!topTracks.length) {
		return (
			<div>
				Loading Tracks...
			</div>
		)
	}

	const topTrack = topTracks.map((t, i) => {
		return (
			<Items key={i}>
				<ArtistBlockName>
					<H3 style={{margin: 0}}>{t.name}</H3>
					<StyledLink to={`/aboutArtist/${t.artist.name}`}>{t.artist.name}</StyledLink>
				</ArtistBlockName>
				<ImageBlock>
					<Image src={t.image[2]?.text ? t.image[2].text : photo} alt=""/>
				</ImageBlock>
				<LinkUrl href={t.url}>страница исполнителя на сервисе Last.fm</LinkUrl>
			</Items>
		)
	})


	return (
		<>
			<PopularTracks>Самые популярные треки</PopularTracks>
			<TracksBox>
				{topTrack}
			</TracksBox>
		</>
	)
}

const PopularTracks = styled.h2`
  text-align: center;
  font-size: 24px;
`
export const TracksBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -15px;
`
export const Items = styled.div`
  position: relative;
  padding: 15px;
  text-align: center;
  font-size: 19px;
  border-radius: 5px;
  width: 300px;
  height: 300px;
  margin: 0 15px 30px 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`
export const ArtistBlockName = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 5px;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.7);
`
export const H3 = styled.h3`
  display: block;
  color: white;
`
export const StyledLink = styled(Link)`
  color: white;
  font-weight: 700;
  margin: 0;
`
export const LinkUrl = styled.a`
  position: absolute;
  bottom: 5px;
  left: 12px;
  font-size: 14px;
`
export const ImageBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
