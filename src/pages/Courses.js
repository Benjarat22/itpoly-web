import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function DepartmentsAndCourses() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2 className="text-center mb-5">Departments & Courses</h2>

        {/* Section for Departments */}
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="card shadow mb-4">
              <img
                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/455138866_1016045247188234_4042208517610667754_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SWmwnjG5ZMgQ7kNvgGsnrtl&_nc_oc=AdgBInrKhu2-siJaosdbWB0ZDi4FNdJTZZZj67n6od9uQtIxJmUNmFJsyEH9nqP5o8M&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AKrNQhPtvCDcmbAS9oC4CX8&oh=00_AYCGRk3iTnURh1JTTM-Vw-xkZlZjwLzJ2LX-pMDSXZ8nEQ&oe=67742647"
                alt="Department of IT"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Department of Information Technology</h5>
                <p className="card-text">
                  Our IT department offers courses that equip students with the latest skills in software development, networking, and cybersecurity.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mb-4">
              <img
                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/459834580_1024997306088382_547907509020347879_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SVhJQKhxYKwQ7kNvgFgz2Mq&_nc_oc=AdiwHoA37zbC0LlKP2E5z34NsGMvH-9NQwrycqPEM0UAWnGp3OkIm3ahkQdI-sgynHI&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=Aax-M_9RVzPC_zQMzFo_3C-&oh=00_AYCWSToaCu7wP-9pP63Iw4UCSsSIbz_E04qyYVMT0xXNgg&oe=67741EBB"
                alt="Department of Business"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Department of Business Administration</h5>
                <p className="card-text">
                  We provide business management programs that empower students to lead organizations effectively in the global market.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mb-4">
              <img
                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/458765151_1035385221920903_4211212604950277426_n.jpg?stp=cp6_dst-jpg_p526x395_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=M5DW4rlzncAQ7kNvgHChEDE&_nc_oc=AdhY6iIU4xtvmbW5NYpVuSg9y20pXN9F8LqY7UXx0n5ZIAaaqwPXaeTAmGdic0yLOng&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AJecfPESKu06-JdhXDVrwgj&oh=00_AYD4qUv4hy5LAKr04o7ghKyfQKvxhGhMS-i0EzEoJyUYCQ&oe=677418EC"
                alt="Department of Design"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Department of Design</h5>
                <p className="card-text">
                  Our design department trains students in graphic design, UX/UI design, and digital media, preparing them for the creative industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section for Courses - Accordion Menu */}
        <h3 className="text-center mb-4">หลักสูตร</h3>
        <div className="accordion" id="courseAccordion">
          {/* Course 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#courseOne"
                aria-expanded="true"
                aria-controls="courseOne"
              >
                กลุ่มอาชีพทัศนศิลป์ 
              </button>
            </h2>
            <div
              id="courseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#courseAccordion"
            >
              <div className="accordion-body">
               สาขาวิชาวิจิตรศิลป์  ,สาขาวิชาวาดเขียน
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#courseTwo"
                aria-expanded="false"
                aria-controls="courseTwo"
              >
                กลุ่มอาชีพก่อสร้างและสถาปัตยกรรม
              </button>
            </h2>
            <div
              id="courseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#courseAccordion"
            >
              <div className="accordion-body">
              สาขาวิชาช่างไม้ ,สาขาวิชาช่างปูน , สาขาวิชาช่างเขียนแบบ ,สาขาวิชาช่างโยธา ,สาขาวิชาช่างสำรวจ
              </div>
            </div>
          </div>

           {/* Course 3 */}
           <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#courseTwo"
                aria-expanded="false"
                aria-controls="courseTwo"
              >
                กลุ่มอาชีพอุตสาหกรรมการผลิต
              </button>
            </h2>
            <div
              id="courseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#courseAccordion"
            >
              <div className="accordion-body">
              สาขาวิชาช่างกลโรงงาน ,สาขาวิชาช่างเชื่อมโลหะ , สาขาวิชาช่างเขียนแบบเครื่องกล,สาขาวิชาช่างปั๊มโลหะ ,สาขาวิชาช่างสำรวจ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentsAndCourses;
