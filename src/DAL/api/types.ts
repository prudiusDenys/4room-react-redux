export type TopTracksType = {
	artist: { name: string, mbid: string, url: string }
	duration: string
	image: Array<ImageType>
	listeners: string
	mbid: string
	name: string
	playcount: string
	streamable: { fulltrack: string, text: string }
	url: string
}
export type MatchedTracksType = {
	artist: string,
	image: ImageType[],
	listeners: string,
	mbid: string,
	name: string,
	streamable: string,
	url: string
}
export type ArtistInfoType = {
	bio: BioType
	image: ImageType
	mbid: string
	name: string
	ontour: string
	similar: {
		artist: Array<ArtistType>
	}
	stats: {
		listeners: string
		playcount: string
	}
	streamable: string
	tags: {
		tag: Array<TagType>
	}
	url: string
}
type ImageType = {
	size: string
	text: string
}
type BioType = {
	content: string
	links: { link: { text: string, href: string, rel: string } }
}
type ArtistType = {
	image: ImageType
	name: string
	url: string
}
type TagType = {
	name: string
	url: string
}


//responses from the Server
export type TopTracksResponse = {
	tracks: {
		track: Array<TopTracksType>
	}
}
export type ArtistInfoResponse = {
	artist: ArtistInfoType
}
export type ResponseTrack = {
	results: {
		trackmatches: {
			track: MatchedTracksType[]
		}
	}
}
