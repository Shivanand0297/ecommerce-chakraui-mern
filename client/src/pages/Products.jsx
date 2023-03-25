// chakra imports
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Flex,
  Spinner,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

// ProductCard component
import ProductCard from "../components/ProductCard";

// to access redux store
import { useSelector } from "react-redux";

// custom hook so run async thunks
import useThunk from "../hooks/useThunk";

// fetchProducts async thunk to make api call
import { fetchProducts } from "../store";

// import { products } from "../products";
import { useEffect } from "react";

const Products = () => {
  // extracting product data from redux store
  const { data: products } = useSelector((state) => {
    return state.products;
  });

  // extracting runThunk function, isloading, and error state from useThunk() hook
  const [doFetchProducts, isLoadingProducts, fetchProductsError] =
    useThunk(fetchProducts);

  // running doFetchProducts on first render
  useEffect(() => {
    doFetchProducts();
  }, [doFetchProducts]);

  return (
    // Wrap: Wrap composes the Box component and renders a <ul> tag
    <Wrap spacing="30px" minHeight="100vh" justify="center" pt="30px">
      {isLoadingProducts ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
        />
      ) : (
        products.map((product) => (
          // WrapItem: WrapItem composes the Box component and renders the HTML <li> tag
          <WrapItem key={product._id}>
            {/* Center is a layout component that centers its child within itself. */}
            <Center w="250px" h="450px">
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      )}
      {fetchProductsError && (
        // error alert
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Opss..!</AlertTitle>
          <AlertDescription>{fetchProductsError.message}</AlertDescription>
        </Alert>
      )}
    </Wrap>
  );
};

export default Products;
