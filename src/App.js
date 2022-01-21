import content from "./statics";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import './App.css';
import {Box, Button, TextField} from "@mui/material";

const schema = yup.object().shape({
  username: yup.string().required("First Name should be required please"),
  password: yup.string().min(4).max(15).required(),
  email: yup.string().required("Please enter your email").email(),
});

export default function App() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Box className="App">

      <h1>Registration form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        {content.inputs.map((input, key) => {
          return (
            <Box key={key}>
              <Box>
                <label>{input.label}</label>
              </Box>
              <Box>
                <TextField id="filled-basic"
                           variant="filled"
                           label={input.placeholder}
                           name={input.name}
                           type={input.type}
                           error={errors[input.name]}
                           {...register(input.name)}
                           helperText={errors[input.name] ? errors[input.name]?.message : ' '}
                />
              </Box>
            </Box>

          )
        })}

        <Button variant="contained" type="submit" padding-top="10px">Register</Button>
      </form>


    </Box>
  );
}

