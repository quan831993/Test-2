const listSlide = [
    "./image/slide/slide1.webp",
    "./image/slide/slide2.webp",
    "./image/slide/slide3.JPG",
    "./image/slide/slide4.JPG",
    "./image/slide/slide5.JPG",
    "./image/slide/slide6.JPG",
]
const lap = [
    //laptop
    {
        id: 1,
        name: "ROG Strix SCAR 15 (2022)G533ZW-LN134W",
        image: "image/laptop/ROG Strix SCAR 15 (2022).png",
        windows: "Windows 11 Home",
        CPU: "12th Gen Intel® Core™ i9-12900H",
        RAM: "16GB DDR5-4800 SO-DIMM x 2",
        GPU: "NVIDIA® GeForce RTX™ 3070 Ti Laptop GPU",
        screen: "15.6 inch, WQHD (2560 x 1440) 16:9, Tần số làm mới:240Hz",
        SSD: "1TB M.2 NVMe™ PCIe® 4.0 Performance SSD",
        price: 71990000,
        price1: "71.990.000 đ",
        

    },
        {
            id: 2,
            name: "ROG Strix SCAR 17 SE (2022)G733CX-LL6789W",
            image: "image/laptop/ROG Strix SCAR 17 SE (2022).png",
            windows: "Windows 11 Home",
            CPU: "12th Gen Intel® Core™ i9-12950HX",
            RAM: "16GB DDR5-4800 SO-DIMM x 2",
            GPU: "NVIDIA® GeForce RTX™ 3080 Ti Laptop GPU",
            screen: "17.3 inch, WQHD (2560 x 1440) 16:9, Tần số làm mới:240Hz",
            SSD: "2TB PCIe® 4.0 NVMe™ M.2 Performance SSD",
            price: 107990000,
            price1: "107.990.000 đ",
        },
    {
        id: 3,
        name: "ROG Zephyrus G14GA401QC-K2199W",
        image: "image/laptop/ROG Zephyrus G14.png",
        windows: "Windows 11 Home",
        CPU: "AMD Ryzen™ 7 5800HS",
        RAM: "8GB DDR4 trên bo mạch",
        GPU: "GeForce RTX™ 3050 Laptop GPU",
        screen: "14 inch, WQHD (2560 x 1440) 16:9, Tần số làm mới:120Hz",
        SSD: "512GB M.2 NVMe™ PCIe® 3.0",
        price: 27490000,
        price1: "27.490.000 đ",
    },
    {
        id: 4,
        name: "ROG Zephyrus Duo 16 (2022)GX650RW-LO999W",
        image: "image/laptop/ROG Zephyrus Duo 16 (2022).png",
        windows: "Windows 11 Home",
        CPU: "AMD Ryzen™ 9 6900HX",
        RAM: "16GB DDR5-4800 SO-DIMM x 2",
        GPU: "NVIDIA® GeForce RTX™ 3070 Ti Laptop GPU",
        screen: "16 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Tần số làm mới:165Hz",
        SSD: "1TB M.2 NVMe™ PCIe® 4.0 Performance SSD",
        price: 88990000,
        price1: "88.990.000 đ",
    },
    {
        id: 5,
        name: "ROG Strix G15 (2022)G513RC-HN090W",
        image: "image/laptop/ROG Strix G15 (2022).png",
        windows: "Windows 11 Home",
        CPU: "AMD Ryzen™ 7 6800H",
        RAM: "8GB DDR5-4800 SO-DIMM",
        GPU: "GeForce RTX™ 3050 Laptop GPU",
        screen: "15.6 inch, FHD (1920 x 1080) 16:9, Tần số làm mới:144Hz",
        SSD: "512GB PCIe® 4.0 NVMe™ M.2 SSD",
        price: 26690000,
        price1: "26.690.000 đ",
    },
    {
        id: 6,
        name: "ROG Zephyrus M16 (2022)GU603ZW-K8021W",
        image: "image/laptop/ROG Zephyrus M16 (2022).png",
        windows: "Windows 11 Home",
        CPU: "12th Gen Intel® Core™ i9-12900H",
        RAM: "16GB DDR5 trên bo mạch",
        GPU: "NVIDIA® GeForce RTX™ 3070 Ti Laptop GPU",
        screen: "16 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Tần số làm mới:165Hz",
        SSD: "1TB M.2 NVMe™ PCIe® 4.0 Performance SSD",
        price: 71990000,
        price1: "71.990.00 0đ",
    },
    {
        id: 7,
        name: "ROG Flow Z13 (2022)GZ301ZC-LD110W",
        image: "image/laptop/ROG Flow Z13 (2022).png",
        windows: "Windows 11 Home",
        CPU: "AMD Ryzen™ 7 6800HS",
        RAM: "8GB*2 LPDDR5 trên bo mạch",
        GPU: "GeForce RTX™ 3050 Laptop GPU",
        screen: "13.4 inch, FHD+ 16:10 (1920 x 1200, WUXGA), Tần số làm mới:120Hz",
        SSD: "512GB PCIe® 4.0 NVMe™ M.2 SSD (2230)",
        price: 43990000,
        price1: "43.990.000 đ",
    },
    {
        id: 8,
        name: "ROG Zephyrus G14 (2022)GA402RK-L8072W",
        image: "image/laptop/ROG Zephyrus G14 (2022).png",
        windows: "Windows 11 Home",
        CPU: "AMD Ryzen™ 7 6800HS",
        RAM: "8GB DDR5 trên bo mạch, 8GB DDR5-4800 SO-DIMM",
        GPU: "AMD Radeon™ RX 6700S",
        screen: "14 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Tần số làm mới:120Hz",
        SSD: "1TB PCIe® 4.0 NVMe™ M.2 SSD",
        price: 46990000,
        price1: "46.990.000 đ",
    },
    {
        id: 9,
        name: "ROG Zephyrus G15 (2022)GA503RM-LN006W",
        image: "image/laptop/ROG Zephyrus G15 (2022).png",
        windows: "Windows 11 Home",
        CPU: "AMD Ryzen™ 7 6800HS",
        RAM: "8GB DDR5 trên bo mạch, 8GB DDR5-4800 SO-DIMM",
        GPU: "GeForce RTX™ 3060",
        screen: "15.6 inch, WQHD (2560 x 1440) 16:9, Tần số làm mới:240Hz",
        SSD: "512GB PCIe® 4.0 NVMe™ M.2 SSD",
        price: 41990000,
        price1: "41.990.000 đ",
    }
]
 const phone =  [
     // phone
    {
        id: 1,
        name: "ROG Phone 6",
        image: "image/phone/ROG Phone 6.png",
        GPU: "Qualcomm Snapdragon 8+ Gen 1",
        RAM: "LPDDR5 18GB",
        storage: "UFS3.1 512GB",
        battery: "Pin 6000mAh",
        price: 21990000,
        price1: "21.990.000 đ",
    },
    {
        id: 2,
        name: "ROG Phone 5s",
        image: "image/phone/ROG Phone 5s.png",
        GPU: "Qualcomm Snapdragon 888 Plus",
        RAM: "LPDDR5 16GB",
        storage: "UFS3.1 512GB",
        battery: "Pin 6000mAh",
        price: 19990000,
        price1: "19.990.000 đ",
    },
    {
        id: 3,
        name: "ROG Phone 5",
        image: "image/phone/ROG Phone 5.png",
        GPU: "Qualcomm Snapdragon 888",
        RAM: "LPDDR5 16GB",
        storage: "UFS3.1 256GB",
        battery: "Pin 6000mAh",
        price: 18990000,
        price1: "18.990.000 đ",
    },
    {
        id: 4,
        name: "ROG Phone 3",
        image: "image/phone/ROG Phone 3s.png",
        GPU: "Qualcomm Snapdragon 8+ Gen 1",
        RAM: "LPDDR5 18GB",
        storage: "UFS3.1 512GB",
        battery: "Pin 6000mAh",
        price: 16990000,
        price1: "16.990.000 đ",
    },
    {
        id: 5,
        name: "ROG Phone 2",
        image: "image/phone/ROG Phone 2.png",
        GPU: "Qualcomm Snapdragon 8+ Gen 1",
        RAM: "LPDDR5 18GB",
        storage: "UFS3.1 512GB",
        battery: "Pin 6000mAh",
        price: 10450000,
        price1: "10.450.000 đ",
    },
    {
        id: 6,
        name: "ROG Phone",
        image: "image/phone/ROG Phone .png",
        GPU: "Qualcomm Snapdragon 8+ Gen 1",
        RAM: "LPDDR5 18GB",
        storage: "UFS3.1 512GB",
        battery: "Pin 6000mAh",
        price: 4760000,
        price1: "4.760.000 đ",
    },
]
// Máy tính
const com = [
    {
        id: 1,
        name: "ROG Strix GA35G35DX-VN003W",
        image:"image/com/ROG Strix GA351.png",
        windows: "Win 10 Home",
        CPU: "AMD Ryzen™ 7 5000 Series",
        RAM: "16GB DDR4-3200 LO-DIMM",
        GPU: "GeForce RTX™ 3070",
        SSD: "1TB M.2 NVMe™ PCIe® 4.0 SSD",
        price: 47490000,
        price1: "47.490.000 đ",
    },
    {
        id: 2,
        name: "ROG Strix GA35G35DX-VN007T",
        image: "image/com/ROG Strix GA352.png",
        windows: "Win 10 Home",
        CPU: "AMD Ryzen™ 7 3000 Series",
        RAM: "16GB DDR4-3200 LO-DIMM x 2",
        GPU: "GeForce® RTX 2070S",
        SSD: "1TB M.2 NVMe™ PCIe® 3.0 SSD",
        price: 46990000,
        price1: "46.990.000 đ",
    },
    {
        id: 3,
        name: "Gaming PC Asus ROG Strix GA35 G35DX-VN010T",
        image: "image/com/ROG Strix GA352.png",
        windows: "OS Windows 10 SL",
        CPU: "AMD Ryzen R7-5000 SeriesX",
        RAM: "16GB DDR4-3200 LO-DIMM x 2",
        GPU: "GeForce RTX 3070",
        SSD: "1TB M.2 NVMe™ PCIe® 3.0 SSD",
        price: 51499000,
        price1: "51.499.000 đ",
    }
]

// const mainboard = [
//     {
//         id: 1,
//         name: 
//     }
// ]



const lapList =async ()=> {
    try {
        let response =await firebase.firestore()
        .collection("Product")
        .doc("Lap")
        .set({listLap: lap})
    } catch (error) {
        console.log(error.message);
    }
}
lapList();

const phoneList = async()=>{
    try {
        let response = await firebase.firestore()
        .collection("Product")
        .doc("Phone")
        .set({listPhone: phone})
    }catch (error) {
        console.log(error.message);
    }
}
phoneList();

const comList = async()=> {
    try {
        let response = await firebase.firestore()
        .collection("Product")
        .doc("Com")
        .set({listCom: com})
    } catch (error) {
        console.log(error.message);
    }
}
comList();


