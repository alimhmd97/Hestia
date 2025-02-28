"use client";

import { useCart } from "@/contexts/CartContext";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { WhatsappIcon } from "react-share";

const CartPage = () => {
  const [isWhatsappButtonRendered, setIsWhatsappButtonRendered] =
    useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const { clearCart } = useCart();
  // Regex for a valid Egyptian phone number (starting with +20 or 01X)
  const phoneRegex = /^(?:\+20)?(01[0-9]{9})$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // Validate phone number format
    if (!phoneRegex.test(value)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(!(phoneNumber && name) || error);
  }, [phoneNumber, name]);

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  // Function to open WhatsApp with a pre-filled message
  // const handleConfirmOrder = () => {
  //   const phoneNumber = "201234567890"; // Replace with your WhatsApp number
  //   const message = `Hello, I want to confirm my order.\n\nTotal: ${total} EGP\nMinimum Payment: 100 EGP\n\nPayment Options:\n- Vodafone Cash: 010XXXXXXX\n- InstaPay: 123456789\n\nPlease confirm my order.`;

  //   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //     message
  //   )}`;

  //   window.open(whatsappURL, "_blank");
  // };

  const composeMsg = () => {
    if (!cart.length) return "Hello, my cart is empty.";

    const orderDetails = cart
      .map(
        (item, index) => `${index + 1}. ${item.name} - ${item.quantity} Candles`
      )
      .join("\n");
    const userDetails = `Name: ${name}\n
      Phone: ${phoneNumber}`;
    return `Hello, I want to confirm my order.

  🕯️ Order Summary:
  ${orderDetails}
  Please confirm my order.
  ${userDetails}`;
  };

  return (
    <Container
      sx={{ paddingTop: "100px", maxWidth: "650px", textAlign: "center" }}
    >
      <Card
        sx={{
          padding: 3,
          borderRadius: 3,
          boxShadow: theme.shadows[4],
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            <ShoppingCartTwoToneIcon sx={{ fontSize: "2.2rem" }} /> Your Cart
          </Typography>

          {cart.length === 0 ? (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              mt={3}
            >
              <Typography variant="body1" color="text.secondary">
                Your cart is empty. Start shopping!
              </Typography>
              <Link href="/" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: 2,
                    padding: "10px 25px",
                    fontWeight: "bold",
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": { backgroundColor: theme.palette.primary.dark },
                  }}
                >
                  Add Candles
                </Button>
              </Link>
            </Box>
          ) : (
            <>
              <List sx={{ width: "100%" }}>
                {cart.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: "center",
                      padding: 2,
                      gap: 2,
                      borderRadius: 3,
                      boxShadow: 3,
                      backgroundColor: "background.paper",
                      mb: 2,
                    }}
                  >
                    {/* Product Image */}
                    <Avatar
                      src={item.img}
                      alt={item.name}
                      sx={{
                        width: { xs: 60, sm: 80 },
                        height: { xs: 60, sm: 80 },
                        borderRadius: 2,
                      }}
                    />

                    {/* Product Info */}
                    <Box
                      sx={{
                        flex: 1,
                        textAlign: { xs: "center", sm: "left" },
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          cursor: "pointer",
                          "&:hover": { color: "primary.main" },
                        }}
                        onClick={() => router.push(`${item.id}`)}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Box>

                    {/* Quantity Controls & Delete Button */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",
                      }}
                    >
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => decreaseQuantity(item.id)}
                        sx={{
                          // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                          backgroundColor: "#e5e3e1",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "#fff",
                          },
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography variant="body1" fontWeight="bold">
                        {item.quantity}
                      </Typography>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => increaseQuantity(item.id)}
                        sx={{
                          // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                          backgroundColor: "#e5e3e1",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "#fff",
                          },
                        }}
                      >
                        <AddIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                        sx={{
                          backgroundColor: "#e5e3e1",
                          // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                          "&:hover": {
                            backgroundColor: "error.main",
                            color: "#fff",
                          },
                          ml: { xs: 4, sm: 1 },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Card>
                ))}
              </List>

              <Box
                mt={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 2, sm: 0 },
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Total: ${total}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    flexDirection: { xs: "column", sm: "row" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <Button
                    startIcon={<AddShoppingCartIcon />}
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                    sx={{
                      borderRadius: 2,
                      padding: "8px 20px",
                      backgroundColor: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                      },
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Proceed to Buy
                  </Button>

                  <Button
                    startIcon={<DeleteForeverIcon />}
                    variant="contained"
                    color="primary"
                    onClick={clearCart}
                    sx={{
                      borderRadius: 2,
                      padding: "8px 20px",
                      backgroundColor: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                      },
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Clear Cart
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </CardContent>
      </Card>

      {/* MUI Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Confirm Your Order</DialogTitle>
        <DialogContent>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Total Price: {total} EGP
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            You can pay a minimum of <strong>100 EGP</strong> to confirm the
            order, and the rest upon delivery.
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Payment Options:
          </Typography>
          <Typography variant="body2">
            💳 Vodafone Cash: <strong>010XXXXXXX</strong>
          </Typography>
          <Typography variant="body2">
            🏦 InstaPay: <strong>123456789</strong>
          </Typography>
          <Typography variant="body2" mt={1}>
            📞 For any inquiries, message us on WhatsApp:{" "}
            <strong>+201065663722</strong>
          </Typography>
        </DialogContent>
        {isWhatsappButtonRendered && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "2rem",
            }}
          >
            <TextField
              size="small"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="Enter your name"
              sx={{ width: "calc(50% - .5rem)" }}
            />
            <TextField
              sx={{ width: "calc(50% - .5rem)" }}
              size="small"
              onChange={handleChange}
              value={phoneNumber}
              placeholder="Enter your phone number"
              error={error}
              helperText={error ? "Invalid phone number" : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+2</InputAdornment>
                ),
              }}
            />
            <Box
              component="a"
              href={
                isDisabled
                  ? undefined
                  : `https://wa.me/201065663722?text=${encodeURIComponent(
                      composeMsg()
                    )}`
              }
              target={isDisabled ? undefined : "_blank"}
              rel={isDisabled ? undefined : "noopener noreferrer"}
              sx={{
                display: "inline-block",
                textDecoration: "none",
                pointerEvents: isDisabled ? "none" : "auto", // Disables clicks
                opacity: isDisabled ? 0.5 : 1, // Dim the element to show it's disabled
                cursor: isDisabled ? "not-allowed" : "pointer", // Change cursor when disabled
              }}
            >
              <Button
                variant="contained"
                color="success"
                startIcon={
                  <WhatsappIcon style={{ width: "1.5rem", height: "1.5rem" }} />
                }
                sx={{
                  borderRadius: 2,
                  padding: "6px 16px",
                  minWidth: "auto",
                  height: "40px",
                }}
              >
                Confirm via WhatsApp
              </Button>
            </Box>

            {/* <Box
                component="a"
                href={`https://wa.me/201065663722?text=${encodeURIComponent(
                  composeMsg()
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: "inline-block", textDecoration: "none" }} // Ensures no extra height
              >
                <Button
                  variant="contained"
                  color="success"
                  startIcon={
                    <WhatsappIcon
                      style={{ width: "1.5rem", height: "1.5rem" }}
                    />
                  }
                  sx={{
                    borderRadius: 2,
                    padding: "6px 16px",
                    minWidth: "auto",
                    height: "40px",
                  }}
                >
                  Confirm via WhatsApp
                </Button>
              </Box> */}
          </Box>
        )}
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>

          <Button onClick={() => setIsWhatsappButtonRendered(true)}>
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CartPage;
