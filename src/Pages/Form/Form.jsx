import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import Header from "../../Component/Header";
import React from "react";
import { useForm } from "react-hook-form";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regNumber = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const currencies = [
  { value: "User", label: "User" },
  { value: "Manager", label: "Manager" },
  { value: "Admin", label: "Admin" },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };
  return (
    <div>
      <Header title={"Profile Form"} subtitle={"register and signup your information"} />
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 2 }} direction="row">
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? "This field is required & more than 2 charachter"
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName
              ? "This field is required & more than 2 charachter"
              : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.password)}
        helperText={
          errors.password
            ? "This field is required & more than 5 charachter"
            : null
        }
        {...register("password", { required: true, minLength: 5 })}
        type="password"
        sx={{ flex: 1 }}
        label="Password"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.email)}
        helperText={errors.email ? "Please provide a valid Email adress" : null}
        {...register("email", {
          required: true,
          minLength: 5,
          pattern: regEmail,
        })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.contactNumber)}
        helperText={
          errors.contactNumber ? "Please provide a valid Mobile number" : null
        }
        {...register("contactNumber", {
          required: true,
          minLength: 12,
          pattern: regNumber,
        })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Adress 1" variant="filled" />
      <TextField label="Adress 2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        helperText="Please select your Role"
      >
        {currencies.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{
              width: "100%",
              backgroundColor: "gold",
              fontSize: "1rem",
              fontFamily: "monospace",
              color: "black",
              fontStyle: "italic",
            }}
          >
            Your account created successfully!!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
    </div>
  );
};

export default Form;
