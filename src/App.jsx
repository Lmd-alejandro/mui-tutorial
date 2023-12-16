import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const initForm = { email: "", password: "" }

function App() {
  const [form, setForm] = useState(initForm);

  //Funcion que guarda valores 
  const handleChange = ({target}) => {
    const { value, name } = target;
    setForm((prop) => ({
      ...prop, [name]: value
    }))
  };

  //Funcion submit
  const handleSubmit = () => {
    console.log(form)
  }

  return (
    <>
      <Stack p={2} alignItems="center">
        <Stack spacing={2} maxWidth="600px" width="100%">
          <TextField label="Email" name="email" onChange={handleChange} fullWidth/>
          <TextField label="Password" name="password" onChange={handleChange} fullWidth />
          <Button variant="contained" onClick={handleSubmit} >Submit</Button>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
