import React,{useState,useEffect} from "react";
import JobItem from "../Common/JobItem";
import ReactPaginate from "react-paginate";
import {useHttpClient} from '../Backend/hooks/http-hook';

const Internship = ( {isAdmin} ) => {
  const { sendRequest } = useHttpClient();

  const internshipsDisplayedPerPage = 2;

  const [loadedInternships, setLoadedInternships] = useState();
  const fetchInternships = async () => {
    try {
      const responseData = await sendRequest(
        import.meta.env.VITE_BACKEND_URL + `/offers/get/internships?page=${page}`
      );
      setLoadedInternships(responseData.internships);
    } catch (err) {
      console.error(`ERROR fetching internships`, err);
    }
  };
  const [internshipCount, setInternshipCount] = useState();
  const fetchInternshipCount = async () => {
    try {
      const responseData = await sendRequest(
        import.meta.env.VITE_BACKEND_URL + `/offers/get/internshipcount`
      );
      setInternshipCount(responseData.count);
      setPageCount(Math.ceil(responseData.count / internshipsDisplayedPerPage));
    } catch (err) {
      console.error(`ERROR fetching internship count`, err);
    }
  };

  // handling the pagination
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(0);
  const handlePageClick = (num) => {
    setPage(num);
  };

  useEffect(() => {
    fetchInternshipCount();
    fetchInternships();
  }, [sendRequest, page]);

  return (
    <div className="p-4 sm:ml-64 bg-blue-50">
      {/* Heading starts */}

      <div className="bg-white rounded-lg flex justify-between">
        <h1 className="p-4 text-2xl font-bold">{`Internship Opportunity (${internshipCount})`}</h1>
        <p className="text-gray-400  text-4xl pr-6">...</p>
      </div>

      {/* Heading ends  */}

      <div className="flex">

      {/* Open Internship positions section starts*/}
        <div className="mr-5">
          <div className="bg-white mt-10 rounded-lg flex justify-between">
            <p className="font-semibold p-1 pl-3">Open</p>
            <svg
              className="pt-1 pr-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
            </svg>
          </div>
          <div className="flex gap-4">
          {loadedInternships && loadedInternships.map((item) => {
            return (
              <div key={item.id}>
                <JobItem
                  id={item.id}
                  position={item.heading}
                  employee_salary={item.stipend}
                  date={item.date_posted}
                  stipend={item.stipend}
                  // isAdmin = {isAdmin}
                  isInternship = {true}
                />
              </div>
            );
          })}
          </div>
        </div>

        {/* Open Internship position ends */}

        {/* Closed Internship position starts */}

        {/* <div className="mr-5">
        <div className="bg-white mt-10 rounded-lg flex justify-between">
        <p className="font-semibold p-1 pl-3">Closed</p>
        <svg
          className="pt-1 pr-2 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
        </svg>
      </div>
      {items.map((item) => {
            return (
              <div key={item.id}>
                <JobItem
                  position="Tester"
                  employee_salary="8700"
                  date="2 March 2021, 12:30pm"
                />
              </div>
            );
          })}
        </div> */}

        {/* Closed Internship position ends */}

        {/* Under review Internship position starts */}

        {/* <div className="mr-10">
        <div className="bg-white mt-10 rounded-lg flex justify-between">
        <p className="font-semibold p-1 pl-3">Under review</p>
        <svg
          className="pt-1 pr-2 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
        </svg>
      </div>
      {items.map((item) => {
            return (
              <div key={item.id}>
                <JobItem
                  position="Tester"
                  employee_salary="8700"
                  date="2 March 2021, 12:30pm"
                />
              </div>
            );
          })}
        </div> */}
        {/* Under review Internship position ends */}
      </div>
      <div className='flex justify-center items-center'>
        {internshipCount && (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={(selected) => handlePageClick(selected.selected)}
            containerClassName={"flex items-center mt-10 mr-4 justify-end"}
            pageLinkClassName={
              "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700"
            }
            previousLinkClassName={
              "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-blue-100 hover:text-blue-700"
            }
            nextClassName={"page-item"}
            nextLinkClassName={
              "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-blue-100 hover:text-blue-700"
            }
            breakLinkClassName={
              "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 "
            }
          />
        )}
      </div>
    </div>
  );
};

export default Internship;
