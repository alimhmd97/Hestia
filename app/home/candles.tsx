"use client";

import { candles } from "@/consts/general";
import { CartItem, useCart } from "@/contexts/CartContext";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const CandleCard = ({ candle }: { candle: CartItem }) => {
  const theme = useTheme();
  const { addToCart } = useCart();
  const router = useRouter();
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 3,
        boxShadow: theme.shadows[3],
        backgroundColor: theme.palette.background.paper,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.01)", boxShadow: theme.shadows[6] },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={candle.img}
        alt={candle.name}
        sx={{ borderRadius: "12px 12px 0 0", objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          variant="h6"
          color={theme.palette.text.primary}
          fontWeight="bold"
        >
          {candle.name}
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.text.primary}
          mb={1}
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {candle.description}
        </Typography>

        {/* <Typography variant="body2" color={theme.palette.text.primary}>
          <strong>Burn Time:</strong> {candle.burnTime}
        </Typography> */}
        <Typography
          variant="h6"
          color={theme.palette.primary.main}
          fontWeight="bold"
          mt={1}
        >
          LE {candle.price}
        </Typography>
        <Box
          mt={2}
          sx={{ width: "100%", justifyContent: "space-between" }}
          display="flex"
          justifyContent="center"
        >
          <Button
            onClick={() => {
              addToCart(candle);
            }}
            variant="contained"
            color="primary"
            sx={{ borderRadius: 2, padding: ".2rem .5rem", fontSize: ".9" }}
          >
            Add to Cart
          </Button>
          <Button
            onClick={() => {
              router.push(`/${candle.id}`);
            }}
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: 2,
              padding: ".2rem .5rem",
              fontSize: ".9rem",
              transition: "all 0.3s ease",
              "&:hover": {
                // backgroundColor: "primary.dark",
                color: "#fff",
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const CandleList = ({ collectionRef }: any) => {
  return (
    <Container
      ref={collectionRef}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      {candles.map((candle: CartItem) => {
        return <CandleCard key={candle.id} candle={candle} />;
      })}
    </Container>
  );
};

export default CandleList;
