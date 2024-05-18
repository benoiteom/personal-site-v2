import RootLayout from "./layout";
import Home from "./home";

export default function Page() {
  return (
    <RootLayout>
      {/* <div className="h-screen bg-zinc-700 dark:bg-zinc-300 transition duration-500">
        <div
          style={{
            position: "absolute",
            height: "calc(100vh)",
            width: "100%",
            overflow: "hidden",
            top: 48,
            left: 0,
            boxShadow: "0px 6px 9px 10px rgba(0, 0, 0, 0.5)",
            transform: "translateY(0)",
          }}
        > */}
          <Home />
        {/* </div>
      </div> */}
    </RootLayout>
  );
}
