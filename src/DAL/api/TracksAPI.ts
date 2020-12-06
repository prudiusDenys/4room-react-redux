import axios from 'axios'
import {ArtistInfoResponse, ResponseTrack, TopTracksResponse} from "./types";

const instance = axios.create({
	baseURL: '//ws.audioscrobbler.com/2.0/',
})
const API_KEY = '3df2df8308646e77c7f7765cb11610de';

export const tracksAPI = {
	getTopTracks() {
		return instance.get<TopTracksResponse>(`?method=chart.gettoptracks&api_key=${API_KEY}&format=json`)
	},
	getArtistInfo(name: string) {
		return instance.get<ArtistInfoResponse>(`?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`)
	},
	findArtist(value: string) {
		return instance.get<ResponseTrack>(`?method=track.search&track=${value}&api_key=${API_KEY}&format=json`)
	}
}
