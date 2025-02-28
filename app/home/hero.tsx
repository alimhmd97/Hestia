"use client";

import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(180deg, #f1e4db, #d29d93)",
        color: "#4c0f2e",
      }}
    >
      {/* Welcome Text */}
      <Box sx={{ marginLeft: 4 }}>
        <motion.div
          animate={{ opacity: [0, 1], x: [0, 10], scale: [0.8, 1.1] }}
          transition={{
            duration: 1.5,
            repeat: 2,
            repeatType: "mirror",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontFamily: "'Playfair Display', serif",
              color: "#e87f70",
              animation: "shine 2s infinite ease-in-out",
            }}
          >
            Welcome to Hestia Candles!
          </Typography>
        </motion.div>
        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
          Experience warmth, comfort, and elegance.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#c76130",
            "&:hover": { backgroundColor: "#8e322e" },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}
