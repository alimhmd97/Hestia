"use client";

import { useCart } from "@/contexts/CartContext";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
            {/* <Image
              src="/assets/images/Hestia-logo.svg"
              alt="CandleLux"
              width={150}
              height={150}
              priority
            /> */}
            Logo
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
