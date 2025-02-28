import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button } from "@mui/material";
import { WhatsappShareButton } from "react-share";

const WhatsAppShare = () => {
  const phoneNumber = "201234567890"; // Replace with your WhatsApp number
  const message = `Hello, I want to confirm my order.\n\nTotal: 250 EGP\nMinimum Payment: 100 EGP\n\nPayment Options:\n- Vodafone Cash: 010XXXXXXX\n- InstaPay: 123456789\n\nPlease confirm my order.`;

  return (
    <WhatsappShareButton
      url={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
    >
      <Button
        variant="contained"
        color="success"
        startIcon={<WhatsAppIcon />}
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: 2,
        }}
      >
        Share on WhatsApp
      </Button>
    </WhatsappShareButton>
  );
};

export default WhatsAppShare;
