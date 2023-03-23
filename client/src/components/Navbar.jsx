import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure, //we can use this to operate hamburger menu
  Button,
  Stack,
  useColorMode, // to control dark and light theme
  useColorModeValue,
} from "@chakra-ui/react";

// link from react-router-dom
import { Link as ReactLink } from "react-router-dom";

// chakra icons
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { IoLogoXing } from "react-icons/io";

const navbarItems = [
  {
    linkName: "Products",
    path: "/products",
  },
  {
    linkName: "Cart",
    path: "/cart",
  },
];

const NavBarlink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    p={{ base: "1", md: "2" }}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  // to handle the open and close of the drawer etc...
  const { isOpen, onClose, onOpen } = useDisclosure();

  // useColorMode is a React hook that gives you access to the current color mode,
  // and a function to toggle the color mode.
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")} //useColorModeValue is a React hook used to change any value or style based on the color mode. It takes 2 arguments: the value in light mode, and the value in dark mode.
      px={4}
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Icon button renders an icon within in a button. */}
        {/* mobile menu button */}
        <IconButton
          aria-label="menu-icon"
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen} // onclicking funtionality
        />

        {/* Similar to flex but wont take full width */}
        <HStack spacing={3} >
          <Link as={ReactLink} to="/" _hover={{ textDecoration: "none" }}>
            <Flex alignItems="center">
              <Icon as={IoLogoXing} h={6} w={6} color="orange.400" />
              <Text as="span" fontWeight="extrabold">
                TechVerse
              </Text>
            </Flex>
          </Link>
          <HStack as="nav" display={{ base: "none", md: "flex" }} >
            {navbarItems.map((link) => (
              <NavBarlink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavBarlink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center" gap={3}>
          <NavBarlink>
            <Icon
              as={colorMode === "light" ? MoonIcon : SunIcon}
              alignSelf="center"
              onClick={toggleColorMode}
            />
          </NavBarlink>
          <Button
            as={ReactLink}
            to="/login"
            fontSize="sm"
            fontWeight={400}
            variant="link"
          >
            Sign In
          </Button>
          <Button
            as={ReactLink}
            to="/register"
            fontSize="sm"
            fontWeight={600}
            bg="orange.400"
            _hover={{ bg: "orange.500" }}
            color="white"
            colorScheme="orange"
            display={{ base: "none", md: "flex" }}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>

      {/* mobile menu */}
      {isOpen ? (
        <Box display={{ md: "none" }} pb={4}>
          <Stack as="nav" spacing={2}>
            {navbarItems.map((link) => (
              <NavBarlink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavBarlink>
            ))}
            <NavBarlink path="/register" >
              Sign Up
            </NavBarlink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
