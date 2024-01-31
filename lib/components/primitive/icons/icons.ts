import ArrowVertical from 'assets/icons/arrow-separate-vertical.svg?react';
import ArrowUpRight from 'assets/icons/arrow-up-right.svg?react';
import Brain from 'assets/icons/brain.svg?react';
import ChatLines from 'assets/icons/chat-lines.svg?react';
import Copy from 'assets/icons/copy.svg?react';
import DownloadUp from 'assets/icons/download.svg?react';
import DownloadDown from 'assets/icons/download-1.svg?react';
import EditPencil from 'assets/icons/edit-pencil.svg?react';
import FloppyDisk from 'assets/icons/floppy-disk.svg?react';
import HalfMoon from 'assets/icons/half-moon.svg?react';
import MoreHoriz from 'assets/icons/more-horiz.svg?react';
import NavArrowLeft from 'assets/icons/nav-arrow-down.svg?react';
import NavArrowDown from 'assets/icons/nav-arrow-down-1.svg?react';
import OpenSelectHand from 'assets/icons/open-select-hand-gesture.svg?react';
import PageSearch from 'assets/icons/page-search.svg?react';
import Plus from 'assets/icons/plus.svg?react';
import Pokeball from 'assets/icons/pokeball.svg?react';
import Repeat from 'assets/icons/repeat.svg?react';
import Scanning from 'assets/icons/scanning.svg?react';
import SearchEngine from 'assets/icons/search-engine.svg?react';
import SendMail from 'assets/icons/send-mail.svg?react';
import Settings from 'assets/icons/settings.svg?react';
import ShareAndroid from 'assets/icons/share-android.svg?react';
import Trash from 'assets/icons/trash.svg?react';
import Xmark from 'assets/icons/xmark.svg?react';

export const icons = {
    ArrowVertical,
    ArrowUpRight,
    Brain,
    ChatLines,
    Copy,
    DownloadUp,
    DownloadDown,
    EditPencil,
    FloppyDisk,
    HalfMoon,
    MoreHoriz,
    NavArrowLeft,
    NavArrowDown,
    OpenSelectHand,
    PageSearch,
    Plus,
    Pokeball,
    Repeat,
    Scanning,
    SearchEngine,
    SendMail,
    Settings,
    ShareAndroid,
    Trash,
    Xmark,
};

export type IconName = keyof typeof icons;

export const getIcon = (name: IconName) => icons[name];