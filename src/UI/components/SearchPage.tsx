import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootReducersType} from "../../BLL/store";
import {ArtistBlockName, H3, Items, StyledLink, TracksBox} from "./Tracks";
import {setSearchRedirect} from "../../BLL/reducers/tracks-reducer";

const selectedTracks = (state: RootReducersType) => state.tracks.matchedTracks

export const SearchPage = () => {

	const matchedTracks = useSelector(selectedTracks)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(setSearchRedirect(false))
	})


	const matchedTrack = matchedTracks.map((t, i) => {
		return (
				<Items key={i}>
					<ArtistBlockName>
						<H3 style={{margin: 0}}>{t.name}</H3>
						<StyledLink as={'span'}>{t.artist}</StyledLink>
					</ArtistBlockName>
				</Items>
		)
	})

	return (
		<>
			<TracksBox>
				{matchedTrack}
			</TracksBox>
		</>
	)
}
