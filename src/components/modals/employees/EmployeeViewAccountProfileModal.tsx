import { AiOutlineClose } from "react-icons/ai";
// import { EmployeesTableDataType } from "../../../types/tables/employees";

interface EmployeesViewAccountProfileModalProps {
  handleCloseModal: () => void;
  selectedRowData:object|null;
}

const EmployeeViewAccountProfileModal = ({
  handleCloseModal,selectedRowData
}: EmployeesViewAccountProfileModalProps) => {
 
  if (selectedRowData){

    // const { name } = selectedRowData as EmployeesTableDataType;
    return (
      <div className="fixed inset-0 flex items-center  justify-center z-50 text-black bg-black bg-opacity-80 font-light">
        <div className="bg-white rounded-lg  w-[90%] max-w-4/5 h-[95%] px-3 py-3 overflow-y-auto">
          <div className="flex items-center">
            <div className="flex-1 text-center text-xl">
              <h3 className="font-semibold capitalize">Lorem Ipsum Profile</h3>
            </div>
            <AiOutlineClose
              className="w-5 h-5 text-primary hover:cursor-pointer"
              onClick={() => handleCloseModal()}
            />
          </div>
          <div className="w-2/3 mx-auto">
            <div>
              <h3 className="account-profile-section-header">
                Basic Information 
              </h3>
              <div className="account-grid">
                <div className="col-span-3">
                  <h3 className="account-profile-section-info-header">Profile</h3>
                  <p className="account-profile-section-info-header-detail">
                    A great professional to work with
                  </p>
                </div>
              </div>
              <section className="account-grid">
                <div>
                  <h3 className="account-profile-section-info-header">Team</h3>
                  <p className="account-profile-section-info-header-detail">
                    Lorem ipsum dolor sit
                  </p>
                </div>
                <div>
                  <h3 className="account-profile-section-info-header">
                    Designation
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    Lorem ipsum dolor sit
                  </p>
                </div>
                <div>
                  <h3 className="account-profile-section-info-header">
                    Date of Birth
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    30-06-1975
                  </p>
                </div>
              </section>
              <section className="account-grid">
                <div>
                  <h3 className="account-profile-section-info-header">Email</h3>
                  <p className="account-profile-section-info-header-detail">
                    Loremlor@gmail.com
                  </p>
                </div>
                <div className="account-profile-section-info-header">
                  <h3 className="account-profile-section-info-header">
                    Phone Number
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    080978675843
                  </p>
                </div>
              </section>
            </div>
  
            {/* Educational Details */}
            <div>
              <h3 className="account-profile-section-header">
                Educational Details
              </h3>
              <div className="account-grid">
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Institution
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    Lorem ipsum dolor sit
                  </p>
                </div>
                <div className="">
                  <h3 className="account-profile-section-info-header">Year</h3>
                  <p className="account-profile-section-info-header-detail">
                    2002
                  </p>
                </div>
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Qualification
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    B.sc
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Information */}
            <div>
              <h3 className="account-profile-section-header">
                Contact Information
              </h3>
              <div className="account-grid">
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Personal Email
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    Lorem ipsum dolor sit
                  </p>
                </div>
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Official Email
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    test@gmail.com
                  </p>
                </div>
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Phone Number
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    081616626262
                  </p>
                </div>
              </div>
              <div className="account-grid">
                <div className="">
                  <h3 className="account-profile-section-info-header">Adress</h3>
                  <p className="account-profile-section-info-header-detail">
                    Lorem ipsum dolor sit
                  </p>
                </div>
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Gurantor One Full Name
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    Address Lorem ipsum dolor sit
                  </p>
                </div>
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Gurantor One Full Address
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    Lorem ipsum dolor sit
                  </p>
                </div>
              </div>
              <div className="account-grid">
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Gurantor One Occupation
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    Lorem ipsum dolor sit
                  </p>
                </div>
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Gurantor One aAge
                  </h3>
                  <p className="account-profile-section-info-header-detail">45</p>
                </div>
              </div>
              {/* Gurantor Two */}
              <div className="account-grid">
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Gurantor Two Full Name
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    Manchester United
                  </p>
                </div>
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Gurantor Two Address
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    Address Lorem ipsum dolor sit
                  </p>
                </div>
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Gurantor Two Occupation
                  </h3>
                  <p className="account-profile-section-info-header-detail">
                    Lorem ipsum dolor sit
                  </p>
                </div>
              </div>
              <div className="account-grid">
                <div className="">
                  <h3 className="account-profile-section-info-header">
                    Gurantor Two Age
                  </h3>
                  <p className="account-profile-section-info-header-detail">45</p>
                </div>
              </div>
            </div>
            
            {/* Educational Details */}
            <div>
                  <h3 className="account-profile-section-header" >Educational Details</h3>
                  <div className="account-grid" >
                      <div className="" >
                          <h3 className="account-profile-section-info-header" >Date Employed</h3>
                          <p className="account-profile-section-info-header-detail" >30-02-2023</p>
                      </div>
                      <div className="" >
                          <h3 className="account-profile-section-info-header" >Date of Last Promotion</h3>
                          <p className="account-profile-section-info-header-detail" >30-02-2023</p>
                      </div>
                      <div className="" >
                          <h3 className="account-profile-section-info-header" >Name of Upline/ Team Lead</h3>
                          <p className="account-profile-section-info-header-detail" >Test Name</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
};

export default EmployeeViewAccountProfileModal;
