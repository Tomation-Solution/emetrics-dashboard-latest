import { CgProfile } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";



interface currentRow {
  id:number;
  image:string;
  name:string;
  email:string;
  role:string;
  yearsAtWork:number;
  allTasks:number;
  completedTasks:string;
}

interface EmployeesTableDropDownProps {
  currentRow:currentRow;  
  handleOpenModal:(rowData:object,modalName:string)=>void;
  // handleCloseModal:()=>void;
  
  
}

const EmployeesTableDropDown = ({currentRow,handleOpenModal}:EmployeesTableDropDownProps) => {
  return (
    <div className="absolute right-7 mt-[10px] w-[250px] bg-white border-gray-200 border rounded-lg shadow-lg z-2 ">
    <ul className="divide-y" >
      <li>
        <div
          className="menu-item"
          onClick={() => handleOpenModal(currentRow,'view-company-profile-modal')}
        >
          <CgProfile  className='w-5 h-5' /> View Profile
        </div>
      </li>
      <li>
        <div
          className="menu-item"
          onClick={() => handleOpenModal(currentRow,'delete-employee-account-modal')}
        >
          <AiOutlineDelete  className='w-5 h-5' /> Delete Account
        </div>
      </li>
    </ul>
  </div> 
  )
}

export default EmployeesTableDropDown