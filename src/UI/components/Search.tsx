import {TextField} from "@material-ui/core";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootReducersType} from "../../BLL/store";
import {findArtistTC, setSearchRedirect, setSearchValue} from "../../BLL/reducers/tracks-reducer";
import {Redirect} from "react-router-dom";

export const Search = () => {

	const searchRedirect = useSelector<RootReducersType, boolean>(state => state.tracks.searchRedirect)
	const value = useSelector<RootReducersType, string>(state => state.tracks.searchValue)
	const dispatch = useDispatch()

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		dispatch(setSearchValue(e.currentTarget.value))
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.charCode === 13 && value.trim()) {
			dispatch(findArtistTC(value))
			dispatch(setSearchRedirect(true))
			dispatch(setSearchValue(''))
		}
	}

	if (searchRedirect) {
		return <Redirect to={'/searchTrack'}/>
	}

	return (
		<>
			<TextField id="standard-basic" label="Поиск трека" value={value}
								 onChange={onChangeHandler}
								 onKeyPress={onKeyPressHandler}/>
		</>
	)
}
