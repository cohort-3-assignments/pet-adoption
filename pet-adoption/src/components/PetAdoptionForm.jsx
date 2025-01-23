import { useEffect, useState } from "react";


function ValidateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function ValidatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

function ValidateText(text){
    return text.length >= 3;
}

function InputField({label, type, value, setValue,validate}) {
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value);
    const err = validate(type, e.target.value)
    setErrorMessage(err)
  }

  useEffect(() => {
    
  }, [errorMessage])

    return (
        <div class="input-field">
            <label>
                {label}
            </label>
            <input type={type} value={value} onChange={handleChange}/>
            <div class="errorMessage">{errorMessage}</div>
        </div>
    )
}

function PetAdoptionForm({pets,setPets,setFormPage}) {
    const [petname, setPetname] = useState("");
    const [pettype, setPettype] = useState("");
    const [breed,setBreed] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        const _newPet = {
            petname,
            pettype,
            breed,
            name,
            email,
            phone
        }
        
        setPets(prevPets => [...prevPets, _newPet])  
     
    }


    const validate = (type,value) => {
       

        let errmessage = "";

        if(type === "email"){
            if (!ValidateEmail(value)) {
                errmessage = "Invalid Email Format"
            }
        }
        else if(type === "tel"){
            if (!ValidatePhone(value)) {
                errmessage = "Phone number must be 10 digits long"
            }
        }
        else{
            if (!ValidateText(value)) {
                errmessage = "Field must be at least 3 characters long"
            }
        }
        return errmessage;
    
  }


    

  return (
    <>
      <div class="form-container">
      <div class="button-container" style={{justifyContent: "end"}}>
            <button onClick={() => setFormPage(false)}> Go to Pets Table </button>
        </div>
        <h1>Pet Adoption Form</h1>
    
        <form onSubmit={handleSubmit}>
          <InputField label="Pet Name" type="text" value={petname} setValue={setPetname} validate={validate}/>
          <InputField label="Pet Type" type="text" value={pettype} setValue={setPettype} validate={validate}/>
          <InputField label="Breed" type="text" value={breed} setValue={setBreed} validate={validate}/>
          <InputField label="Name" type="text" value={name} setValue={setName} validate={validate}/>
          <InputField label="Email" type="email" value={email} setValue={setEmail} validate={validate}/>
          <InputField label="Phone" type="tel" value={phone} setValue={setPhone} validate={validate}/>
          <button id="submit" type="submit">Submit</button>
        </form>

      </div>
    </>
  )
}

export default PetAdoptionForm;