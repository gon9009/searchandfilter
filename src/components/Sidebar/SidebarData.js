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
      },
      {
        title: "Animals & Nature",
        emoji: "🐵",
      },
      {
        title: "Food & Drink",
        emoji: "🍎",
      },
      {
        title: "Travel & Places",
        emoji: "🌍",
      },
      {
        title: "Activities",
        emoji: "⚾",
      },
      {
        title: "Object",
        emoji: "👓",
      },
      {
        title: "Symbols",
        emoji: "⛔",
      },
      {
        title: "Flags",
        emoji: "🚩",
      },
      {
        title: "Liked",
        emoji: "❤️",
      },
    ],
  },
];

export default SidebarData;
