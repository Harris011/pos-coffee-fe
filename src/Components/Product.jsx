import React from "react";
import { Spacer, Card, CardBody, Stack, Heading, Divider, CardFooter, Box, Button, ButtonGroup, Container, Flex, Text, Menu, MenuButton, MenuItem, MenuList, Spinner, Image, IconButton } from '@chakra-ui/react';

function Product(props) {
  console.log("cek props ", props.product_image);
  return (
    <Card minW={{ base: '40%', sm: '40%', md: '30%', lg: '32%' }} bgColor='gray.900' borderRadius={{ base: 'xl', md: '3xl' }} my={{ base: '2', md: '4' }}
      mx={{ base: '0', lg: '1' }}
    >
      <CardBody>
        {/* PRODUCT IMAGE */}
        <Image
          src={props.productimage}
          alt='menu picture'
          borderRadius={{ base: 'lg', md: 'xl' }}
          objectFit='cover'
          w="full"
          h={{ base: '20', sm: "40", md: '44' }}
        />
        <Stack mt={{ base: '2', sm: '6' }} spacing='3'>
          {/* PRODUCT NAME */}
          <Heading size={{ base: 'sm', sm: 'md' }} color='white'>
            {/* Cappuccino */}
            {props.name}
            </Heading>
          <Flex >
            <Text color='white' fontSize={{ base: 'md', sm: '2xl' }}>
              {/* PRODUCT PRICE */}
              <Flex>
                <Text color={'#DE6B1F'} mr='2'>$</Text>
                {/* 4.50 */}
                {props.price}
              </Flex>
            </Text>
            <Spacer />
            {/* ADD TO ORDER BUTTON */}
            <Button variant='solid' colorScheme='orange' size={{ base: 'xs', md: 'md' }}>
              <Text fontWeight='extrabold'>
                +
              </Text>
            </Button>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Product;
