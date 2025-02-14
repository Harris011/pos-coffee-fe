import React from 'react';
import { Box, Heading, Text, Select, Button, Flex, Image, Container, ButtonGroup, Icon, Menu, MenuItem, IconButton, MenuButton, MenuList } from '@chakra-ui/react';
import Product from '../Components/Product';
import { SearchBar } from '../Components/SearchBar';
import { FiFilter } from 'react-icons/fi';
import axios from "axios";
import Pagination from '../Components/Pagination';


const Landing = (props) => {
    const [showProducts, setShowProducts] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [size, setSize] = React.useState(6);
    const [productName, setProductName] = React.useState("");
    const [totalData, setTotalData] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortby, setSortby] = React.useState("name");
    const [order, setOrder] = React.useState("ASC");

    const getAllProducts = async () => {
        try {
            let token = localStorage.getItem("coffee_login");
            let response = await axios.post(`http://localhost:2000/products/list?page=${page}&size=${size}&name=${productName}&sortby=${sortby}&order=${order}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("ini response.data dari getAllProducts 🪶 : ", response.data);
            console.log("ini ambil total data dari getAllProducts 🪶 : ", response.data.datanum);
            setTotalData(response.data.datanum);
            setShowProducts(response.data.data);
        } catch (error) {
            console.log("dari getAllProducts : ", error);
        }
    };

    //2. Jalani fungsi getAllProducts
    React.useEffect(() => {
        getAllProducts();
    }, [page, sortby, order]); 

    //3. Print list of products
    const printAllProducts = () => {
        console.log("INI ISI Showproducts:", showProducts);
        let print = showProducts.map((val, idx) => {
            console.log("ini val : ", val);
            return < Product name={val.name} productimage={val.product_image} price={val.price} />
        });
        return print;
    }


    // Change page
    const paginate = pageNumber => {
        setPage(pageNumber);
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'black'}
        >
            {/* LEFT CONTENT */}
            <Box flex={{ base: 'none', lg: '1' }}>
            </Box>
            {/* MIDDLE CONTENT */}
            <Box paddingTop='4' pb='8'
                flex='4'
            >
                <Text fontSize='4xl' fontWeight='bold' color='white' p={{ base: '8', lg: '4' }}>
                    Find the best
                    <Text fontSize='4xl' fontWeight='bold' color='white' pb={{ base: '-10', lg: '10' }} pt='-5'>coffee for you</Text>
                </Text>
                <Flex p={{ base: '4', lg: '2' }} >
                    <Flex pl={{ base: '6', lg: '2' }} pr='2'>
                        <SearchBar />
                    </Flex >
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<FiFilter />}
                            variant='outline'
                            color='white'
                            _expanded={{ bg: 'white', color:'black' }}
                        />
                        <MenuList>
                            <MenuItem onClick={() => {
                                setSortby("name")
                                setOrder("ASC") 
                            }}>
                                Sort by product name A-Z
                            </MenuItem>
                            <MenuItem onClick={() => {
                                setSortby("name")
                                setOrder("DESC")
                            }}>
                                Sort by product name Z-A
                            </MenuItem>
                            <MenuItem onClick={() => {
                                setSortby("price")
                                setOrder("ASC")
                            }}>
                                Sort by product price low-high
                            </MenuItem>
                            <MenuItem onClick={() => {
                                setSortby("price")
                                setOrder("DESC")
                            }}>
                                Sort by product name high-low
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex pb='5' pl={{ base: '3', lg: '2' }}>
                    <ButtonGroup>
                        <Button bgColor={"black"} color='white' 
                         _hover={{ bg: '#DE6B1F' }}
                         _active={{
                           bg: '#DE6B1F',
                           transform: 'scale(0.98)',
                         }}
                     >
                            All
                        </Button>
                        <Button bgColor={"black"} color='white'
                        _hover={{ bg: '#DE6B1F' }}
                        _active={{
                          bg: '#DE6B1F',
                          transform: 'scale(0.98)',
                        }}
                        >
                            Coffee
                        </Button>
                        <Button bgColor={"black"} color='white'
                        _hover={{ bg: '#DE6B1F' }}
                        _active={{
                          bg: '#DE6B1F',
                          transform: 'scale(0.98)',
                        }}
                        >
                            Croissant
                        </Button>
                        <Button bgColor={"black"} color='white'
                        _hover={{ bg: '#DE6B1F' }}
                         _active={{
                           bg: '#DE6B1F',
                           transform: 'scale(0.98)',
                         }}>
                            Ice Cream
                        </Button>
                    </ButtonGroup>
                </Flex>
                <Flex maxW='6xs' flexWrap='wrap' justifyContent='space-evenly' alignItem='start'>
                    {printAllProducts()}
                    <Flex my='10' w='full' justify={'center'}>
                        <Pagination size={size} page={page} totalData={totalData} paginate={paginate} />
                    </Flex>
                </Flex>

            </Box>
            {/* RIGHT CONTENT */}
            <Box flex={{ base: 'none', lg: '1' }}>
            </Box>
        </Flex>
    )
};

export default Landing;
