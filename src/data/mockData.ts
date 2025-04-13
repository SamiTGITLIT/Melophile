// Mock data for medications
export interface Medication {
  id: string;
  name: string;
  brandName: string;
  genericName: string;
  category: string;
  dosage: string;
  description: string;
  price: number;
  stockStatus: 'available' | 'low' | 'unavailable';
  usageInstructions?: string;
  sideEffects?: string;
  typicalCourse?: string;
}

export const medications: Medication[] = [
  {
    id : "med1",
    name : "Amoxicillin",
    brandName : "Amoxil",
    genericName : "Amoxicillin",
    category : "Antibacterials",
    dosage : "500mg",
    description : "Used to treat a variety of bacterial infections.",
    price : 10.99,
    stockStatus : "available",
    usageInstructions : "Take every 8 hours with or without food.",
    sideEffects : "Nausea, diarrhea, allergic reactions.",
    typicalCourse : "7-14 days"
  },
  {
    id : "med2",
    name : "Paracetamol",
    brandName : "Tylenol",
    genericName : "Paracetamol",
    category : "Analgesics",
    dosage : "500mg",
    description : "Relieves pain and reduces fever.",
    price : 5.99,
    stockStatus : "available",
    usageInstructions : "Take every 4-6 hours as needed.",
    sideEffects : "Rarely, liver damage with high doses.",
    typicalCourse : "As needed"
  },
  {
    id : "med3",
    name : "Metformin",
    brandName : "Glucophage",
    genericName : "Metformin",
    category : "Antidiabetics",
    dosage : "500mg",
    description : "Helps control blood sugar levels in type 2 diabetes.",
    price : 8.99,
    stockStatus : "available",
    usageInstructions : "Take with meals to reduce gastrointestinal side effects.",
    sideEffects : "Nausea, diarrhea, abdominal discomfort.",
    typicalCourse : "Ongoing"
  },
  {
    id : "med4",
    name : "Salbutamol",
    brandName : "Ventolin",
    genericName : "Salbutamol",
    category : "Respiratory Medicines",
    dosage : "100mcg",
    description : "Relieves bronchospasm in conditions like asthma.",
    price : 12.49,
    stockStatus : "available",
    usageInstructions : "Inhale as directed during asthma attacks.",
    sideEffects : "Tremors, nervousness, increased heart rate.",
    typicalCourse : "As needed"
  },
  {
    id : "med5",
    name : "Omeprazole",
    brandName : "Prilosec",
    genericName : "Omeprazole",
    category : "Gastrointestinal Medicines",
    dosage : "20mg",
    description : "Treats gastroesophageal reflux disease (GERD).",
    price : 9.99,
    stockStatus : "available",
    usageInstructions : "Take once daily before a meal.",
    sideEffects : "Headache, abdominal pain, nausea.",
    typicalCourse : "4-8 weeks"
  },
  {
    id: "med6",
    name: "Atorvastatin",
    brandName: "Lipitor",
    genericName: "Atorvastatin",
    category: "Cholesterol",
    dosage: "20mg",
    description: "Lowers bad cholesterol and triglycerides.",
    price: 11.30,
    stockStatus: "available",
    usageInstructions: "Take once daily with or without food.",
    sideEffects: "Muscle pain, diarrhea, joint pain.",
    typicalCourse: "Ongoing"
  },
  {
    id: "med7",
    name: "Amlodipine",
    brandName: "Norvasc",
    genericName: "Amlodipine",
    category: "Blood Pressure",
    dosage: "5mg",
    description: "Treats high blood pressure and chest pain.",
    price: 8.99,
    stockStatus: "available",
    usageInstructions: "Take once daily.",
    sideEffects: "Swelling, fatigue, dizziness.",
    typicalCourse: "Ongoing"
  },
  {
    id: "med8",
    name: "Albuterol",
    brandName: "Ventolin",
    genericName: "Albuterol",
    category: "Asthma",
    dosage: "90mcg/inhalation",
    description: "Relieves bronchospasm in asthma and COPD.",
    price: 22.00,
    stockStatus: "available",
    usageInstructions: "Use as needed for wheezing or shortness of breath.",
    sideEffects: "Tremor, nervousness, fast heartbeat.",
    typicalCourse: "As needed"
  },
  {
    id: "med9",
    name: "Gabapentin",
    brandName: "Neurontin",
    genericName: "Gabapentin",
    category: "Nerve Pain",
    dosage: "300mg",
    description: "Treats nerve pain and seizures.",
    price: 13.40,
    stockStatus: "available",
    usageInstructions: "Take 2-3 times daily with or without food.",
    sideEffects: "Drowsiness, dizziness, fatigue.",
    typicalCourse: "Ongoing"
  },
  {
    id: "med10",
    name: "Sertraline",
    brandName: "Zoloft",
    genericName: "Sertraline",
    category: "Mental Health",
    dosage: "50mg",
    description: "Treats depression, anxiety, and PTSD.",
    price: 10.25,
    stockStatus: "available",
    usageInstructions: "Take once daily, with or without food.",
    sideEffects: "Nausea, dizziness, dry mouth.",
    typicalCourse: "Ongoing"
  },
  {
    id: "med11",
    name: "Montelukast",
    brandName: "Singulair",
    genericName: "Montelukast",
    category: "Asthma",
    dosage: "10mg",
    description: "Prevents asthma and allergy symptoms.",
    price: 12.10,
    stockStatus: "available",
    usageInstructions: "Take once daily in the evening.",
    sideEffects: "Headache, stomach pain, tiredness.",
    typicalCourse: "Ongoing"
  },
  {
    id: "med12",
    name: "Furosemide",
    brandName: "Lasix",
    genericName: "Furosemide",
    category: "Diuretics",
    dosage: "40mg",
    description: "Treats fluid retention and high blood pressure.",
    price: 7.85,
    stockStatus: "available",
    usageInstructions: "Take once or twice daily as prescribed.",
    sideEffects: "Increased urination, dehydration, low potassium.",
    typicalCourse: "As prescribed"
  },
  {
    id: "med13",
    name: "Prednisone",
    brandName: "Deltasone",
    genericName: "Prednisone",
    category: "Steroids",
    dosage: "10mg",
    description: "Reduces inflammation in various conditions.",
    price: 6.50,
    stockStatus: "available",
    usageInstructions: "Take once daily with food in the morning.",
    sideEffects: "Weight gain, mood swings, high blood sugar.",
    typicalCourse: "Short-term or tapering"
  },
  {
    id: "med14",
    name: "Fluoxetine",
    brandName: "Prozac",
    genericName: "Fluoxetine",
    category: "Mental Health",
    dosage: "20mg",
    description: "Treats depression and obsessive-compulsive disorder.",
    price: 10.10,
    stockStatus: "available",
    usageInstructions: "Take once daily in the morning.",
    sideEffects: "Nervousness, insomnia, nausea.",
    typicalCourse: "Ongoing"
  },
  {
    id: "med15",
    name: "Ibuprofen",
    brandName: "Advil",
    genericName: "Ibuprofen",
    category: "Pain Relief",
    dosage: "200mg",
    description: "Used for pain, fever, and inflammation.",
    price: 5.75,
    stockStatus: "available",
    usageInstructions: "Take every 6-8 hours as needed with food.",
    sideEffects: "Stomach pain, nausea, dizziness.",
    typicalCourse: "As needed"
  },
  {
    id: "med16",
    name: "Clopidogrel",
    brandName: "Plavix",
    genericName: "Clopidogrel",
    category: "Antiplatelets",
    dosage: "75mg",
    description: "Prevents blood clots after heart attack or stroke.",
    price: 14.40,
    stockStatus: "available",
    usageInstructions: "Take once daily with or without food.",
    sideEffects: "Bleeding, bruising, stomach upset.",
    typicalCourse: "Ongoing"
  },
  {
    id: "med17",
    name: "Levothyroxine",
    brandName: "Synthroid",
    genericName: "Levothyroxine",
    category: "Thyroid Hormones",
    dosage: "50mcg",
    description: "Treats hypothyroidism (underactive thyroid).",
    price: 9.25,
    stockStatus: "available",
    usageInstructions: "Take once daily on an empty stomach.",
    sideEffects: "Weight changes, sweating, mood changes.",
    typicalCourse: "Ongoing"
  },
  {
    id: "med18",
    name: "Insulin Glargine",
    brandName: "Lantus",
    genericName: "Insulin Glargine",
    category: "Insulin",
    dosage: "100 units/mL",
    description: "Long-acting insulin used to control blood sugar.",
    price: 35.00,
    stockStatus: "available",
    usageInstructions: "Inject subcutaneously once daily at the same time.",
    sideEffects: "Low blood sugar, weight gain, injection site reaction.",
    typicalCourse: "Ongoing"
  },
  {
    id: "med19",
    name: "Ranitidine",
    brandName: "Zantac",
    genericName: "Ranitidine",
    category: "Antacids",
    dosage: "150mg",
    description: "Used to reduce stomach acid and treat ulcers.",
    price: 7.20,
    stockStatus: "unavailable",
    usageInstructions: "Take twice daily before meals.",
    sideEffects: "Headache, constipation, nausea.",
    typicalCourse: "4-8 weeks"
  },
  {
    id: "med20",
    name: "Losartan",
    brandName: "Cozaar",
    genericName: "Losartan",
    category: "Blood Pressure",
    dosage: "50mg",
    description: "Treats high blood pressure and protects kidneys in diabetics.",
    price: 10.75,
    stockStatus: "available",
    usageInstructions: "Take once daily with or without food.",
    sideEffects: "Dizziness, back pain, nasal congestion.",
    typicalCourse: "Ongoing"
  }
];

// Add interface and mock data for reminders
export interface Reminder {
  id: string;
  medicationId: string;
  medicationName: string;
  time: string;
  startDate: string;
  frequency: string;
  active: boolean;
}

export const reminders: Reminder[] = [
  {
    id: "rem1",
    medicationId: "med1",
    medicationName: "Lisinopril",
    time: "08:00 AM",
    startDate: "2023-06-15",
    frequency: "Daily",
    active: true
  },
  {
    id: "rem2",
    medicationId: "med2",
    medicationName: "Atorvastatin",
    time: "08:00 PM",
    startDate: "2023-06-10",
    frequency: "Daily",
    active: true
  },
  {
    id: "rem3",
    medicationId: "med3",
    medicationName: "Metformin",
    time: "12:30 PM",
    startDate: "2023-06-12",
    frequency: "Twice Daily",
    active: false
  }
];

// Add interface and mock data for health tips
export interface HealthTip {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  likes?: number;
}

export const healthTips: HealthTip[] = [
  {
    id: "tip1",
    title: "The Importance of Staying Hydrated",
    content: "Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, prevent infections, deliver nutrients to cells, and keep organs functioning properly. Being well-hydrated also improves sleep quality, cognition, and mood.<br/><br/>Experts recommend drinking roughly 3.7 liters of fluids per day for men and 2.7 liters for women. This includes water, other beverages, and fluid from food. An easy rule to follow is to drink water when you're thirsty and drink enough so your urine is colorless or light yellow.",
    date: "2023-06-15",
    author: "Dr. Sarah Johnson",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    likes: 45
  },
  {
    id: "tip2",
    title: "Understanding Blood Pressure Readings",
    content: "Blood pressure is measured using two numbers: The first number, called systolic blood pressure, represents the pressure in your blood vessels when your heart beats. The second number, called diastolic blood pressure, represents the pressure in your blood vessels when your heart rests between beats.<br/><br/>A normal blood pressure level is less than 120/80 mmHg. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Elevated blood pressure is when readings consistently range from 120-129 systolic and less than 80 mmHg diastolic. People with elevated blood pressure are likely to develop high blood pressure unless steps are taken to control the condition.",
    date: "2023-06-10",
    author: "Dr. Michael Chen",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    likes: 32
  },
  {
    id: "tip3",
    title: "Benefits of Regular Exercise",
    content: "Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.<br/><br/>Adults should aim for at least 150 minutes a week of moderate-intensity aerobic activity or 75 minutes of vigorous aerobic activity, or a combination of both. Strength training exercises for all major muscle groups should be done at least twice a week.",
    date: "2023-06-05",
    author: "Dr. Emily Roberts",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    likes: 56
  },
  {
    id: "tip4",
    title: "Importance of Medication Adherence",
    content: "Taking your medications as prescribed is crucial for managing chronic conditions and preventing serious complications. Non-adherence can lead to disease progression, lower quality of life, and increased healthcare costs.<br/><br/>Here are some tips to help you take your medications as directed: Use pill organizers, set up reminders on your phone, link taking medication with daily routines, and keep a medication log. Always speak with your healthcare provider if you're having trouble with your medication regimen.",
    date: "2023-05-28",
    author: "Dr. James Wilson",
    category: "Medication",
    likes: 27
  },
  {
    id: "tip5",
    title: "Healthy Eating on a Budget",
    content: "Eating healthy doesn't have to be expensive. With some planning and smart shopping, you can maintain a nutritious diet while saving money.<br/><br/>Buy in bulk, choose frozen fruits and vegetables which are just as nutritious as fresh ones but last longer, plan your meals, make a shopping list and stick to it, cook at home more often, and use leftovers creatively. Remember that some of the healthiest foods, like beans, brown rice, and in-season vegetables, are also among the most affordable.",
    date: "2023-05-20",
    author: "Dr. Angela Martinez",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    likes: 39
  }
];
