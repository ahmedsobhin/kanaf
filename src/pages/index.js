import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import HeroBanner from "../components/HeroBanner";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";

const inter = Inter({ subsets: ["latin"] });

// const products = [
//   {
//     id: 1,
//     name: " كنافة مبرومة  ",
//     price: 18,
//     image: "/product1.jpg",
//     description: "ربع كيلو",
//     size: [
//       { label: "ربع كيلو", price: 18 },
//       { label: "نصف كيلو", price: 35 },
//       { label: "كيلو", price: 70 },
//     ],
//   },
//   // {
//   //   id: 2,
//   //   name: "كنافة مبرومة ",
//   //   price: 35,
//   //   image: "/product4.jpg",
//   //   description: "نصف كيلو",
//   // },
//   // {
//   //   id: 3,
//   //   name: "كنافة مبرومة ",
//   //   price: 70,
//   //   image: "/product1.jpg",
//   //   description: "كيلو",
//   // },

//   {
//     id: 4,
//     name: "كنافة عش",
//     price: 18,
//     image: "/product2.jpg",
//     description: "ربع كيلو",
//     size: [
//       { label: "ربع كيلو", price: 18 },
//       { label: "نصف كيلو", price: 35 },
//       { label: "كيلو", price: 70 },
//     ],
//   },
//   // {
//   //   id: 5,
//   //   name: "كنافة عش ",
//   //   price: 35,
//   //   image: "/product2.jpg",
//   //   description: "نصف كيلو",
//   // },
//   // {
//   //   id: 6,
//   //   name: "كنافة عش ",
//   //   price: 70,
//   //   image: "/product3.jpg",
//   //   description: "كيلو",
//   // },

//   {
//     id: 7,
//     name: "كب كنافة ",
//     price: 18,
//     image: "/product5.jpg",
//     description: "ربع كيلو",
//     size: [
//       { label: "ربع كيلو", price: 18 },
//       { label: "نصف كيلو", price: 35 },
//       { label: "كيلو", price: 70 },
//     ],
//   },
//   // {
//   //   id: 8,
//   //   name: " كب كنافة ",
//   //   price: 35,
//   //   image: "/product5.jpg",
//   //   description: "نصف كيلو",
//   // },
//   // {
//   //   id: 9,
//   //   name: " كب كنافة  ",
//   //   price: 70,
//   //   image: "/product5.jpg",
//   //   description: "كيلو",
//   // },
//   {
//     id: 10,
//     name: "  كنافة نابلسية",
//     price: 35,
//     image: "/product6.jpg",
//     description: "نصف كيلو",
//     size: [
//       { label: "نصف كيلو", price: 35 },
//       { label: "كيلو", price: 70 },
//       { label: "كنافة نابلسية مع السخان", price: 120 },
//     ],
//   },
//   // {
//   //   id: 11,
//   //   name: "  كنافة نابلسية ",
//   //   price: 70,
//   //   image: "/product6.jpg",
//   //   description: "كيلو",
//   // },
//   // {
//   //   id: 12,
//   //   name: "كنافة نابلسية مع السخان",
//   //   price: 120,
//   //   image: "/product6.jpg",
//   //   description: "الحجز المسبق قبلها بفترة كافية",
//   // },
//   {
//     id: 13,
//     name: "خلية كنف ",
//     price: 35,
//     image: "/product9.jpg",
//     description: "صغيرة",
//     size: [
//       { label: "صغيرة", price: 35 },
//       { label: "كبيرة", price: 50 },
//     ],
//   },
//   // {
//   //   id: 14,
//   //   name: "خلية كنف ",
//   //   price: 50,
//   //   image: "/product8.jpg",
//   //   description: "كبيرة",
//   // },
// ];

export default function Home() {
  const [age, setAge] = React.useState("");
  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: " كنافة مبرومة  ",
      price: 18,
      image: "/product1.jpg",
      description: "ربع كيلو",
      quntity: " ",
      withit: "",
      size: [
        { label: "ربع كيلو", price: 18 },
        { label: "نصف كيلو", price: 35 },
        { label: "كيلو", price: 70 },
      ],
      withs: [
        { label: "بستاشيو" },
        { label: "لوتس" },
        { label: "قشطة" },
        { label: "نوتيلا" },
        { label: "مكس" },
      ],
    },
    // {
    //   id: 2,
    //   name: "كنافة مبرومة ",
    //   price: 35,
    //   image: "/product4.jpg",
    //   description: "نصف كيلو",
    // },
    // {
    //   id: 3,
    //   name: "كنافة مبرومة ",
    //   price: 70,
    //   image: "/product1.jpg",
    //   description: "كيلو",
    // },

    {
      id: 4,
      name: "كنافة عش",
      price: 18,
      image: "/product11.jpg",
      description: "ربع كيلو",
      quntity: " ",
      withit: "",
      size: [
        { label: "ربع كيلو", price: 18 },
        { label: "نصف كيلو", price: 35 },
        { label: "كيلو", price: 70 },
      ],
      withs: [],
    },
    {
      id: 5,
      name: " كنافة عش بالتوت",
      price: 30,
      image: "/product3.jpg",
      description: "ربع كيلو",
      quntity: " ",
      withit: "",
      size: [
        { label: "ربع كيلو", price: 30 },
        { label: "نصف كيلو", price: 60 },
        { label: "كيلو", price: 120 },
      ],
      withs: [],
    },
    // {
    //   id: 5,
    //   name: "كنافة عش ",
    //   price: 35,
    //   image: "/product2.jpg",
    //   description: "نصف كيلو",
    // },
    // {
    //   id: 6,
    //   name: "كنافة عش ",
    //   price: 70,
    //   image: "/product3.jpg",
    //   description: "كيلو",
    // },

    {
      id: 7,
      name: "كب كنافة ",
      price: 18,
      image: "/product5.jpg",
      description: "ربع كيلو",
      quntity: " ",
      withit: "",
      size: [
        { label: "ربع كيلو", price: 18 },
        { label: "نصف كيلو", price: 35 },
        { label: "كيلو", price: 70 },
      ],
      withs: [],
    },
    // {
    //   id: 8,
    //   name: " كب كنافة ",
    //   price: 35,
    //   image: "/product5.jpg",
    //   description: "نصف كيلو",
    // },
    // {
    //   id: 9,
    //   name: " كب كنافة  ",
    //   price: 70,
    //   image: "/product5.jpg",
    //   description: "كيلو",
    // },
    {
      id: 10,
      name: "  كنافة نابلسية",
      price: 35,
      image: "/product6.jpg",
      description: "نصف كيلو",
      quntity: " ",
      withit: "",
      size: [
        { label: "نصف كيلو", price: 35 },
        { label: "كيلو", price: 70 },
        { label: "كنافة نابلسية مع السخان", price: 140 },
      ],
      withs: [],
    },
    // {
    //   id: 11,
    //   name: "  كنافة نابلسية ",
    //   price: 70,
    //   image: "/product6.jpg",
    //   description: "كيلو",
    // },
    // {
    //   id: 12,
    //   name: "كنافة نابلسية مع السخان",
    //   price: 120,
    //   image: "/product6.jpg",
    //   description: "الحجز المسبق قبلها بفترة كافية",
    // },
    {
      id: 13,
      name: "خلية كنف ",
      price: 35,
      image: "/product8.jpg",
      description: "صغيرة",
      quntity: " ",
      withit: "",
      size: [
        { label: "صغيرة", price: 35 },
        { label: "كبيرة", price: 50 },
      ],
      withs: [],
    },
    // {
    //   id: 14,
    //   name: "خلية كنف ",
    //   price: 50,
    //   image: "/product8.jpg",
    //   description: "كبيرة",
    // },
  ]);

  const handleChange = (event) => {
    // console.log(products.filter((item) => item.id === event.target.name));

    // console.log(
    //   products.indexOf(products.filter((item) => item.id === event.target.name))
    // );

    const currentItem = products.filter(
      (item) => item.id === event.target.name
    );

    console.log(
      currentItem[0].size.filter((item) => item.label === event.target.value)[0]
        .price
    );

    const index = products.findIndex((c) => c.id == event.target.name);
    const productss = [...products];
    productss[index].price = currentItem[0].size.filter(
      (item) => item.label === event.target.value
    )[0].price;

    productss[index].quntity = event.target.value;
    setProducts(productss);

    console.log(index);

    setAge(event.target.value);
  };

  const handleChangewiths = (event) => {
    const index = products.findIndex((c) => c.id == event.target.name);
    const productss = [...products];

    productss[index].withit = event.target.value;
    setProducts(productss);
  };

  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Kanaf App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
        <ResponsiveAppBar />
        <HeroBanner />

        <Grid container spacing={3} className="products_list">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className="card_item">
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      fontFamily: "Quicksand, Cairo",
                      direction: "rtl",
                      fontWeight: "bold",
                      width: "100%",
                      paddingRight: "3px",
                      position: "relative",
                      top: "0px",
                    }}
                  >
                    {product.name}
                  </Typography>
                  {/* <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      fontFamily: "Quicksand, Cairo",
                      direction: "rtl",
                      fontWeight: "bold",
                      width: "100%",
                      paddingRight: "3px",
                      position: "relative",
                      top: "0px",
                    }}
                  >
                    {product.description}
                  </Typography> */}
                  {product.withs.length > 0 && (
                    <Box sx={{ minWidth: 120, marginTop: "5px" }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          sx={{ fontFamily: "Quicksand, Cairo" }}
                        >
                          محشو ب
                        </InputLabel>
                        <Select
                          sx={{ fontFamily: "Quicksand, Cairo" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={product.withit}
                          label="Age"
                          onChange={handleChangewiths}
                          name={product.id}
                        >
                          {product.withs.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={item.label}
                              sx={{ fontFamily: "Quicksand, Cairo" }}
                            >
                              {item.label}
                            </MenuItem>
                          ))}
                          {/* <MenuItem
                          value={10}
                          sx={{ fontFamily: "Quicksand, Cairo" }}
                        >
                          كيلو
                        </MenuItem> */}
                          {/* <MenuItem
                          value={20}
                          sx={{ fontFamily: "Quicksand, Cairo" }}
                        >
                          نصف كيلو
                        </MenuItem>
                        <MenuItem
                          value={30}
                          sx={{ fontFamily: "Quicksand, Cairo" }}
                        >
                          ربع كيلو
                        </MenuItem> */}
                        </Select>
                      </FormControl>
                    </Box>
                  )}
                  <Box sx={{ minWidth: 120, marginTop: "5px" }}>
                    <FormControl fullWidth>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ fontFamily: "Quicksand, Cairo" }}
                      >
                        الكمية
                      </InputLabel>
                      <Select
                        sx={{ fontFamily: "Quicksand, Cairo" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={product.quntity}
                        label="Age"
                        onChange={handleChange}
                        name={product.id}
                      >
                        {product.size.map((item, index) => (
                          <MenuItem
                            key={index}
                            value={item.label}
                            sx={{ fontFamily: "Quicksand, Cairo" }}
                          >
                            {item.label}
                          </MenuItem>
                        ))}
                        {/* <MenuItem
                          value={10}
                          sx={{ fontFamily: "Quicksand, Cairo" }}
                        >
                          كيلو
                        </MenuItem> */}
                        {/* <MenuItem
                          value={20}
                          sx={{ fontFamily: "Quicksand, Cairo" }}
                        >
                          نصف كيلو
                        </MenuItem>
                        <MenuItem
                          value={30}
                          sx={{ fontFamily: "Quicksand, Cairo" }}
                        >
                          ربع كيلو
                        </MenuItem> */}
                      </Select>
                    </FormControl>
                  </Box>
                  <Typography
                    variant="h6"
                    component="p"
                    style={{
                      fontFamily: "Quicksand, Cairo",
                      // direction: "rtl",
                      fontWeight: "bold",
                      width: "100%",
                      paddingRight: "3px",
                      position: "relative",
                      top: "0px",
                    }}
                  >
                    ر.س {product.price}
                  </Typography>
                  <Button
                    onClick={() => dispatch(addToCart(product))}
                    variant="contained"
                    color="secondary"
                    style={{
                      fontFamily: "Quicksand, Cairo",
                      // direction: "rtl",
                      fontWeight: "bold",
                      width: "50%",
                      paddingRight: "3px",
                      position: "relative",
                      top: "0px",
                      marginTop: "20px",
                    }}
                  >
                    أضف
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
}
