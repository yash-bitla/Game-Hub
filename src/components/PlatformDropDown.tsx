import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";

interface Props {
  onPlatformSelect: (p: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformDropDown({ onPlatformSelect, selectedPlatform }: Props) {
  const { data, error, isLoading } = usePlatform();

  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((p) => (
            <MenuItem key={p.id} onClick={() => onPlatformSelect(p)}>
              {p.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformDropDown;
