"use client";

import XIcon from "@/icons/x-ixon";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { AiFillTikTok } from "react-icons/ai";

import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
// import TikTokIcon from "@/components/icons/TikTokIcon"; // Custom TikTok SVG

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 3,
        mt: 5,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography variant="body1">Connect with us:</Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://www.facebook.com/profile.php?id=61572546119542"
              target="_blank"
              color="primary"
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/hestiaforcandles/"
              target="_blank"
              color="secondary"
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://x.com/hestiacandles/status/1884625507095818435?t=XeRhA69uDGTVYXmozqGJDw&s=19"
              target="_blank"
              sx={{ color: "#1DA1F2" }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              href="https://www.whatsapp.com"
              target="_blank"
              sx={{ color: "#25D366" }}
            >
              <WhatsApp />
            </IconButton>
            <IconButton
              href="https://www.tiktok.com/@hestia.scented.ca"
              target="_blank"
            >
              <AiFillTikTok color={theme.palette.primary.main} />
            </IconButton>
          </Stack>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Hestia. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
