import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import '../css/App.css';
function App() {
  const [ubication, setUbication] = useState([]);
  const { register, handleSubmit } = useForm();
  const Users = [
    {
      id: uuidv4(),
      name: '',
      phone: '',
      address: [...ubication]
    }
  ];

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center mb-4">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className="form-control"
                      {...register('name')}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type='number'
                      id='phone'
                      name='phone'
                      className="form-control"
                    ></input>
                  </div>
                  <button
                    type='submit'
                    className="btn btn-primary btn-block"
                    onClick={onSubmit()}>Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
