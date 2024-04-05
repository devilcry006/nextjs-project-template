import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {

  const t = useTranslations("Home")

  return (
    <main className="flex flex-col min-h-screen text-white">
      <Box sx={{display:'flex',height:'100vh' , bgcolor: 'black', justifyContent:'center',alignItems:'center'}}>
        <Typography>{t("title")}</Typography>
      </Box>
      <Box sx={{display:'flex',height:'100vh' , bgcolor: 'black', justifyContent:'center',alignItems:'center'}}>
        Section 2
      </Box><Box sx={{display:'flex',height:'100vh' , bgcolor: 'black', justifyContent:'center',alignItems:'center'}}>
        Section 3
      </Box>
    </main>
  );
}
