import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const UseCasesSection = () => {
  return (
    <Box sx={{ p: 1,paddingLeft:{xs:"20px",sm:"102px"}, backgroundColor: "#f5f5f5", margin: "auto",
    textAlign:'left' 
    
    }}>
      {/* Use Cases Section */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: "0px", sm: 1 },
          justifyContent: "center",
          alignItems: "baseline",
          minWidth: "300px",
        }}
      >
        <Box sx={{ minWidth: { xs: "250px", sm: "300px" } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "500",
              mb: 2,
              color: "primary.main",
              fontSize: { xs: "24px", sm: "40px" },
            }}
          >
            Use Cases
          </Typography>
          <Button
            variant="contained"
            className="usebutton"
            sx={{ fontSize: { xs: "12px", sm: "16px" } }}
            endIcon={<ArrowForwardIcon />}
          >
            Explore the possibilities
          </Button>
        </Box>
        <Box sx={{ mt: 3, overflowX: "auto", whiteSpace: "nowrap", pb: 2 }}>
          <Box sx={{ display: "flex", gap: 3 }}>
            {[
              {
                title: "Authentication & Registration",
                description:
                  "Unified authentication process with a cloud-based identity and access (IAM) offering.",
              },
              {
                title: "Configuration",
                description:
                  "Learn how to run custom jobs to process transaction objects and manage system settings.",
              },
              {
                title: "Get Customer Account",
                description:
                  "Use accounts to initiate transactions and manage invoicing with Clearingworks.",
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                sx={{
                  maxWidth: 300,
                  backgroundColor: "#1E3A8A",
                  color: "white",
                  borderRadius: 2,
                  p: { xs: "4px", sm: "20px" },
                  flexShrink: 0,
                }}
              >
                <CardContent sx={{ textAlign: "left", whiteSpace: "normal" }}>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "18px", sm: "32px" },
                    }}
                  >
                    {useCase.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "300",
                      opacity: "0.9",
                      fontSize: { xs: "11px", sm: "16px" },
                    }}
                  >
                    {useCase.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UseCasesSection;
