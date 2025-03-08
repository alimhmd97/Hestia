"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection({ scrollToCollection }: any) {
  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "15rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        color: "#4c0f2e",
        padding: { xs: 2, md: 4 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background pattern (optional) */}

      {/* Content Container */}
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 8 },
          zIndex: 1,
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Left Text Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column" },
            alignItems: "center",
            justifyContent: "center",
            textAlign: { xs: "center", md: "left" },
            flex: 1,
            order: { xs: 2, md: 1 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontFamily: "'Playfair Display', serif",
                // color: "#e87f70",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Welcome to Hestia Candles!
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                marginTop: 2,
                fontSize: { xs: "1rem", md: "1.1rem" },
                // maxWidth: "500px",
                mx: { xs: "auto", md: 0 },
                // maxWidth: "500px",
              }}
            >
              Experience warmth, comfort, and elegance with our handcrafted
              candles, designed to transform your space into a sanctuary of
              peace.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* <Button
              onClick={scrollToCollection}
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                backgroundColor: "#c76130",
                color: "white",
                padding: "10px 30px",
                fontWeight: "bold",
                borderRadius: "4px",
                textTransform: "none",
                fontSize: "1rem",
                boxShadow: "0px 4px 10px rgba(199, 97, 48, 0.3)",
                "&:hover": {
                  backgroundColor: "#8e322e",
                  transform: "translateY(-2px)",
                  boxShadow: "0px 6px 15px rgba(142, 50, 46, 0.4)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Shop Our Collection
            </Button> */}
          </motion.div>
        </Box>

        {/* Right SVG Section */}
      </Container>
    </Box>
  );
}
