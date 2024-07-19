import React from "react";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    categoryName: "Category",
    categoryId: "1",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subCategory: [
      {
        title: "Smileys & People",
        emoji: "😀",
        urltitle:"smileys and people"
      },
      {
        title: "Animals & Nature",
        emoji: "🐵",
        urltitle:"animals and nature"
      },
      {
        title: "Food & Drink",
        emoji: "🍎",
        urltitle:"food and drink"
      },
      {
        title: "Travel & Places",
        emoji: "🌍",
        urltitle:"travel and places"
      },
      {
        title: "Activities",
        emoji: "⚾",
        urltitle:"activities"
      },
      {
        title: "Object",
        emoji: "👓",
        urltitle:"objects"
      },
      {
        title: "Symbols",
        emoji: "⛔",
        urltitle:"symbols"
      },
      {
        title: "Flags",
        emoji: "🚩",
        urltitle:"flags"
      },
      {
        title: "Liked",
        emoji: "❤️",
      },
    ],
  },
];

export default SidebarData;
