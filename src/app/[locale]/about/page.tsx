import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl"

export default function About() {

  const t = useTranslations("About");

  return (
    <main className="flex flex-col min-h-screen text-white">
      <Box sx={{display:'flex',height:'100vh' , bgcolor: 'black', justifyContent:'center',alignItems:'center'}}>
        <Typography>{t("title")}</Typography>
      </Box>
    </main>
  )
}
