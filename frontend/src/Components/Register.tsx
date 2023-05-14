import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const register = async () => {
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(await response.json());
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
        mt: 3,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(evt) => {
          setUser({ ...user, name: evt.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(evt) => {
          setUser({ ...user, email: evt.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        onChange={(evt) => {
          setUser({ ...user, password: evt.target.value });
        }}
      />
      <Button variant="contained" onClick={register}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
