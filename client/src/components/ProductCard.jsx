import {
  Badge,
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Tooltip,
  useColorModeValue,
  Icon,
  Link,
  HStack,
  Text,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";


// ratting component
const Rating = ({rating, reviewsNumber}) =>{
  const [ iconSize, setIconSize ] = useState("14px");
  return(
    <Flex >
      <HStack spacing="2px" >
        <StarIcon fontSize={iconSize} w="14px" color="orange.500" />
        <StarIcon fontSize={iconSize} w="14px" color={ rating  >=2 ? "orange.500" : "gray.200"} />
        <StarIcon fontSize={iconSize} w="14px" color={ rating  >=3 ? "orange.500" : "gray.200"} />
        <StarIcon fontSize={iconSize} w="14px" color={ rating  >=4 ? "orange.500" : "gray.200"} />
        <StarIcon fontSize={iconSize} w="14px" color={ rating  >=5 ? "orange.500" : "gray.200"} />
      </HStack>
      <Text as="span" fontWeight="bold" fontSize="md" ml="5px"  >
        {`${reviewsNumber}`} { reviewsNumber >1 ? "Reviews" : "Review"}
      </Text>
    </Flex>
  )
}

const ProductCard = ({ product }) => {
  return (
    <Stack
      p={2}
      spacing="3px"
      bg={useColorModeValue("white", "gray.800")}
      minW="240px"
      h="100%"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      {product.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top="2px"
          right="2px"
          bg="green.300"
        />
      )}

      {product.stock <= 0 && (
        <Circle
          size="10px"
          position="absolute"
          top="2px"
          right="2px"
          bg="red.300"
        />
      )}
      <Image
        src={product.image}
        alt={product.name}
        roundedTop="lg"
      />
      <Box flex="1" maxH="5" alignItems="baseline">
        {product.stock <= 0 ? (
          <Badge
            rounded="full"
            px={2}
            py={0.5}
            colorScheme="red"
            fontSize="0.8rem"
          >
            Sold Out
          </Badge>
        ) : null}

        {product.isNew ? (
          <Badge
            rounded="full"
            px={2}
            py={0.5}
            colorScheme="green"
            fontSize="0.8rem"
          >
            New
          </Badge>
        ) : null}
      </Box>

      <Flex mt="1" justifyContent="space-between" alignItems="center">
        <Link
          as={ReactLink}
          to={`/products/${product._id}`}
          pt={2}
          cursor="pointer"
        >
          <Box fontSize="lg" fontWeight="semibold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" py="2" >
          <Rating rating={product.rating} reviewsNumber={product.numReviews} />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Box fontSize="md" color={useColorModeValue("gray.800", "white")}>
          <Box as="span" fontSize="lg">
            ${product.price.toFixed(2)}
          </Box>
        </Box>
        <Tooltip
          label={ product.stock <= 0 ? "Out of Stock" : "Add To Cart"}
          bg="white"
          placement="top"
          color="gray.800"
          fontSize="md"
        >
          <Button variant="ghost" display="flex" disabled={product.stock <= 0} color={product.stock <= 0 && "gray.400"} >
            <Icon as={FiShoppingCart} h={5} w={5} alignSelf="center" />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
