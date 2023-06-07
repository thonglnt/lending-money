import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContactUs } from './components/contact';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
    // <ContactUs />
    // <!-- header -->
    // <>
    // <div className="container-fuild header position-relative">
    //    <div className="position-absolute box_header">
    //       <h2 className="text_header text-white ms-5 mt-5">VAY TÍN CHẤP</h2>
    //       <h2 className="text_header text-white text-end me-5">LÃI SUẤT THẤP</h2>
    //       <div className=" text-white position-absolute mt-5 ms-5">
    //          <div
    //             className="d-flex justify-content-center"
    //             >
    //             <button
    //                className="btn text-center btn-header position-relative"
    //                >
    //                <h4>BẢO MẬT 100%</h4>
    //                <hr className="the-line bg-white position-absolute" />
    //             </button>
    //          </div>
    //       </div>
    //    </div>
    // </div>
    // <div className="row d-flex zindex-fixed justify-content-center list-choice rounded w-100">
    //    <div className="col-3 ">
    //       <div className="card card-header bg-white text-center">
    //          <div className="text-center">
    //             <svg
    //                xmlns="http://www.w3.org/2000/svg"
    //                width="100%"
    //                height="100%"
    //                preserveAspectRatio="none"
    //                viewBox="0 0 1611.2499 1896.0833"
    //                className="icon_header"
    //                fill="rgba(232, 140, 48, 1)"
    //                >
    //                <path
    //                   d="M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H96q-40 0-68-28t-28-68V96q0-40 28-68T96 0h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528V640H992q-40 0-68-28t-28-68V128H128v1536h1280zM384 800q0-14 9-23t23-9h704q14 0 23 9t9 23v64q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-64zm736 224q14 0 23 9t9 23v64q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704zm0 256q14 0 23 9t9 23v64q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704z"
    //                   ></path>
    //             </svg>
    //          </div>
    //          <div className="card-body">
    //             <h6 className="card-title">Hồ sơ đơn giản</h6>
    //             <h6 className="card-title">Phê duyệt nhanh</h6>
    //             <button className="btn btn-success btn-register">ĐĂNG KÝ VAY</button>
    //          </div>
    //       </div>
    //    </div>
    //    <div className="col-3">
    //       <div className="card card-header bg-white text-center">
    //          <div className="text-center">
    //             <svg
    //                xmlns="http://www.w3.org/2000/svg"
    //                width="100%"
    //                height="100%"
    //                preserveAspectRatio="none"
    //                viewBox="0 0 974.0545 1896.0833"
    //                className="icon_header"
    //                fill="rgba(232, 140, 48, 1)"
    //                >
    //                <path
    //                   d="M885 566q18 20 7 44L352 1767q-13 25-42 25-4 0-14-2-17-5-25.5-19t-4.5-30l197-808-406 101q-4 1-12 1-18 0-31-11-18-15-13-39l201-825q4-14 16-23t28-9h328q19 0 32 12.5t13 29.5q0 8-5 18L443 651l396-98q8-2 12-2 19 0 34 15z"
    //                   ></path>
    //             </svg>
    //          </div>
    //          <div className="card-body">
    //             <h6 className="card-title">Hồ sơ đơn giản</h6>
    //             <h6 className="card-title">Phê duyệt nhanh</h6>
    //             <button className="btn btn-success btn-register">ĐĂNG KÝ VAY</button>
    //          </div>
    //       </div>
    //    </div>
    //    <div className="col-3">
    //       <div className="card card-header bg-white text-center">
    //          <div className="text-center">
    //             <svg
    //                xmlns="http://www.w3.org/2000/svg"
    //                width="100%"
    //                height="100%"
    //                preserveAspectRatio="none"
    //                viewBox="0 0 1611.2499 1896.0833"
    //                className="icon_header"
    //                fill="rgba(232, 140, 48, 1)"
    //                >
    //                <path
    //                   d="M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H96q-40 0-68-28t-28-68V96q0-40 28-68T96 0h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528V640H992q-40 0-68-28t-28-68V128H128v1536h1280zM384 800q0-14 9-23t23-9h704q14 0 23 9t9 23v64q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-64zm736 224q14 0 23 9t9 23v64q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704zm0 256q14 0 23 9t9 23v64q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704z"
    //                   ></path>
    //             </svg>
    //          </div>
    //          <div className="card-body">
    //             <h6 className="card-title">LÃI SUẤT THẤP</h6>
    //             <h6 className="card-title">HƠN THỊ TRƯỜNG</h6>
    //             <button className="btn btn-success btn-register">ĐĂNG KÝ VAY</button>
    //          </div>
    //       </div>
    //    </div>
    //    <div className="col-3">
    //       <div className="card card-header bg-white text-center">
    //          <div className="text-center">
    //             <svg
    //                xmlns="http://www.w3.org/2000/svg"
    //                width="100%"
    //                height="100%"
    //                preserveAspectRatio="none"
    //                viewBox="0 0 1920 1896.0833"
    //                className="icon_header"
    //                fill="rgba(232, 140, 48, 1)"
    //                >
    //                <path
    //                   d="M768 1152h384v-96h-128V608H910L762 745l77 80q42-37 55-57h2v288H768v96zm512-256q0 70-21 142t-59.5 134-101.5 101-138 39-138-39-101.5-101-59.5-134-21-142 21-142 59.5-134T822 519t138-39 138 39 101.5 101 59.5 134 21 142zm512 256V640q-106 0-181-75t-75-181H384q0 106-75 181t-181 75v512q106 0 181 75t75 181h1152q0-106 75-181t181-75zm128-832v1152q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1792q26 0 45 19t19 45z"
    //                   ></path>
    //             </svg>
    //          </div>
    //          <div className="card-body">
    //             <h6 className="card-title">Khoảng vay tới 900</h6>
    //             <h6 className="card-title">triệu</h6><br/>
    //             <button className="btn btn-success btn-register">ĐĂNG KÝ VAY</button>
    //          </div>
    //       </div>
    //    </div>
    // </div>
    // {/* <!-- head-content -->
    // <!-- center content --> */}
    // <div className="container-fuild">
    //    <div className="row d-flex zindex-fixed justify-content-center text-center w-100">
    //       <div className="row mt-5 d-flex zindex-fixed justify-content-center center_content center-content_radius bg-success">
    //          <div className="col-12 btn-title">
    //             <div className="btn-title-content bg-white text-white">
    //                Ưu điểm nổi bật
    //             </div>
    //          </div>
    //          <div className="col-3 ">
    //             <div className="box_center_content_text bg-white w-100">
    //                Đáp ứng nhanh chóng các nhu  <br /> cầu chi tiêu đột xuất
    //             </div>
    //          </div>
    //          <div className="col-3 box_center_content">
    //             <div className="bg-white box_center_content_text w-100 ">
    //                Thủ tục hồ sơ giản lược, thời  <br /> gian phê duyệt nhanh chóng
    //             </div>
    //          </div>
    //          <div className="col-3 box_center_content">
    //             <div className="bg-white box_center_content_text w-100 ">
    //                Không cần thế chấp tài sản <br /> đảm bảo  
    //             </div>
    //          </div>
    //       </div>
    //       <div className="row d-flex zindex-fixed justify-content-center text-center mt-5 w-100">
    //          <div className="row mt-5 d-flex zindex-fixed justify-content-center  center_content_2 center-content_radius">
    //             <div className="col-6">
    //                <img className="mt-5" style="width: 50%; border-radius: 15px" src="./assets/images_content_center.jpg" alt="" />
    //             </div>
    //             <div className="col-6">
    //                <div className="d-flex align-items-center mt-5">
    //                   <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" preserveAspectRatio="none" viewBox="0 0 24 24" className="" fill="rgba(238, 233, 102, 1)">
    //                      <path d="M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"></path>
    //                   </svg>
    //                   <h3 className="text-white">HÌNH THỨC ĐA DẠNG</h3>
    //                </div>
    //                <div className="text-start">
    //                   <h5><i className="fa fa-check" style="font-size:24px;color: rgb(238,233,102)"></i>Vay theo lương (chuyển khoản hoặc tiền mặt)</h5>
    //                   <h5><i className="fa fa-check" style="font-size:24px;color: rgb(238,233,102)"></i>Vay theo bảo hiểm nhân thọ.</h5>
    //                   <h5><i className="fa fa-check" style="font-size:24px;color: rgb(238,233,102)"></i>Vay theo hợp đồng tín dụng ở tổ chức tín dụng khác.</h5>
    //                   <h5><i className="fa fa-check" style="font-size:24px;color: rgb(238,233,102)"></i>Vay theo thẻ bảo hiểm y tế</h5>
    //                </div>
    //             </div>
    //          </div>
    //       </div>
    //    </div>
    //    <div className="row d-flex zindex-fixed justify-content-center text-center mt-5 w-100">
    //       <div className="row mt-5 d-flex zindex-fixed justify-content-center  center_content_2 center-content_radius">
    //          <div className="col-6">
    //             <div className="d-flex align-items-center mt-5">
    //                <h3 className="text-white">ĐIỀU KIỆN ĐƠN GIẢN</h3>
    //                <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" preserveAspectRatio="none" viewBox="0 0 24 24" className="" fill="rgba(238, 233, 102, 1)">
    //                   <path d="M15,10.5A1.5,1.5 0 0,1 13.5,12C14.34,12 15,12.67 15,13.5V15C15,16.11 14.11,17 13,17H9V15H13V13H11V11H13V9H9V7H13C14.11,7 15,7.89 15,9M19,3H5C3.91,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19C20.11,21 21,20.1 21,19V5A2,2 0 0,0 19,3Z"></path>
    //                </svg>
    //             </div>
    //             <div className="text-start">
    //                <h6><i className="fa fa-check" style="font-size:24px;color: rgb(238,233,102)"></i>Độ tuổi: 18- 69 tuổi</h6>
    //                <h6><i className="fa fa-check" style="font-size:24px;color: rgb(238,233,102)"></i>Đi làm nhận lương chuyển khoản/ tiền mặt hoặc Kinh doanh có bảo hiểm nhân thọ.</h6>
    //                <h6><i className="fa fa-check" style="font-size:24px;color: rgb(238,233,102)"></i>Thu nhập lương chuyển khoản tối thiểu 4 triệu đồng/ tháng.</h6>
    //                <h6><i className="fa fa-check" style="font-size:24px;color: rgb(238,233,102)"></i>Không có nợ xấu tại các tổ chức tín dụng.</h6>
    //                <h6><i className="fa fa-check" style="font-size:24px;color: rgb(238,233,102)"></i>Đã từng từ chối tại các ngân hàng vẫn có thể tiếp tục làm hồ sơ</h6>
    //             </div>
    //          </div>
    //          <div className="col-6">
    //             <img className="mt-5" style="width: 50%; border-radius: 15px" src="./assets/images_content_center_2.jpg" alt="" />
    //          </div>
    //       </div>
    //    </div>
    // </div>
    // <div className="row d-flex zindex-fixed justify-content-center text-center mt-5 w-100 ">
    //    <div className="row mt-5 d-flex zindex-fixed justify-content-center  center_content_3 center-content_radius ">
    //       <div className="col-6 ">
    //          <div className="d-flex zindex-fixed justify-content-center  mt-5 text-start text_center_content_title">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" preserveAspectRatio="none" viewBox="0 0 24 24" className="" fill="rgba(232, 140, 48, 1)">
    //                <path d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M15,15H17V5H15V9H13V5H11V11H15M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"></path>
    //             </svg>
    //             <h4 >BƯỚC ĐĂNG KÝ VAY <br />
    //                NHANH CHÓNG
    //             </h4>
    //          </div>
    //          <p className="text-center ms-5 ">Thời gian vay tín chấp linh hoạt <br />
    //             Không hỗ trợ khoản vay có thời hạn dưới 60 ngày.
    //          </p>
    //          <hr className="the-line icon_margin" />
    //          <div className="d-flex zindex-fixed justify-content-center ">
    //             <div className="card content_center_4 center_content_size ">
    //                <div className="card-body ">
    //                   <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="20%" preserveAspectRatio="none" viewBox="0 0 24 24" className="" fill="rgba(16, 145, 115, 1)">
    //                      <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
    //                   </svg>
    //                   <h6 className="card-title">KÝ KẾT HỢP ĐỒNG</h6>
    //                   <p className="card-text">Hỗ trợ ký hợp đồng online hoặc trực tiếp</p>
    //                </div>
    //             </div>
    //             <div className="card content_center_5 center_content_size">
    //                <div className="card-body">
    //                   <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="20%" preserveAspectRatio="none" viewBox="0 0 24 24" className="" fill="rgba(255, 255, 255, 1)">
    //                      <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
    //                   </svg>
    //                   <h6 className="card-title">PHÊ DUYỆT - GIẢI NGÂN</h6>
    //                   <p className="card-text">Đợi 24 tiếng tính từ ngày sau ngày ký kết hợp đồng để được thẩm định và phê duyệt khoản vay</p>
    //                </div>
    //             </div>
    //          </div>
    //       </div>
    //       <div className="col-6 d-flex">
    //          <div className="card content_center_4 center_content_size">
    //             <div className="card-body">
    //                <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="20%" preserveAspectRatio="none" viewBox="0 0 24 24" className="" fill="rgba(16, 145, 115, 1)">
    //                   <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
    //                </svg>
    //                <h6 className="card-title">KÝ KẾT HỢP ĐỒNG</h6>
    //                <p className="card-text">Hỗ trợ ký hợp đồng online hoặc trực tiếp</p>
    //             </div>
    //          </div>
    //          <div className="card content_center_5 center_content_size">
    //             <div className="card-body">
    //                <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="20%" preserveAspectRatio="none" viewBox="0 0 24 24" className="" fill="rgba(255, 255, 255, 1)">
    //                   <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
    //                </svg>
    //                <h6 className="card-title">PHÊ DUYỆT - GIẢI NGÂN</h6>
    //                <p className="card-text">Đợi 24 tiếng tính từ ngày sau ngày ký kết hợp đồng để được thẩm định và phê duyệt khoản vay</p>
    //             </div>
    //          </div>
    //       </div>
    //    </div>
    // </div>
    // {/* </div> */}
    // <div className="row d-flex zindex-fixed justify-content-center text-center mt-5 w-100">
    //    <h4 style="color: rgb(232, 140, 48);">BẢNG MINH HỌA SỐ TIỀN PHẢI ĐÓNG HÀNG THÁNG</h4>
    //    <p>Bảng lãi suất chỉ mang tính chất tham khảo, để biết con số chính xác thì còn phụ thuộc vào nhiều điều kiện</p>
    //    <img className="w-50" src="./assets/imgaes_lai_suat.png" alt="" />
    // </div>
    // {/* </div> */}
    // {/* // <!-- bot content --> */}
    // <div className="container">
    //    <div className="row d-flex zindex-fixed justify-content-center text-center mt-5 ">
    //       <div className="row mt-5 d-flex zindex-fixed justify-content-center  center_content_3 center-content_radius">
    //          <div className="col-12">
    //             <hr className="the-line bg-danger"  />
    //             <div className="d-flex  mt-5 text-start">
    //                <h3>Cảm Nhận Khách Hàng Khi<br />
    //                   Vay Tiêu Dùng
    //                </h3>
    //             </div>
    //             <p className="text-start ">Chúng tôi luôn nỗ lực để đáp ứng mọi nhu cầu khách hàng</p>
    //          </div>
    //          <div className="col-12 d-flex position-relative">
    //             <div className="col-6">
    //                <div className="card bot_content position-absolute ms-5 mt-5 margin_text_avatar">
    //                   <div className=" card-body  ">
    //                      <img className="position-absolute d-flex justify-content-start avatar avatar_size rounded-circle border border-5 border-primary" src="./assets/avatar_bot_content_1.jpg" alt="" />
    //                      <div>
    //                         <h5 className="ms-5 text-white">Nguyễn Xuân Quỳnh</h5>
    //                         <br/>
    //                         <p className="ms-5 text-white display_mobile">Sinh năm 1994 Cầu Giấy - Hà Nội</p>
    //                         <div className="triangle triangle_right"></div>
    //                      </div>
    //                   </div>
    //                   <div>
    //                      <p className="text_bot_content position-absolute mt-5  text-start">
    //                         <svg  className="icon_bot_content" xmlns="http://www.w3.org/2000/svg" width="8%" height="40%" preserveAspectRatio="none" viewBox="0 0 129.34 107.78" fill="rgba(232, 183, 48, 1)">
    //                            <polygon points="0 107.78 0 50.18 24.87 0 55.85 0 35.35 48.44 36.66 50.18 56.73 50.18 56.73 107.78 0 107.78"></polygon>
    //                            <polygon points="72.61 107.78 72.61 50.18 97.48 0 128.47 0 107.96 48.44 109.27 50.18 129.34 50.18 129.34 107.78 72.61 107.78"></polygon>
    //                         </svg>
    //                         <br/>Mình mới đăng ký tầm 24h phút xong giải ngân luôn. Hằng tháng có các bạn tư vấn nhắc nhở đóng phí khỏi lo việc quên đóng phí ảnh hưởng đến điểm tín dụng.
    //                         <svg className="icon_bot_content_rotate " xmlns="http://www.w3.org/2000/svg" width="10%" height="20%" preserveAspectRatio="none" viewBox="0 0 129.34 107.78" fill="rgba(232, 183, 48, 1)">
    //                            <polygon points="0 107.78 0 50.18 24.87 0 55.85 0 35.35 48.44 36.66 50.18 56.73 50.18 56.73 107.78 0 107.78"></polygon>
    //                            <polygon points="72.61 107.78 72.61 50.18 97.48 0 128.47 0 107.96 48.44 109.27 50.18 129.34 50.18 129.34 107.78 72.61 107.78"></polygon>
    //                         </svg>
    //                      </p>
    //                   </div>
    //                </div>
    //             </div>
    //             <div className="col-6 ">
    //                <div>
    //                   <p className="text_bot_content position-absolute mt-5  text-start">
    //                      <svg  className="icon_bot_content" xmlns="http://www.w3.org/2000/svg" width="5%" height="40%" preserveAspectRatio="none" viewBox="0 0 129.34 107.78" fill="rgba(232, 183, 48, 1)">
    //                         <polygon points="0 107.78 0 50.18 24.87 0 55.85 0 35.35 48.44 36.66 50.18 56.73 50.18 56.73 107.78 0 107.78"></polygon>
    //                         <polygon points="72.61 107.78 72.61 50.18 97.48 0 128.47 0 107.96 48.44 109.27 50.18 129.34 50.18 129.34 107.78 72.61 107.78"></polygon>
    //                      </svg>
    //                      <br/>Mình mới đăng ký tầm 24h phút xong giải ngân luôn. Hằng tháng có các bạn  tư vấn nhắc nhở đóng phí khỏi lo việc quên đóng phí ảnh hưởng đến điểm tín dụng.
    //                      <svg className="icon_bot_content_rotate" xmlns="http://www.w3.org/2000/svg" width="5%" height="35%" preserveAspectRatio="none" viewBox="0 0 129.34 107.78" fill="rgba(232, 183, 48, 1)">
    //                         <polygon points="0 107.78 0 50.18 24.87 0 55.85 0 35.35 48.44 36.66 50.18 56.73 50.18 56.73 107.78 0 107.78"></polygon>
    //                         <polygon points="72.61 107.78 72.61 50.18 97.48 0 128.47 0 107.96 48.44 109.27 50.18 129.34 50.18 129.34 107.78 72.61 107.78"></polygon>
    //                      </svg>
    //                   </p>
    //                </div>
    //                <div className="bot_content position-absolute bot_content_right ">
    //                   <div className="triangle triangle_left"></div>
    //                   <div className=" card-body ">
    //                      <img className="position-absolute d-flex justify-content-end avatar_right avatar_size rounded-circle border border-5 border-primary" src="./assets/avatar_bot_content_2.jpg" alt="" />
    //                      <div>
    //                         <h5 className="ms-5 text-white">Bùi Minh Hiếu</h5>
    //                         <br/>
    //                         <p className="ms-5 text-white text-start display_mobile">IT sinh năm 1992 Hòa Xuân-Đà Nẵng</p>
    //                      </div>
    //                   </div>
    //                </div>
    //             </div>
    //          </div>
    //       </div>
    //    </div>    
    // </div>
    // <div className="position-absolute bot_content_2 text-center w-100">
    //    <div className="col-6 text_bot_content_2 bot_content_normal " >
    //       <div className="text-start text-white mt-5">
    //          <div className="bg-danger line_red"></div>
    //          <h3 className="text-center ">VÍ DỤ KHOẢN VAY</h3>
    //          <div className="text-start ms-5 me-5 mt-5" style="font-size: 13px;">
    //             <p>&#8861; Lãi suất được tính theo phương thức nợ giảm dần, hàng tháng sẽ trẻ gốc và lãi suất.</p>
    //             <p>&#8861; Ví dụ: Khoản vay 50 triệu trong 24 tháng với lãi suất 0.8%/tháng</p>
    //             <p>&#8861; Gốc trả hàng tháng 50.000.000 / 24 = 2.830.000</p>
    //             <p>&#8861; Tiền lãi hàng tháng 50.000.000 x 0.8% = 400.000 Đ</p>
    //             <p>&#8861; Tổng số tiền phải trả hàng tháng Gốc + Lãi = 2.483.000 Đ</p>
    //             <p>&#8861; Lưu ý(*): Ví dụ trên chỉ mang tính chất minh họa</p>
    //             <p>&#8861; Tùy Nhu Cầu mà các khoản vay thời gian vay tối thiểu là 12 tháng ( 365 ngày ) và tối đa 48 tháng ( 1440 ngày)</p>
    //             <p>&#8861; Tùy vào nhu cầu lãi suất tối thiểu 9.6%/1năm – lãi suất tối đa 18%/1 năm</p>
    //             <p>&#8861; Các khoản vay dài hạn sẽ được hỗ trợ ưu đãi:</p>
    //             <p>&#8861; Ví dụ: Nguyên Văn A vay 30 triệu trong 12 tháng và trả góp mỗi tháng gốc + lãi là 2.750.000 vậy sau 12 tháng tổng lãi + gốc là 33 triệu suy ra số tiền lãi là 3 triệu vậy lãi suất: 10%/năm – đây là tạm tính còn thực tế là lãi suất tính trên dư nợ giảm dần nên khách hàng sẽ chỉ phải trả ít hơn khi còn nợ ít.</p>
    //             <p>&#8861; Nhưng nếu Nguyễn Văn A vay 30 triệu trả trong vòng 48 tháng thì mỗi tháng sẽ phải trả góp 881.000đ vậy tổng sau 48 tháng cả gốc và lãi là : 42.300.000 trừ đi gốc tiền lãi là 15.720.000 trong 4 năm thì mỗi năm lãi là 3.074.000 sấp sỉ 10%/năm. đây là tạm tính còn thực tế là lãi suất tính trên dư nợ giảm dần nên khách hàng sẽ chỉ phải trả ít hơn khi còn nợ ít.</p>
    //             <p>&#8861; Khách vay số tiền càng lớn lãi suất càng thấp</p>
    //          </div>
    //       </div>
    //    </div>
    // </div>
    // <div className="position-absolute bot_content_3 d-flex zindex-fixed justify-content-end text-center w-100 margin_bot_content">
    //    <div className="col-6 text_bot_content_3 position-absolute">
    //       <div className="text-start text-white mt-5">
    //          <img className="image_bot_content_3 " src="./assets/image_bot_content_3.png" alt="" />
    //       </div>
    //       <div className="position-absolute form_bot_content bg-white text-center">
    //          <h6 className="mt-5 text-danger">ĐĂNG KÝ NHẬN TƯ VẤN</h6>
    //          <p className="border border-1 border-primary rounded-pill  text_form w-50 text-primary">Lãi suất chỉ từ 0.6%</p>
    //          <p className="text_form">Đăng ký ngay để nhận gói vay ưu đãi</p>
    //          <div className="row text_form text-primary time_form">
    //             <div className="col-3">
    //                00<br/>
    //                <p className="text-dark fs-6 fw-normal">Days</p>
    //             </div>
    //             <div className="col-3">
    //                05<br/>
    //                <p className="text-dark fs-6 fw-normal">Hours</p>
    //             </div>
    //             <div className="col-3">
    //                41<br/>
    //                <p className="text-dark fs-6 fw-normal">Min</p>
    //             </div>
    //             <div className="col-3">
    //                12<br/>
    //                <p className="text-dark fs-6 fw-normal">Sec</p>
    //             </div>
    //          </div>
    //          <div className="form-group from_input mt-5">
    //             <input type="text" className="form-control" name="full_name" id="full_name" aria-describedby="helpId" placeholder="Họ và tên" />
    //          </div>
    //          <div className="form-group from_input mt-2">
    //             <input type="text" className="form-control" name="phone_number" id="phone_number" aria-describedby="helpId" placeholder="Số điện thoại" />
    //          </div>
    //          <div className="form-group from_input mt-2">
    //             <input type="text" className="form-control" name="address" id="address" aria-describedby="helpId" placeholder="Địa chỉ" />
    //          </div>
    //          <div className="form-group from_input mt-2">
    //             <div className="mb-3">
    //             <select className="form-select form-select-normal" name="loan_type" id="loan_type">
    //                <option selected>Lựa chọn hình thức vay</option>
    //                <option value="salary_transfer">Vay theo lương chuyển khoản</option>
    //                <option value="cash_salary">Vay theo lương tiền mặt</option>
    //                <option value="life_insurance">Vay theo bảo hiểm nhân thọ</option>
    //                <option value="health_insurance">Vay theo bảo hiểm y tế</option>
    //             </select>
    //             </div>
    //          </div>
    //          <div className="form-group from_input mt-2">
    //             <input type="text" className="form-control" name="loan_amount" id="loan_amount" aria-describedby="helpId" placeholder="Số tiền cần vay">
    //          </div>
    //          <button className="btn btn-danger from_input mt-2" type="submit">Gửi đi</button>
    //          <p className="text_form">Mọi thông tin khách hàng đều được bảo mật<br/><span className="fw-bold text-secondary">Lưu ý: chưa hỗ trợ khách hàng có nợ xấu</span></p>
    //       </div>
    //    </div>
    // </div> 
    //  <div className="position-absolute bot_content_4 d-flex zindex-fixed justify-content-start text-center">
    //    <div className="col-12 text_bot_content_4 bot_content_normal">
    //       <div className="text-start text-white mt-5">
    //          <div className="bg-danger line_red"></div>
    //          <h3 className="text-center ">MỘT VÀI LƯU Ý KHI VAY TÍN CHẤP CHO KHÁCH HÀNG</h3>
    //          <div className="text-start ms-5 me-5 mt-5" style="font-size: 13px;">
    //             <p className="fw-bold">&#8861; Tính toán khả năng trả nợ Trước khi nhận khoản vay: bạn cần phải biết chính xác về khả năng thanh toán hàng tháng của mình, bạn cần biết số tiền phải trả sẽ chiếm bao nhiêu trong thu nhập hàng tháng và bạn có thể trả nó mà vẫn sống bình thường được. Số tiền chi trả hàng tháng không nên vượt quá 40% tổng thu nhập hàng tháng của bạn.</p>
    //             <p>&#8861; Các ngân hàng/Tổ chức tín dụng sẽ bị thiệt nếu bạn trả nợ sớm, do đó các ngân hàng/Tổ chức tín dụng thường đưa ra ít nhất là 2% nợ gốc còn lại làm phí thanh lý hợp đồng mà bạn phải trả thêm nếu bạn tiến hành tất toán trước hạn. Nhưng đổi lại, bạn sẽ không phải đóng thêm phần lãi nào cả.</p>
    //             <p>&#8861; Khách hàng vay tín chấp cũng cần hiểu đúng về lãi suất vay tại ngân hàng/Tổ chức tín dụng. Các ngân hàng/Tổ chức tín dụng thường đưa ra 2 cách tính lãi suất đó là lãi suất giảm dần và lãi suất cố định</p>
    //             <p>&#8861; Trong phương pháp tính lãi suất giảm dần: số tiền phải thanh toán cho lãi suất khoản vay của bạn vẫn tiếp tục giảm dựa trên số tiền gốc hàng tháng được giảm, nguyên tắc là được giảm hàng tháng, hàng quý hoặc hàng năm.</p>
    //             <p>&#8861; Trong phương thức tính lãi suất cố định, số tiền phải thanh toán cho lãi suất khoản vay của bạn vẫn không đổi trong thời gian vay, đơn giản chỉ vì số tiền này được tính dựa vào số dư nợ gốc ban đầu.</p>
    //             <p>&#8861; Thời hạn khoản vay mặc định, có thể trả trước hạn linh hoạt tùy vào mông muốn của Khách hàng.</p>
    //             <p>&#8861; Lãi suất vay theo năm tối thiểu 10%/năm, tối đa 20%/năm.</p>
    //          </div>
    //       </div>   
    //    </div>
    // </div> 

    // <div className=" bot_content_5 text-center w-100 ">  
    //    <svg className="mt-5"  xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1920 185.5" fill="rgba(16, 145, 33, 1)"><defs><style>.cls-1{opacity:0.1;}.cls-2{opacity:0.3;}</style></defs><path className="cls-1" d="M1920,172H0V.5H0c317.4,52.9,638,93.9,958.7,94,318.9.1,637.8-40.5,953.5-92.7L1920,.5Z" transform="translate(0 -0.5)"></path><path className="cls-2" d="M0,15.5H0c317.4,52.9,638,86.6,958.7,86.7,318.9.1,637.8-33.3,953.5-85.4l7.8-1.3V179H0Z" transform="translate(0 -0.5)"></path><path className="cls-3" d="M1920,186H0V30.5H0a5839.7,5839.7,0,0,0,1912.2,1.3l7.8-1.3Z" transform="translate(0 -0.5)"></path></svg>
    //    <div className="d-flex text-center text-white mt-5 footer">
    //          <div className="col-6">
    //             <h5 className="fw-bold mb-5">Hỗ trợ vay tiêu dùng ngân hàng lãi suất tốt</h5>
    //             <span className="mb-5">
    //                <span className="icon_footer icon_margin_2 d-flex zindex-fixed justify-content-center position-absolute "><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21.34px" height="21.34px" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"> <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path> </svg></span>
    //                <p className="mb-5 ms-5">Address: Đ. Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội, Việt Nam</p></span>
    //             <span>
    //                <span className="icon_footer icon_margin_2 d-flex zindex-fixed justify-content-center position-absolute "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21.34px" height="21.34px" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"> <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path> </svg></span>
    //                <p className="text_footer mb-5 ms-5">Address: Đ. Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội, Việt Nam</p></span>
    //          </div>
    //          <div className="col-6">
    //             <h5 className="fw-bold mb-5 text-start icon_margin">Đáp ứng mọi nhu cầu của khách hàng</h5>
    //             <span className="mb-5">
    //                <span className="icon_footer icon_margin d-flex zindex-fixed justify-content-center position-absolute ">
    //                   <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px" preserveAspectRatio="none" width="21.34px" height="21.34px" className="" fill="rgba(255, 255, 255, 1.0)"><title>Artboard 26</title><path d="M98.85,61.58a4.85,4.85,0,0,1-3.52,5.89L40.13,81.36A9.78,9.78,0,1,1,29.35,76.9c.31-.08.63-.14.94-.19L17.06,24.11,2.78,12.44A4.85,4.85,0,1,1,8.92,4.93L24.44,17.62a4.85,4.85,0,0,1,1.63,2.57L39,71.64,93,58.06A4.85,4.85,0,0,1,98.85,61.58Zm-65.08-40a3.57,3.57,0,0,1,2.59-4.33l8.46-2.13,6.26-1.57L60,11.33l6.66-1.67,7.68-1.93a3.57,3.57,0,0,1,4.33,2.59l9.55,37.94a3.57,3.57,0,0,1-2.59,4.33L47.65,62.13a3.57,3.57,0,0,1-4.33-2.59ZM50.89,31.77c1,3.85,4.37,5.11,9,5.47,3.19.25,4.7.89,5.08,2.4s-.93,2.85-3.19,3.42a13.79,13.79,0,0,1-4.48.34,2.43,2.43,0,0,0-.8.06,2.32,2.32,0,0,0-1.77,2.23v.2a2.37,2.37,0,0,0,2.22,2.38,18.93,18.93,0,0,0,5-.35l.46,1.83a2,2,0,1,0,3.89-1l-.53-2.11c4.37-1.94,6.11-5.59,5.22-9.13s-3.36-5.28-8.51-5.76c-3.7-.42-5.3-.91-5.63-2.22-.28-1.11.27-2.44,2.86-3.08a12.59,12.59,0,0,1,3.64-.38A2.29,2.29,0,0,0,64,26a2.37,2.37,0,0,0-.55-4.67,17.49,17.49,0,0,0-3.76.39l-.39-1.55a2,2,0,0,0-3.89,1L55.82,23C51.78,24.91,50,28.27,50.89,31.77Z"></path></svg>
    //                   <p className="text_footer">&ensp;Returns & Shipping Policy</p>
    //                </span>
    //                <span>
    //                   <p className="text_footer icon_margin_3" >
    //                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" preserveAspectRatio="none" width="21.34px" height="21.34px" className="" fill="rgba(255, 255, 255, 1.0)"><g><rect x="-192" width="185" height="99"></rect><rect y="-36" width="100" height="30"></rect><text transform="matrix(1 0 0 1 66 -19.5)" font-family="'Helvetica'" font-size="2.4">http://thenounproject.com</text><text transform="matrix(1 0 0 1 7.166 -24.5)"><tspan x="0" y="0" font-family="'Helvetica-Bold'" font-size="6.1578">The Noun Project</tspan><tspan x="1.12" y="4.8" font-family="'Helvetica-Bold'" font-size="4">Icon Template</tspan></text><text transform="matrix(1 0 0 1 -178.5 10.5)" font-family="'Helvetica-Bold'" font-size="6.1578">Reminders</text><line stroke="#FFFFFF" stroke-miterlimit="10" x1="8" y1="-14.5" x2="18" y2="-14.5"></line><line stroke="#FFFFFF" stroke-miterlimit="10" x1="-179" y1="16.5" x2="-162" y2="16.5"></line><g><g><g><rect x="-170.802" y="31.318" width="8.721" height="8.642"></rect><path d="M-164.455,42.312h4.747v-4.703h-4.747V42.312z M-159.266,42.749h-5.63V37.17h5.63V42.749      L-159.266,42.749z M-166.221,44.062h8.279v-8.203h-8.279V44.062L-166.221,44.062z M-157.5,44.5h-9.163v-9.079h9.163V44.5      L-157.5,44.5z"></path><polygon points="-166.149,44.133 -166.292,43.991 -158.013,35.787 -157.871,35.929     "></polygon></g></g></g><rect x="-179" y="58" width="35" height="32.5"></rect><text transform="matrix(1 0 0 1 -179 60.1572)"><tspan x="0" y="0" font-family="'Helvetica-Bold'" font-size="3">Strokes</tspan><tspan x="0" y="5" font-family="'Helvetica'" font-size="2.4">Try to keep strokes at 4px</tspan><tspan x="0" y="10" font-family="'Helvetica'" font-size="2.4">Minimum stroke weight is 2px</tspan><tspan x="0" y="14.5" font-family="'Helvetica'" font-size="2.4">For thicker strokes use even </tspan><tspan x="0" y="17.5" font-family="'Helvetica'" font-size="2.4">numbers: 6px, 8px etc.</tspan><tspan x="0" y="22" font-family="'Helvetica-Bold'" font-size="2.4">Remember to expand strokes </tspan><tspan x="0" y="25" font-family="'Helvetica-Bold'" font-size="2.4">before saving as an SVG </tspan></text><rect x="-136.5" y="58" width="35" height="32.5"></rect><text transform="matrix(1 0 0 1 -136.5 60.1572)"><tspan x="0" y="0" font-family="'Helvetica-Bold'" font-size="3">Size</tspan><tspan x="0" y="5" font-family="'Helvetica'" font-size="2.4">Cannot be wider or taller than </tspan><tspan x="0" y="8.5" font-family="'Helvetica'" font-size="2.4">100px (artboard size)</tspan><tspan x="0" y="13.5" font-family="'Helvetica'" font-size="2.4">Scale your icon to fill as much of </tspan><tspan x="0" y="16.5" font-family="'Helvetica'" font-size="2.4">the artboard as possible</tspan></text><rect x="-94" y="58" width="35" height="32.5"></rect><text transform="matrix(1 0 0 1 -94 60.1572)"><tspan x="0" y="0" font-family="'Helvetica-Bold'" font-size="3">Ungroup</tspan><tspan x="0" y="5" font-family="'Helvetica'" font-size="2.4">If your design has more than one </tspan><tspan x="0" y="8" font-family="'Helvetica'" font-size="2.4">shape, make sure to ungroup</tspan></text><rect x="-50" y="58" width="35" height="32.5"></rect><text transform="matrix(1 0 0 1 -50 60.1572)"><tspan x="0" y="0" font-family="'Helvetica-Bold'" font-size="3">Save as</tspan><tspan x="0" y="5" font-family="'Helvetica'" font-size="2.4">Save as .SVG and make sure </tspan><tspan x="0" y="8" font-family="'Helvetica'" font-size="2.4">“Use Artboards” is checked</tspan></text><text transform="matrix(1.0074 0 0 1 -125.542 30.5933)" font-family="'Helvetica'" font-size="2.5731">100px</text><text transform="matrix(1.0074 0 0 1 -41 39)" font-family="'Helvetica-Bold'" font-size="5.1462">.SVG</text><rect x="-126.514" y="34.815" width="10.261" height="10.185"></rect><rect x="-126.477" y="31.766" width="0.522" height="2.337"></rect><rect x="-116.812" y="31.766" width="0.523" height="2.337"></rect><rect x="-127" y="32.337" width="11.233" height="0.572"></rect><g><rect x="-83.805" y="33.844" width="10.305" height="10.156"></rect><rect x="-76.809" y="28.707" width="3.308" height="3.261"></rect></g><rect x="-178.5" y="22.5" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="30"></rect><rect x="-136.5" y="22.5" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="30"></rect><rect x="-93.5" y="22.5" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="30"></rect><rect x="-49.5" y="22.5" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="30"></rect></g><g><path d="M83.64,40H78v-9.208c0-15.24-12.76-27.638-28-27.638c-15.239,0-28,12.398-28,27.638V40h-6.217   C14.542,40,13,42.119,13,43.36v50.332C13,94.932,14.542,96,15.783,96H83.64c1.241,0,3.36-1.068,3.36-2.308V43.36   C87,42.119,84.881,40,83.64,40z M58.015,83.265C57.719,83.665,57.249,84,56.75,84H43.571c-0.5,0-0.969-0.335-1.266-0.735   c-0.296-0.403-0.384-0.97-0.238-1.448l4.511-14.673c-2.112-1.368-3.616-4.102-3.616-6.835c0-3.924,3.228-7.121,7.198-7.121   c3.901,0,7.198,3.37,7.198,7.363c0,2.698-1.452,5.236-3.607,6.552l4.502,14.717C58.399,82.296,58.312,82.862,58.015,83.265z M62,40   H38v-9.208c0-6.567,5.434-11.91,12-11.91c6.567,0,12,5.343,12,11.91V40z"></path></g></svg>                        
    //                      &ensp;Privacy Policy </p> 
    //                </span>
    //                <br />
    //                <span className="d-flex zindex-fixed justify-content-center position-absolute icon_margin">
                     
    //                   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" preserveAspectRatio="none" width="21.34px" height="21.34px" className="" fill="rgba(255, 255, 255, 1.0)"><g display="none"><rect x="-306.495" y="-10.779" display="inline" width="787" height="375.042"></rect></g><g display="none"><g display="inline"><path d="M60,64H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h56c2.2,0,4,1.8,4,4v56C64,62.2,62.2,64,60,64z"></path><line stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="10" x1="12.5" y1="15.333" x2="51.5" y2="15.333"></line><line stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="10" x1="12.5" y1="32" x2="51.5" y2="32"></line><line stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="10" x1="12.5" y1="48.667" x2="51.5" y2="48.667"></line></g></g><g display="none"><path display="inline" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M59.127,62.969H4.873   C2.743,62.969,1,61.226,1,59.096V4.904c0-2.13,1.743-3.873,3.873-3.873h54.254c2.13,0,3.873,1.743,3.873,3.873v54.191   C63,61.226,61.257,62.969,59.127,62.969z"></path><rect x="13.109" y="12.967" display="inline" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="37.781" height="5.807"></rect><rect x="13.109" y="29.097" display="inline" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="37.781" height="5.807"></rect><rect x="13.109" y="45.227" display="inline" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="37.781" height="5.807"></rect></g><g><g><path d="M4.873,63.969h54.254c2.687,0,4.873-2.187,4.873-4.873V4.904c0-2.687-2.187-4.873-4.873-4.873H4.873    C2.187,0.031,0,2.217,0,4.904v54.191C0,61.782,2.187,63.969,4.873,63.969z M13.109,12.967h37.781v5.807H13.109V12.967z     M13.109,29.097h37.781v5.807H13.109V29.097z M13.109,45.227h37.781v5.807H13.109V45.227z"></path></g></g><g display="none"><path display="inline" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M59.127,62.969H4.873   C2.743,62.969,1,61.226,1,59.096V4.904c0-2.13,1.743-3.873,3.873-3.873h54.254c2.13,0,3.873,1.743,3.873,3.873v54.191   C63,61.226,61.257,62.969,59.127,62.969z"></path><rect x="13.109" y="12.967" display="inline" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="37.781" height="5.807"></rect><rect x="13.109" y="29.097" display="inline" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="37.781" height="5.807"></rect><rect x="13.109" y="45.227" display="inline" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="37.781" height="5.807"></rect></g></svg>
    //                   <p className="text_footer " >&ensp;Terms of Use</p>
    //                </span>
    //                <span>
    //                   <p className="text_footer icon_margin_3" >
    //                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" preserveAspectRatio="none" width="21.34px" height="21.34px" className="" fill="rgba(255, 255, 255, 1.0)"><path d="M74.048,30.427v34.746H72.5h-7.452v7.361l-5.18-5.18l-2.183-2.182H54.6H12.452V30.427H74.048 M81.5,22.976H5v49.649h49.6  l17.9,17.899V72.625h9V22.976L81.5,22.976z M61.879,44.074h-7.452v7.452h7.452V44.074z M46.976,44.074h-7.451v7.452h7.451V44.074z   M32.072,44.074H24.62v7.452h7.453V44.074z M18.5,9.476v7.451h7.452h61.596v34.746v7.452H95V9.476H18.5z"></path></svg>
    //                      &ensp;Contact Us </p> 
    //                </span>
    //                <br/>
    //                <div  className="bg-danger icon_footer icon_margin mb-5 bg-light d-flex ">                  
    //                      <img className="icon_contact"  src="./assets/contact_icon.png" alt="visa_mastercard" />                      
    //                      <img className="icon_contact"  src="./assets/bo_cong_thuong.jpg" alt="Chung_nhan_bo_cong_thuong" />                      
    //                </div>     
    //                </span>
    //          </div>
             
    //    </div>
    //    <div className="d-flex justify-content-center w-100 footer text-light mt-5 text-center">
    //       <div className="border-top w-50 fs-6"> &copy;2022 Allrights reserved mystore.com</div>
    //    </div>
    // </div> 
    // </>
  )
}

export default App;
