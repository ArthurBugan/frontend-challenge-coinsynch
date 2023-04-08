"use client";

import { CgMenuRound } from "react-icons/cg";
import { Popover } from "@headlessui/react";

interface PopMenuProps {
  children: React.ReactElement;
}

const PopMenu: React.FC<PopMenuProps> = (props) => {
  const { children } = props;

  return (
    <Popover className="relative md:hidden">
      <Popover.Button className="focus:outline-none">
        <CgMenuRound className="h-7 w-7 text-secondary-500" />
      </Popover.Button>
      <Popover.Panel>{children}</Popover.Panel>
    </Popover>
  );
};

export default PopMenu;
