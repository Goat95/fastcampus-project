import React, { memo } from "react";
import QueueMusic from "@mui/icons-material/QueueMusic";
import Close from "@mui/icons-material/Close";
import PlayListItem from "./PlayListItem";
import classNames from "classnames";
import "./PlayList.scss";
import MusicList from "../../store/data";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentIndex,
  updatePlayList,
} from "../../store/musicPlayerReducer";

const PlayList = ({ showPlayList, setShowPlayList }) => {
  const playList = useSelector((state) => state.playList);
  const dispatch = useDispatch();
  const onClickClosePlayList = () => {
    setShowPlayList(false);
  };

  const onClickItem = (index) => {
    dispatch(setCurrentIndex(index));
  };

  const onDropItem = (newPlayList) => {
    dispatch(updatePlayList(newPlayList));
  };

  const renderItem = (item, index) => (
    <PlayListItem item={item} index={index} />
  );

  return (
    <div className={classNames("play-list", { show: showPlayList })}>
      <div className="header">
        <div className="row">
          <QueueMusic className="list" />
          <span>Play list</span>
        </div>
        <Close
          sx={{ fontSize: 22, cursor: "pointer" }}
          onClick={onClickClosePlayList}
        />
      </div>
      {/* <SortableList
        data={playList}
        onDropItem={onDropItem}
        onClickItem={onClickItem}
        renderItem={renderItem}
      /> */}
      <ul>
        {MusicList.map((item, index) => (
          <li key={index}>
            <PlayListItem item={item} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(PlayList);
