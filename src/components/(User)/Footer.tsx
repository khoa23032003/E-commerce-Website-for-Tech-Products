// Footer HTML Structure
const Footer = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap gap-5 justify-between">
        <div className="footer-section flex-1 min-w-[200px]">
          <h4 className="font-bold mb-2">Về Công ty</h4>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Giới thiệu
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Tuyển dụng
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Black Friday 2024
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section flex-1 min-w-[200px]">
          <h4 className="font-bold mb-2">Chính sách</h4>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Chính sách bảo hành
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Chính sách giao hàng
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Chính sách bảo mật
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section flex-1 min-w-[200px]">
          <h4 className="font-bold mb-2">Thông tin</h4>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Hệ thống cửa hàng
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Hướng dẫn mua hàng
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Hướng dẫn thanh toán
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Hướng dẫn trả góp
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Tra cứu địa chỉ bảo hành
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section flex-1 min-w-[200px]">
          <h4 className="font-bold mb-2">Tổng đài hỗ trợ (8:00 - 21:00)</h4>
          <ul className="list-none p-0">
            <li className="mb-2">
              Mua hàng:{" "}
              <a
                href="tel:19005301"
                className="text-gray-800 hover:text-blue-600"
              >
                1900.5301
              </a>
            </li>
            <li className="mb-2">
              Bảo hành:{" "}
              <a
                href="tel:19005325"
                className="text-gray-800 hover:text-blue-600"
              >
                1900.5325
              </a>
            </li>
            <li className="mb-2">
              Kiếu nại:{" "}
              <a
                href="tel:18006173"
                className="text-gray-800 hover:text-blue-600"
              >
                1800.6173
              </a>
            </li>
            <li className="mb-2">
              Email:{" "}
              <a
                href="mailto:cskh@company.com"
                className="text-gray-800 hover:text-blue-600"
              >
                cskh@company.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section flex-1 min-w-[200px]">
          <h4 className="font-bold mb-2">Đơn vị vận chuyển</h4>
          <div className="flex gap-2 mt-2">
            <i className="fas fa-shipping-fast h-8"></i>
            <i className="fas fa-truck h-8"></i>
            <i className="fas fa-box h-8"></i>
          </div>
          <h4 className="font-bold mt-4 mb-2">Cách thức thanh toán</h4>
          <div className="flex gap-2 mt-2">
            <i className="fab fa-cc-visa h-8"></i>
            <i className="fab fa-cc-mastercard h-8"></i>
            <i className="fab fa-cc-paypal h-8"></i>
          </div>
        </div>
      </div>
      <div className="footer-social text-center mt-5">
        <h4 className="font-bold">Kết nối với chúng tôi</h4>
        <div className="flex justify-center gap-2 mt-2">
          <a href="#">
            <i className="fab fa-facebook-f w-6 h-6"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube w-6 h-6"></i>
          </a>
          <a href="#">
            <i className="fab fa-zalo w-6 h-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
