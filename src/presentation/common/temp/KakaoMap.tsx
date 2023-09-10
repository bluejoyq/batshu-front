import { CSSProperties } from "react";
import { Map } from "react-kakao-maps-sdk";
import { Box } from "@mui/material";
// hooks
import useUserLocation from "@/hook/useUserLocation";

const KakaoMap = () => {
  const {
    location: { lat, lng },
  } = useUserLocation();

  return (
    <Box style={styles.container}>
      <Map center={{ lat, lng }} level={4} style={styles.map}></Map>
    </Box>
  );
};

export default KakaoMap;

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    zIndex: 10,
  },
  map: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  test: {
    position: "relative",
    width: 400,
    height: 400,
    backgroundColor: "#000",
  },
};
