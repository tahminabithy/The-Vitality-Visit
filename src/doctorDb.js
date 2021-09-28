const doctor = [
    {
        name: 'Dr. Hasem Ali',
        img: 'https://st3.depositphotos.com/10654668/13844/i/600/depositphotos_138445604-stock-photo-male-doctor-in-hospital.jpg',
        id: 1,
        doctorVisit: 1200,
        degree: 'MBBS (DMC), DDV (DU), FCPS (Skin & Sex)',
        specialised: 'Diabetes, Thyroid & Hormone Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. Khan Abul Kalam Azad',
        img: 'https://deadline.com/wp-content/uploads/2021/05/152740_1402_V2.jpg',
        id: 2,
        doctorVisit: 1500,
        degree: 'MBBS (DMC), DEM (BIRDEM), MD (Endocrinology), MACE (USA)',
        specialised: 'Diabetes, Thyroid & Hormone Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. Indrajit Prasad',
        img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
        id: 3,
        doctorVisit: 800,
        degree: 'MBBS, FCPS (Surgery), MS (Surgery)',
        specialised: 'Gastroenterology & Medicine Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. Anowara Begum',
        img: 'https://image.shutterstock.com/image-photo/covid19-coronavirus-healthcare-doctors-concept-260nw-1687768795.jpg',
        id: 4,
        doctorVisit: 900,
        degree: 'MBBS (DMC), FCPS (Medicine), MD (Internal Medicine), FACP (USA)',
        specialised: 'Gynecology & Obstetrics Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Dr Fahmida Zebin',
        img: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg',
        id: 5,
        doctorVisit: 1000,
        degree: 'MBBS, BCS (Health), FCPS (Skin & Sex)',
        specialised: 'Medicine Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. F M Siddiqui',
        img: 'https://deadline.com/wp-content/uploads/2020/08/dr.-ian-smith.jpg',
        id: 6,
        doctorVisit: 1200,
        degree: 'MBBS, FCPS (Chest Diseases), FACP (USA), FRCP',
        specialised: 'Gastroenterology & Medicine Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. Md. Titu Miah',
        img: 'https://media.istockphoto.com/photos/mixed-race-nurse-using-digital-tablet-at-hospital-picture-id1307543528?b=1&k=20&m=1307543528&s=170667a&w=0&h=YqPXVCeLaf2XXHRNjZJrbYYyaauPnEFfFtWvUt-blbE=',
        id: 7,
        doctorVisit: 1300,
        degree: 'MBBS, FCPS (OBGYN)',
        specialised: 'Diabetes, Thyroid & Hormone Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Dr. Jesmen Nahar Runi',
        img: 'https://us.123rf.com/450wm/milkos/milkos1910/milkos191003173/131495755-family-medical-doctor-positive-woman-physician-smiling-looking-at-camera-sitting-in-her-office.jpg?ver=6',
        id: 8,
        doctorVisit: 1200,
        degree: 'MBBS, BCS (Health), FCPS (Skin & Sex)',
        specialised: 'Skin & Sexual Diseases Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. M Mujibul Hoque',
        img: 'https://media.istockphoto.com/photos/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-picture-id1203995945?k=20&m=1203995945&s=612x612&w=0&h=g0_ioNezBqP0NXrR_36-A5NDHIR0nLabFFrAQVk4PhA=',
        id: 9,
        doctorVisit: 1000,
        degree: 'MBBS, FCPS (Chest Diseases), FACP (USA), FRCP',
        specialised: 'Diabetes, Thyroid & Hormone Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. Shamima Ahmed',
        img: 'https://img.freepik.com/free-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?size=626&ext=jpg&ga=GA1.2.2079282981.1626998400',
        id: 10,
        doctorVisit: 1500,
        degree: 'MBBS, FCPS (Med), FRCP (Rdin), FRCP (Glasg), FACP (USA), FWHO (Neph)',
        specialised: 'Kidney Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. M A Khan',
        img: 'https://patients.smarterhealth.sg/wp-content/uploads/2019/11/Smarter-Health-General-Practitioner-or-Specialist-Doctor.jpg',
        id: 11,
        doctorVisit: 700,
        degree: 'MBBS, FCPS (Hematology), FRCP (Edin)',
        specialised: 'Hematologist & Bone Marrow Transplant Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Dr. Masud Khan',
        img: 'https://thumbs.dreamstime.com/b/outdoor-portrait-male-doctor-wearing-white-lab-coat-smiling-to-camera-35801901.jpg',
        id: 12,
        doctorVisit: 600,
        degree: 'MBBS, MD (Dermatology)',
        specialised: 'Skin & Allergy Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Dr. Mohsin Ahmed',
        img: 'https://images.onhealth.com/images/slideshow/right-doctor-finder-s2-specialist.jpg',
        id: 13,
        doctorVisit: 1200,
        degree: 'MBBS, FCPS (Hematology), FRCP (Edin)',
        specialised: 'Hematologist & Bone Marrow Transplant Specialist',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. Mizanur Rahman',
        img: 'https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg',
        id: 14,
        doctorVisit: 800,
        degree: 'MBBS, FCPS (Surgery), MS (Urology)',
        specialised: 'Kidneys, Bladder, Ureters, Prostate, Male Sex Specialist & Surgeon',
        chamber: 'Dacca Medical College & Hospital'

    },
    {
        name: 'Prof. Dr. Nur Sayeeda',
        img: 'https://media.istockphoto.com/photos/we-offer-our-patients-premium-healthcare-here-picture-id638647058?k=20&m=638647058&s=612x612&w=0&h=aRF56ZIBXBL1wN45ZRaHkhmjJjIahkmXTYki7wQteJQ=',
        id: 15,
        doctorVisit: 900,
        degree: 'MBBS, FCPS (OBGYN)',
        specialised: 'Gynecology & Obstetrics Specialist',
        chamber: 'Dacca Medical College & Hospital'

    }
]