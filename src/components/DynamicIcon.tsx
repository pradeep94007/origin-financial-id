import React from 'react'
import { IconType } from 'react-icons/lib';
import * as LuReactIcons from "react-icons/lu";

type props = {
  iconName: string
  classname? : string
  size?:string
}

export const DynamicIcon = ({iconName, classname, size}: props) => {

  const DisplayIcons = (iconName: string): IconType | null => {
    if (iconName in LuReactIcons) {
      return LuReactIcons[iconName as keyof typeof LuReactIcons];
    } else {
      return null;
    }
  };

  const IconComponent = DisplayIcons(iconName);

  return (
    <>
    {IconComponent && (
      <span>
        <IconComponent className={classname} size={size} />
      </span>
    )}
  </>
  )
}
