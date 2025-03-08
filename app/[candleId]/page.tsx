"use client";

import {
  candles,
  candleScents,
  candlesColors,
  recommendedColorForScent,
} from "@/consts/general";
import { useCart } from "@/contexts/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { use, useEffect, useState } from "react";
import ColorsMultipleSelectPlaceholder from "./select-color";
import MultipleSelectPlaceholder from "./select-scent";

export interface Candle {
  type: "jar" | "mold"; // Candle type
  id: string | number;
  name: string;
  prices: { price: number; size: number }[];
  description: string;
  shortDesc: string;
  imgs: string[];
}

const SingleCandle = ({ params }: any) => {
  const [selectedScent, setSelectedScent] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const resolvedParams: any = use(params);
  const candleId = resolvedParams?.candleId;

  const currentCandle: Candle | undefined = candles.find(
    (candle) => candle.id === Number(candleId)
  );
  const [selectedCandleSize, setSelectedCandleSize] = useState<{
    price: number;
    size: number;
  } | null>(currentCandle?.prices[0] || null);

  const handleSizeChange = (size: { price: number; size: number }) => {
    setSelectedCandleSize(size);
  };

  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    if (selectedScent) {
      setSelectedColor(recommendedColorForScent[selectedScent]);
    } else {
      // setSelectedColor("");
    }
  }, [selectedScent]);

  return (
    <Container
      //  maxWidth="lg"
      sx={{ paddingTop: { xs: "60px", md: "70px" } }}
    >
      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          background: "linear-gradient(to right, #f9f9f9, #ffffff)",
        }}
      >
        <Grid container spacing={0}>
          {/* Product Image - Right side on desktop, top on mobile */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                height: { xs: "300px", sm: "400px", md: "100%" },
                minHeight: { md: "500px" },
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                image={currentCandle?.imgs[0]}
                alt={currentCandle?.name}
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* Product Details - Left side on desktop, bottom on mobile */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                mb={2}
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.2rem" },
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                {currentCandle?.name}
              </Typography>

              <Typography variant="h6" color="primary" mb={3}>
                LE {selectedCandleSize?.price}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                {currentCandle?.description}
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold" mb={1} mt={2}>
                Select Size
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 1 }}>
                {currentCandle?.prices.map((priceOption) => (
                  <Box
                    key={priceOption.size}
                    onClick={() => handleSizeChange(priceOption)}
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
              <Typography variant="body2" color="text.secondary" mb={3}>
                Price: LE {selectedCandleSize?.price}
              </Typography>

              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Select Scent
                </Typography>
                <MultipleSelectPlaceholder
                  selectedScent={selectedScent}
                  setSelectedScent={setSelectedScent}
                  scents={candleScents || []}
                />

                {currentCandle?.type === "mold" && (
                  <ColorsMultipleSelectPlaceholder
                    selectedColor={selectedColor || ""}
                    setSelectedColor={setSelectedColor}
                    colors={candlesColors}
                  />
                )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  p: 2,
                  width: "fit-content",
                }}
              >
                <IconButton
                  onClick={() => setQuantity(quantity + -1)}
                  sx={{
                    border: "1px solid gray",
                    padding: 0,
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                    },
                    "&:disabled": {
                      borderColor: "rgba(0, 0, 0, 0.26)",
                      color: "rgba(0, 0, 0, 0.26)",
                    },
                  }}
                  disabled={quantity <= 1}
                >
                  <RemoveIcon />
                </IconButton>

                {/* <IconButton
                  onClick={() => setQuantity(quantity + -1)}
                  sx={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #1976d2",
                    borderRadius: "50%",
                    color: "#1976d2",
                    padding: 0,
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                    },
                    "&:disabled": {
                      borderColor: "rgba(0, 0, 0, 0.26)",
                      color: "rgba(0, 0, 0, 0.26)",
                    },
                  }}
                  disabled={quantity <= 1}
                >
                  <Remove fontSize="small" />
                </IconButton> */}

                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    minWidth: "24px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  {quantity}
                </Typography>

                <IconButton
                  onClick={() => setQuantity(quantity + 1)}
                  sx={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid gray",
                    borderRadius: "50%",
                    padding: 0,
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                    },
                  }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  if (currentCandle && selectedCandleSize) {
                    const cartCandle = {
                      id: Number(currentCandle.id),
                      name: currentCandle.name,
                      type: currentCandle.type,
                      size: selectedCandleSize?.size,
                      price: selectedCandleSize?.price,
                      quantity: quantity,
                      imgs: currentCandle.imgs,
                      description: "string",
                      shortDesc: "string",
                      color: selectedColor,
                      scent: selectedScent,
                    };

                    addToCart(cartCandle);
                  }
                }}
                sx={{
                  borderRadius: 2,
                  padding: "12px 30px",
                  textTransform: "none",
                  fontSize: "1rem",
                  maxWidth: { xs: "100%", md: "250px" },
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SingleCandle;
