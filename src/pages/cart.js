/* eslint-disable react/jsx-key */
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const withitText = "محشو ب ";
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantityno * item.price,
      0
    );
  };

  const sendOrder = () => {
    let message = "";
    // const message = cart
    //   .map((p) => {
    //     ` ${p.quantityno} - ${p.quntity} - ${p.name}`;
    //   })
    //   .join("\n");

    cart.forEach((p) => {
      if (p.withit.length < 1) {
        message += ` ${p.quantityno} - ${p.quntity} - ${p.name}` + "\n";
      } else {
        message +=
          ` ${p.quantityno} - ${p.quntity} - ${p.name} - ${withitText}${p.withit}` +
          "\n";
      }
    });
    const encodedMessage = encodeURIComponent(message);

    //+966595005225
    const whatsappNumber = "+201018462946";
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    console.log(url);
    window.open(url);
  };

  return (
    <div style={{ backgroundColor: "", width: "100vw", height: "100vh" }}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar
                className="card_item"
                sx={{ justifyContent: "space-between" }}
              >
                {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, fontFamily: "cairo", color: "black" }}
                >
                  مشترياتي
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    textAlign: "end",
                    fontFamily: "cairo",
                    color: "black",
                  }}
                >
                  الاجمالي : {getTotalPrice().toFixed(2)} ر.س
                </Typography>{" "}
              </Toolbar>
            </AppBar>
          </Box>
          <Grid
            container
            spacing={3}
            className="products_list"
            sx={{
              justifyContent: "center",
              fontFamily: "cairo",
              color: "black",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {cart.map((item) => (
              // <div>
              //   <div>
              //     <Image src={item.image} height="90" width="65" />
              //   </div>
              //   <p>{item.name}</p>
              //   <p>$ {item.price}</p>
              //   <p>{item.quntity}</p>
              //   <div>
              //     <button onClick={() => dispatch(incrementQuantity(item.id))}>
              //       +
              //     </button>
              //     <button onClick={() => dispatch(decrementQuantity(item.id))}>
              //       -
              //     </button>
              //     <button onClick={() => dispatch(removeFromCart(item.id))}>
              //       x
              //     </button>
              //   </div>
              //   <p>$ {item.quantityno}</p>
              // </div>
              <Grid item key={item.id} xs="auto" sm="auto" md="auto">
                <Card
                  className="card_item"
                  sx={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <IconButton
                      sx={{ color: "red" }}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <CloseIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>

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
                      ر.س {item.price * item.quantityno}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        variant=""
                        sx={{ textAlign: "end" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{ textAlign: "end" }}
                        variant=""
                        color="text.secondary"
                        component="div"
                      >
                        {item.withit.length > 1 && withitText + item.withit}
                      </Typography>
                      <Typography
                        component="div"
                        variant=""
                        sx={{ textAlign: "end" }}
                      >
                        {item.quntity}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        alignSelf: "flex-end",
                        paddingRight: "10px",

                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <Button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        variant="contained"
                        sx={{
                          backgroundColor: "blueviolet",
                          padding: "0px",
                          minWidth: "0px",
                        }}
                      >
                        <AddIcon />
                      </Button>
                      <Typography
                        component="div"
                        variant=""
                        sx={{
                          textAlign: "",
                          padding: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        {item.quantityno}
                      </Typography>
                      <Button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        variant="contained"
                        sx={{
                          backgroundColor: "blueviolet",
                          padding: "0px",
                          minWidth: "0px",
                        }}
                      >
                        <RemoveIcon />
                      </Button>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={item.image}
                    alt="Live from space album cover"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            onClick={sendOrder}
            variant="contained"
            color="secondary"
            style={{
              fontFamily: "Quicksand, Cairo",
              // direction: "rtl",
              fontWeight: "bold",
              width: "100%",
              //   padding: "3px",
              //   position: "relative",
              top: "0px",
              marginBottom: "50px",
            }}
          >
            اطلب
          </Button>
          {/* <h2>Grand Total: $ {getTotalPrice().toFixed(2)}</h2> */}
        </>
      )}
    </div>
  );
};

export default CartPage;
