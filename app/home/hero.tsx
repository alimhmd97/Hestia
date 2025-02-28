"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection({ scrollToCollection }: any) {
  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "70rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #f1e4db, #d29d93)",
        color: "#4c0f2e",
        padding: { xs: 2, md: 4 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background pattern (optional) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          zIndex: 0,
        }}
      />

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
        }}
      >
        {/* Left Text Section */}
        <Box
          sx={{
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
                color: "#e87f70",
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
                maxWidth: "500px",
                mx: { xs: "auto", md: 0 },
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
            <Button
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
            </Button>
          </motion.div>
        </Box>

        {/* Right SVG Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, md: 2 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Replace with your actual SVG */}
            <svg
              width="300"
              height="300"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Candle base */}
              <rect
                x="70"
                y="120"
                width="60"
                height="60"
                rx="5"
                fill="#e8d0c9"
                stroke="#c76130"
                strokeWidth="2"
              />

              {/* Candle body */}
              <rect
                x="80"
                y="50"
                width="40"
                height="70"
                rx="3"
                fill="#f8f0eb"
                stroke="#c76130"
                strokeWidth="1.5"
              />

              {/* Candle wick */}
              <line
                x1="100"
                y1="30"
                x2="100"
                y2="50"
                stroke="#4c0f2e"
                strokeWidth="2"
              />

              {/* Flame */}
              <motion.path
                d="M100,30 Q90,20 100,10 Q110,20 100,30"
                fill="#ffaa5e"
                animate={{
                  d: [
                    "M100,30 Q90,20 100,10 Q110,20 100,30",
                    "M100,30 Q95,18 100,8 Q105,18 100,30",
                    "M100,30 Q90,20 100,10 Q110,20 100,30",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />

              {/* Inner flame */}
              <motion.ellipse
                cx="100"
                cy="20"
                rx="4"
                ry="6"
                fill="#fff8e0"
                animate={{
                  ry: [6, 7, 6],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
              />

              {/* Light glow */}
              <motion.circle
                cx="100"
                cy="20"
                r="20"
                fill="rgba(255, 200, 97, 0.2)"
                animate={{
                  r: [15, 25, 15],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />

              {/* Decorative elements */}
              <path
                d="M70,150 Q100,160 130,150"
                stroke="#c76130"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="70" cy="135" r="3" fill="#8e322e" />
              <circle cx="130" cy="135" r="3" fill="#8e322e" />
            </svg>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
