import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2 className="text-center mb-4">หลักสูตรประกาศนียบัตรวิชาชีพ</h2>
        
        {/* Section: Introduction */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <h3>พุทธศักราช 2567</h3>
            <p>
            เป็นหลักสูตรระดับประกาศนียบัตรวิชาชีพหลังจากจบการศึกษาระดับมัธยมศึกษาตอนต้นหรือเทียบเท่า
ซึ ่งเป็นการจัดการศึกษา ด้านวิชาชีพและยกระดับการศึกษาวิชาชีพของบุคคลให้สูงขึ้น สอดคล้อง
กับแผนพัฒนาเศรษฐกิจและสังคมแห ่งชาติ แผนการศึกษาแห ่งชาติ เป็นไปตามกรอบคุณวุฒิแห ่งชาติ
กรอบคุณวุฒิอ้างอิงอาเซียน หรือกรอบคุณวุฒิอื ่นในระดับสากล มาตรฐานการศึกษาของชาติ
และกรอบคุณวุฒิอาชีวศึกษาแห่งชาติโดยเน้นการเรียนรู้ด้วยการปฏิบัติ เพื่อพัฒนาสมรรถนะกําลังคน
ระดับฝีมือ รวมทั้งคุณธรรม จริยธรรม จรรยาบรรณวิชาชีพ และกิจนิสัยที ่เหมาะสมในการทํางาน
ให้สอดคล้องกับความต้องการกําลังคนของตลาดแรงงาน ชุมชนสังคม และการพัฒนาประเทศ
รวมทั้งประกอบอาชีพอิสระได้
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/287364821_5626452760698281_8820890121130721538_n.png?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=szMmNeHhdsYQ7kNvgGjHEcL&_nc_oc=AdhyO_T6pmg1DMUV-Gl9LywutryqEDHoU5bYSIdLkwKvh57bPd5I841PUI_arsTuK7A&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=Awax_xB-YApp9DqNKqA5H0p&oh=00_AYCqo8vorSdd6q0QYd6OuKVHxgBDwUiFJ69YQ4LJCmZqTg&oe=677437BE"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Section: Mission */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <img
              src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/465978142_1089522303173861_2020056444694595837_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UdXtXmcleq8Q7kNvgEOkVo6&_nc_oc=AdgoNe_Opg928Gy8Eymxg10AEM7MbfWKRuwFc7fLE5sZeszcV8I9rZCrYJyP63HkQRM&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AX6xLV4NiwSs0O4u3iOP955&oh=00_AYDg0udwq0_Z3RfompOYeSePI4Rk9BCCe67wqEZ6JfY1SQ&oe=67741804"
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h3>หลักสูตรใหม่</h3>
            <p>
            หลักสูตรประกาศนียบัตรวิชาชีพ พุทธศักราช 2567 เป็นหลักสูตรหลังจากจบการศึกษา
ระดับมัธยมศึกษาตอนต้นหรือเทียบเท่า ที่พัฒนาขึ้นเพื่อใช้ในการจัดการศึกษาด้านวิชาชีพ
ระดับประกาศนียบัตรวิชาชีพ เพื่อยกระดับการศึกษาวิชาชีพของบุคคลให้สูงขึ้น สอดคล้องกับ ยุทธศาสตร์ชาติ
แผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ อุตสาหกรรมเป้าหมายในการพัฒนาประเทศ แผนการศึกษาแห่งชาติ
ความต้องการของสถานประกอบการ รวมทั้งข้อเสนอจากคณะอนุกรรมการร่วมภาครัฐและเอกชน
เพื่อผลิตและพัฒนากําลังคนอาชีวศึกษา (อ.กรอ.อศ.) โดยหลักสูตรดังกล่าวเป็นไปตามกรอบคุณวุฒิแห่งชาติ
(National Qualifications Framework : NQF) และกรอบคุณวุฒิอ้างอิงอาเซียน (ASEAN Qualifications
Reference Framework : AQRF) มาตรฐานการศึกษาของชาติ กรอบคุณวุฒิอาชีวศึกษาแห่งชาติ
และเกณฑ์มาตรฐานคุณวุฒิอาชีวศึกษาระดับประกาศนียบัตรวิชาชีพ
            </p>
          </div>
        </div>

        {/* Section: Key Values */}
        <h3 className="text-center mb-4">กิจกรรมและการแข่งขันทักษะ</h3>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/470135944_1085990173322428_1956281052542621304_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eTo8WTF8854Q7kNvgF5gDIE&_nc_oc=Adh_ltmB3OvLTPk3spaC8QkE0DNHCUasdy41p3MuJZT4d2FeTQxofDEpoJmAYTb1IVE&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=A9gFH01uJmr-b5UHdl5rvM8&oh=00_AYBuLXTagcaGfu2AwpCTKfA4DgIEZbR2nMmc3HVven8Kfg&oe=67743B5A"
                alt="Quality Education"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">ทักษะการเขียนโปรแกรมคอมพิวเตอร์</h5>
                <p className="card-text">
                ขอแสดงความยินดีกับนักศึกษา ระดับภาค ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ได้รับรางวัลรองชนะเลิศ
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/455750420_1003996458188467_5607197828104470552_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Q0vwhi5Wu2UQ7kNvgEs8vQO&_nc_oc=Adjth1pb8O2t3v-BUYrr9TA6CDsk9LNCG9z043Tyn6ZzN4O7XR0qc4Ew6GTDAH20K7k&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=A7hhJFr4ha6MTLeJlXkoAfk&oh=00_AYBgSdPDhm2ZRMSwUdLTwf_HbQjXi855bFCiq2vtdJ8Fig&oe=677423AD"
                alt="Student Empowerment"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">CMESSchoolleague2024</h5>
                <p className="card-text">
                อันดับที่ 1 รอบ Midterm ของจังหวัดเชียงใหม่ เจอกันรอบ End Game จ้า
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/460280362_921015173403066_7148432919746778440_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JfK7ULskfWwQ7kNvgEo1JIy&_nc_oc=AdijmwwwOfa2Y_o47yUwjgmEw1UUWNtQqQSriDGMvhBuxkdDuwJKvbiQ4Tz0mA-ryE8&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=Aax-M_9RVzPC_zQMzFo_3C-&oh=00_AYApPF0QKGc6rYfydvR2js7Qvl64qWwy8dxNAltDJUFTdQ&oe=67743414"
                alt="Community Impact"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">MOE Content Creator Awards</h5>
                <p className="card-text">
                “เพิ่มพูน” มอบรางวัล MOE Content Creator Awards สุดว้าว!! เยาวชน ครู บุคคลทั่วไปกวาดรางวัลเพียบ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
