// Date: 01/09/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Asynchronous challenge 1


const whereAmI = function (lat, lng) {
    // Bước 2: Gọi API geocode.xyz với Fetch
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      .then((response) => { //KIỂM TRA RESPONSE
        // Bước 5: Tự tạo lỗi nếu API trả về lỗi 403 hoặc lỗi khác
        if (!response.ok) 
            throw new Error(`Problem with geocoding ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log(`You are in ${data.city}, ${data.country}`);
      })
      .catch((err) => {
        console.error(`${err.message}`);
      });
  };
  
  // Gọi thử hàm với dữ liệu tọa độ mẫu
  whereAmI(52.508, 13.381); // Berlin, Germany
  whereAmI(19.037, 72.873); // Mumbai, India
  whereAmI(-33.933, 18.474); // Cape Town, South Africa