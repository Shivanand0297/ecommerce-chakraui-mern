import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { products } from "../products";

const Products = () => {
  return (
    // Wrap: Wrap composes the Box component and renders a <ul> tag
    <Wrap spacing="30px" minHeight="100vh" justify="center" pt="30px">
      {products.map((product) => (

        // WrapItem: WrapItem composes the Box component and renders the HTML <li> tag
        <WrapItem key={product._id} >

          {/* Center is a layout component that centers its child within itself. */}
          <Center w="250px" h="450px" >
            <ProductCard product={product}/>
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Products;
