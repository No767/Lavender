import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Quicksand",
        colorScheme: "dark",
        headings: { fontFamily: "Quicksand" },
      }}
      withGlobalStyles
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
