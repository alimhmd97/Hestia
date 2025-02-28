"use client";

import { useCart } from "@/contexts/CartContext";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const theme = useTheme();
  const { cart } = useCart();
  console.log(cart);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: theme.shadows[3],
        backdropFilter: "blur(8px)",
        padding: "10px 20px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link href="/" passHref>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Image src="/logo.png" alt="CandleLux" width={40} height={40} />
            <Typography
              variant="h5"
              fontWeight="bold"
              color={theme.palette.text.primary}
              sx={{
                marginLeft: "8px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              CandleLux
            </Typography>
          </Box>
        </Link>

        {/* Cart Icon */}
        <Box>
          <Link href="/cart" passHref>
            <IconButton color="primary">
              <Badge badgeContent={cart.length} color="error">
                <LocalMallIcon />
              </Badge>
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
