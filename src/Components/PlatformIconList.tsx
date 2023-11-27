import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";

import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../Entities/Platform";
interface Props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    web: BsGlobe,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    xbox: FaXbox,
    playstation: FaPlaystation,
  };
  return (
    <HStack marginY={1}>
      {platform.map((platform) => (
        <Icon
          as={IconMap[platform.slug]}
          color={"gray.500"}
          key={platform.id}
        />
      ))}
      ;
    </HStack>
  );
};

export default PlatformIconList;
