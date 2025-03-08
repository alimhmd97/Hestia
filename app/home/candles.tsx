"use client";

import { candles } from "@/consts/general";
import { useCart } from "@/contexts/CartContext";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Candle } from "../[candleId]/page";

const CandleCard = ({ candle }: { candle: Candle }) => {
  const theme = useTheme();
  const [selectedCandleSize, setSelectedCandleSize] = useState<{
    price: number;
    size: number;
  } | null>(candle.prices[0]);
  const { addToCart } = useCart();
  const router = useRouter();
  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 450,
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
        image={candle.imgs[0]}
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
            height: "4rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "1rem",
          }}
        >
          {candle.description}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" mb={1} mt={2}>
          Select Size
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 1 }}>
          {candle?.prices.map((priceOption) => (
            <Box
              key={priceOption.size}
              onClick={() => setSelectedCandleSize(priceOption)}
              sx={{
                border: "1px solid",
                borderColor:
                  selectedCandleSize?.size === priceOption.size
                    ? "primary.main"
                    : "grey.300",
                borderRadius: 1,
                padding: "8px 16px",
                minWidth: "60px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor:
                  selectedCandleSize?.size === priceOption.size
                    ? "primary.light"
                    : "background.paper",
                color:
                  selectedCandleSize?.size === priceOption.size
                    ? "primary.contrastText"
                    : "text.primary",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  backgroundColor: "primary.50",
                },
              }}
            >
              {priceOption.size}ml
            </Box>
          ))}
        </Box>
        {/* <Typography variant="body2" color="text.secondary" mb={3}>
          Price: LE {selectedCandleSize?.price}
        </Typography> */}
        {/* <Typography variant="body2" color={theme.palette.text.primary}>
          <strong>Burn Time:</strong> {candle.burnTime}
        </Typography> */}
        <Typography
          variant="h6"
          color={theme.palette.primary.main}
          fontWeight="bold"
          mt={1}
        >
          LE {selectedCandleSize?.price}
        </Typography>
        <Box
          mt={2}
          sx={{ width: "100%", justifyContent: "space-between" }}
          display="flex"
          justifyContent="center"
        >
          <Button
            onClick={() => {
              const cartCandle = {
                id: Number(candle.id),
                name: candle.name,
                type: candle.type,
                size: Number(selectedCandleSize?.size) || 0,
                price: Number(selectedCandleSize?.price) || 0,
                quantity: 1,
                imgs: candle.imgs,
                description: "string",
                shortDesc: "string",
              };
              addToCart(cartCandle);
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
    <Box
      ref={collectionRef}
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      {/* <Typography variant="h2">Jars</Typography> */}
      {/* <Divider sx={{ width: "100%" }} /> */}
      {candles
        // .filter((el) => el.type === "jar")
        .map((candle: Candle, i) => {
          return <CandleCard key={i} candle={candle} />;
        })}
      {/* <Divider sx={{ width: "100%" }} /> */}

      {/* <Typography variant="h2">Molds</Typography>
      <Divider sx={{ width: "100%" }} /> */}

      {/* {candles
        .filter((el) => el.type === "mold")
        .map((candle: Candle, i) => {
          return <CandleCard key={i} candle={candle} />;
        })} */}
    </Box>
  );
};

export default CandleList;
