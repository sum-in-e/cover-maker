const Page404 = () => {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ fontSize: "30px", fontWeight: 600 }}>
        잘못된 접근입니다 🥲
      </span>
    </div>
  );
};

export default Page404;
