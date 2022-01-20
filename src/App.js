import content from "./statics";

import {useForm} from "react-hook-form";

import './App.css';

export default function App() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">

      <h1>Registration form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        {content.inputs.map((input, key) => {
          return (
            <div key={key}>
              <div>
                <label htmlFor="">{input.label}</label>
              </div>
              <div>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  {...register(input.name)}
                />
              </div>
            </div>
          )
        })}

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

