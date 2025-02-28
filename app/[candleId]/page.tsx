"use client";

import {
  candles,
  candlesColors,
  recommendedColorForScent,
} from "@/consts/general";
import { useCart } from "@/contexts/CartContext";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ColorsMultipleSelectPlaceholder from "./select-color";
import MultipleSelectPlaceholder from "./select-scent";

export interface Candle {
  id: string | number;
  name: string;
  price: number;
  img: string;
  description: string;
  shortDesc: string;
  scents: string[];
}

const SingleCandle = ({ params }: any) => {
  const [selectedScent, setSelectedScent] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { addToCart } = useCart();
  const candleId = params?.candleId;

  const currentCandle: Candle | undefined = candles.find(
    (candle) => candle.id === Number(candleId)
  );

  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    if (selectedScent) {
      setSelectedColor(recommendedColorForScent[selectedScent]);
    } else {
      setSelectedColor(" ");
    }
  }, [selectedScent]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: { xs: "70px", md: "100px" } }}>
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
                image={currentCandle?.img}
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
                ${currentCandle?.price}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Typography
                variant="body1"
                mb={4}
                sx={{
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                {currentCandle?.description}
              </Typography>

              <Box mb={4}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Select Scent
                </Typography>
                <MultipleSelectPlaceholder
                  selectedScent={selectedScent}
                  setSelectedScent={setSelectedScent}
                  scents={currentCandle?.scents || []}
                />

                <ColorsMultipleSelectPlaceholder
                  selectedColor={selectedColor || ""}
                  setSelectedColor={setSelectedColor}
                  colors={candlesColors}
                />
              </Box>

              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  if (currentCandle) addToCart(currentCandle);
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
