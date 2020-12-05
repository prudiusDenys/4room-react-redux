import {Dispatch} from "redux";
import {tracksAPI} from "../../DAL/api/TracksAPI";
import {ArtistInfoType, MatchedTracksType, TopTracksType} from "../../DAL/api/types";


const initialState: InitialStateType = {
	topTracks: [],
	artistInfo: {
		bio: {
			content: '',
			links: {
				link: {text: '', href: '', rel: ''}
			}
		},
		image: {
			size: '',
			text: ''
		},
		mbid: '',
		name: '',
		ontour: '',
		similar: {
			artist: []
		},
		stats: {
			listeners: '',
			playcount: '',
		},
		streamable: '',
		tags: {
			tag: []
		},
		url: ''
	},
	searchValue: '',
	searchRedirect: false,
	matchedTracks: []
}

export const tracksReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case "TRACKS/SET_TOP_TRACKS": {
			return {...state, topTracks: [...action.topTracks]}
		}
		case "TRACKS/SET_ARTIST_INFO": {
			return {...state, artistInfo: {...action.artistInfo}}
		}
		case "TRACKS/SET_SEARCH_VALUE": {
			return {...state, searchValue: action.value}
		}
		case "TRACKS/SET_MATCHED_TRACKS": {
			return {...state, matchedTracks: [...action.tracks]}
		}
		case "TRACKS/SET_SEARCH_REDIRECT":{
			return {...state, searchRedirect: action.value}
		}
		default:
			return state
	}
}

//actions
const setTopTracks = (topTracks: Array<TopTracksType>) => {
	return {type: 'TRACKS/SET_TOP_TRACKS', topTracks} as const
}
const setArtistInfo = (artistInfo: ArtistInfoType) => {
	return {type: 'TRACKS/SET_ARTIST_INFO', artistInfo} as const
}
export const setSearchValue = (value: string) => {
	return {type: 'TRACKS/SET_SEARCH_VALUE', value} as const
}
export const setSearchRedirect = (value: boolean) => {
	return {type: 'TRACKS/SET_SEARCH_REDIRECT', value} as const
}
const setMatchedTracks = (tracks: Array<MatchedTracksType>) => {
	return {type: 'TRACKS/SET_MATCHED_TRACKS', tracks} as const
}


//thunks
export const getTopTracksTC = () => async (dispatch: Dispatch) => {
	const {data} = await tracksAPI.getTopTracks()
	dispatch(setTopTracks(data.tracks.track))
}
export const getArtistInfoTC = (name: string) => async (dispatch: Dispatch) => {
	const {data} = await tracksAPI.getArtistInfo(name)
	dispatch(setArtistInfo(data.artist))
}
export const findArtistTC = (value: string) => async (dispatch: Dispatch) => {
	const {data} = await tracksAPI.findArtist(value)
	dispatch(setMatchedTracks(data.results.trackmatches.track))
}


type InitialStateType = {
	topTracks: Array<TopTracksType>
	artistInfo: ArtistInfoType
	searchValue: string,
	searchRedirect: boolean
	matchedTracks: Array<MatchedTracksType>
}


type ActionTypes = ReturnType<typeof setTopTracks>
	| ReturnType<typeof setArtistInfo>
	| ReturnType<typeof setSearchValue>
	| ReturnType<typeof setMatchedTracks>
	| ReturnType<typeof setSearchRedirect>
