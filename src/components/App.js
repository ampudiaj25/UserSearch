import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import '../css/App.css';
import SearchAddress from './searchAddress';
function App() {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([
    {
      id: uuidv4(),
      name: 'Dairo',
      phone: 3233938186,
      address: [
        {
          id: uuidv4(),
          addres: 'calle 16 # 20 -24',
          country: 'Colombia',
          city: 'Cali'
        }
      ]
    }
  ]);
  const userAddresses = users.flatMap(user => user.address);
  const [selectAddress, setSelectAddress] = useState('');
  useEffect(() => {
    console.log(users);
  }, [users]);

  const onSubmit = async (data) => {
    await createUsers(data);
  }

  const createUsers = async (data) => {
    const newData = {
      id: uuidv4(),
      name: data.name,
      phone: data.phone,
      address: [
        {
          id: uuidv4(),
          addres: selectAddress,
          country: data.country,
          city: data.city
        }
      ]
    }
    setUsers([...users, newData]);
    reset();
  }

  const onSelectUser = (addres) => {
    reset(addres);
  };

  const clearFinds = () => {
    reset({
      name: '',
      phone: '',
      country: '',
      city: ''
    });
  };


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
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type='number'
                      id='phone'
                      name='phone'
                      className="form-control"
                      {...register('phone')}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>address</label>
                    <SearchAddress
                      clearFinds={clearFinds}
                      onSelectUser={onSelectUser}
                      userAddresses={userAddresses}
                      setSelectAddress={setSelectAddress}
                    />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type='text'
                      id='country'
                      name='country'
                      className="form-control"
                      {...register('country')}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type='text'
                      id='city'
                      name='city'
                      className="form-control"
                      {...register('city')}
                      required
                    ></input>
                  </div>
                  <button
                    type='submit'
                    className="btn btn-primary btn-block"
                  >Send
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => { clearFinds() }}
                  >Limpiar Campos
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
