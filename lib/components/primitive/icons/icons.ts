import { DotsThree } from '@phosphor-icons/react'
import { User } from '@phosphor-icons/react'
import { X } from '@phosphor-icons/react'
import { Check } from '@phosphor-icons/react'
import { Moon } from '@phosphor-icons/react'
import { Sun } from '@phosphor-icons/react'
import { CaretDown } from '@phosphor-icons/react'

import ArrowVertical from 'assets/icons/arrow-separate-vertical.svg?react';
import ArrowUpRight from 'assets/icons/arrow-up-right.svg?react';
import Brain from 'assets/icons/brain.svg?react';
import ChatLines from 'assets/icons/chat-lines.svg?react';
import Copy from 'assets/icons/copy.svg?react';
import DownloadUp from 'assets/icons/download.svg?react';
import DownloadDown from 'assets/icons/download-1.svg?react';
import EditPencil from 'assets/icons/edit-pencil.svg?react';
import FloppyDisk from 'assets/icons/floppy-disk.svg?react';
import NavArrowLeft from 'assets/icons/nav-arrow-down.svg?react';
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

export const icons = {
    DotsThree,
    User,
    X,
    Check,
    Moon,
    Sun,
    CaretDown,

    ArrowVertical,
    ArrowUpRight,
    Brain,
    ChatLines,
    Copy,
    DownloadUp,
    DownloadDown,
    EditPencil,
    FloppyDisk,
    NavArrowLeft,
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
    // Xmark,
};

export type IconName = keyof typeof icons;

export const getIcon = (name: IconName) => icons[name];