

function PetAdoptionTable({ pets,setFormPage }) {
  return (
    <div class="table-container">
        <div class="button-container">
            <button onClick={() => setFormPage(true)}> Back to Form</button>
        </div>
    <h2>Pet Adoption Table</h2>

    <table>
      <thead>
        <tr>
          <th>Pet Name</th>
          <th>Pet Type</th>
          <th>Breed</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
              <tr key={index}>
              <td>{pet.petname}</td>
              <td>{pet.pettype}</td>
              <td>{pet.breed}</td>
              <td>{pet.name}</td>
              <td>{pet.email}</td>
              <td>{pet.phone}</td>
            </tr>
          ))}
        </tbody>

    </table>
    </div>
    );
}


export default PetAdoptionTable;