export type BlogCategory = "Health Tips" | "Hospital News" | "Medical Research" | "Events" | "Staff Spotlight"

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  category: BlogCategory
  author: {
    name: string
    role: string
    avatar?: string
  }
  publishedAt: string
  featured?: boolean
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Bariatric Camp: Lose Weight, Gain Hope",
    slug: "bariatric-camp-lose-weight-gain-hope",
    excerpt: "Join our upcoming bariatric camp and learn about surgical options for sustainable weight loss.",
    content: `
      <p>Are you struggling with obesity? Alliance Hospital is proud to announce our upcoming Bariatric Camp, designed to help individuals struggling with obesity find sustainable solutions for weight loss.</p>
      
      <h2>What is Bariatric Surgery?</h2>
      <p>Bariatric surgery encompasses various surgical procedures designed to help patients with obesity achieve significant weight loss. These procedures work by reducing the size of the stomach, limiting food intake, or by altering the digestive process to reduce calorie absorption.</p>
      
      <h2>Our Bariatric Camp Offers:</h2>
      <ul>
        <li>Free consultations with our experienced bariatric surgeons</li>
        <li>Educational sessions about different surgical options</li>
        <li>Nutritional counseling</li>
        <li>Success stories from previous patients</li>
        <li>Post-surgery support group information</li>
      </ul>
      
      <h2>Who Should Attend?</h2>
      <p>This camp is ideal for individuals with a BMI over 35, or those with a BMI over 30 who also have obesity-related health conditions such as type 2 diabetes, high blood pressure, or sleep apnea.</p>
      
      <h2>Event Details:</h2>
      <p>Date: February 15, 2024<br>
      Time: 10:00 AM - 4:00 PM<br>
      Location: Alliance Hospital Main Conference Room</p>
      
      <p>Registration is required as space is limited. Please call our patient coordinator at +234 8097142623 to reserve your spot.</p>
      
      <p>Take the first step towards a healthier life. Join us at the Bariatric Camp and discover how bariatric surgery might be the solution you've been looking for.</p>
    `,
    coverImage: "/images/blogs/bariatric-camp.jpg",
    category: "Events",
    author: {
      name: "Dr. Michael Enokela",
      role: "Consultant Surgeon",
      avatar: "/images/doctors/dr-michael-enokela.jpg",
    },
    publishedAt: "2024-02-02T00:00:00Z",
    featured: true,
    tags: ["weight loss", "bariatric surgery", "obesity", "health camp"],
  },
  {
    id: "2",
    title: "Campaign of Calumny Against Alliance Hospital by Daily Trust Newspaper: Enough is Enough",
    slug: "campaign-of-calumny-against-alliance-hospital",
    excerpt: "Alliance Hospital addresses false allegations published by Daily Trust Newspaper.",
    content: `
      <p>Alliance Hospital wishes to address the recent series of misleading and false allegations published by Daily Trust Newspaper.</p>
      
      <h2>Setting the Record Straight</h2>
      <p>Over the past several weeks, Daily Trust Newspaper has published a series of articles containing unverified claims and allegations against our hospital. These publications have been made without proper fact-checking and represent a clear campaign of calumny against our institution.</p>
      
      <h2>Our Commitment to Excellence</h2>
      <p>For over a decade, Alliance Hospital has been committed to providing world-class healthcare services to Nigerians. Our track record speaks for itself:</p>
      <ul>
        <li>Over 20,000 patients successfully treated</li>
        <li>A team of over 500 dedicated healthcare professionals</li>
        <li>State-of-the-art medical facilities and equipment</li>
        <li>Numerous recognitions and certifications from healthcare regulatory bodies</li>
      </ul>
      
      <h2>Legal Action</h2>
      <p>We have instructed our legal team to take appropriate action against Daily Trust Newspaper for these defamatory publications. We believe in the freedom of the press, but this freedom must be exercised responsibly and ethically.</p>
      
      <h2>To Our Patients and Partners</h2>
      <p>We want to reassure our patients, partners, and the general public that Alliance Hospital remains committed to our mission of providing excellent healthcare services. We thank you for your continued trust and support.</p>
      
      <p>For any inquiries or concerns, please contact our Public Relations Office at pr@alliancehospitalabj.com.</p>
    `,
    coverImage: "/images/blogs/newspaper.jpg",
    category: "Hospital News",
    author: {
      name: "Management Team",
      role: "Alliance Hospital",
    },
    publishedAt: "2023-12-18T00:00:00Z",
    featured: true,
    tags: ["press release", "hospital news", "public statement"],
  },
  {
    id: "3",
    title: "Vacancy! We Are Hiring - Human Resource Manager",
    slug: "vacancy-hiring-human-resource-manager",
    excerpt: "Alliance Hospital is seeking a qualified Human Resource Manager to join our team.",
    content: `
      <h2>Job Opening: Human Resource Manager</h2>
      
      <p>Alliance Hospital is seeking a qualified and experienced Human Resource Manager to join our administrative team. This is an excellent opportunity to be part of a leading healthcare institution committed to excellence.</p>
      
      <h3>Job Description:</h3>
      <p>The Human Resource Manager will be responsible for overseeing all HR functions including recruitment, employee relations, performance management, training and development, compensation and benefits, and ensuring compliance with labor laws and regulations.</p>
      
      <h3>Key Responsibilities:</h3>
      <ul>
        <li>Develop and implement HR strategies and initiatives aligned with the overall business strategy</li>
        <li>Manage the recruitment and selection process</li>
        <li>Monitor and evaluate employee performance management systems</li>
        <li>Assess training needs and coordinate training programs</li>
        <li>Maintain pay and benefits systems</li>
        <li>Handle employee relations, including conflict resolution and disciplinary procedures</li>
        <li>Ensure compliance with employment laws and regulations</li>
        <li>Maintain employee records and HR information systems</li>
        <li>Prepare and manage the HR department budget</li>
        <li>Report to management and provide decision support through HR metrics</li>
      </ul>
      
      <h3>Qualifications:</h3>
      <ul>
        <li>Bachelor's degree in Human Resources, Business Administration, or related field</li>
        <li>Minimum of 5 years of experience in HR management, preferably in a healthcare setting</li>
        <li>Strong knowledge of labor laws and HR best practices</li>
        <li>Excellent interpersonal and communication skills</li>
        <li>Proven leadership abilities</li>
        <li>Proficiency in HR information systems</li>
        <li>SHRM or CIPD certification is a plus</li>
      </ul>
      
      <h3>We Offer:</h3>
      <ul>
        <li>Competitive salary and benefits package</li>
        <li>Professional development opportunities</li>
        <li>Collaborative and supportive work environment</li>
        <li>Opportunity to make a significant impact in a growing healthcare institution</li>
      </ul>
      
      <h3>Application Process:</h3>
      <p>Interested candidates should submit their CV and cover letter to careers@alliancehospitalabj.com with the subject line "Human Resource Manager Application".</p>
      
      <p>Application Deadline: July 31, 2023</p>
      
      <p>Alliance Hospital is an equal opportunity employer. We value diversity and are committed to creating an inclusive environment for all employees.</p>
    `,
    coverImage: "/images/blogs/hiring.jpg",
    category: "Hospital News",
    author: {
      name: "HR Department",
      role: "Alliance Hospital",
    },
    publishedAt: "2023-07-14T00:00:00Z",
    tags: ["careers", "job opening", "human resources"],
  },
  {
    id: "4",
    title: "World Cancer Day at Alliance Hospital Abuja",
    slug: "world-cancer-day-alliance-hospital",
    excerpt: "Alliance Hospital commemorates World Cancer Day with free screenings and educational sessions.",
    content: `
      <p>Alliance Hospital Abuja proudly commemorated World Cancer Day with a series of events aimed at raising awareness about cancer prevention, early detection, and treatment options.</p>
      
      <h2>A Day of Awareness and Action</h2>
      <p>On February 4th, Alliance Hospital opened its doors to the public for a day dedicated to cancer awareness. The event featured:</p>
      
      <ul>
        <li>Free cancer screenings including mammograms, PSA tests, and skin examinations</li>
        <li>Educational sessions led by our oncology team</li>
        <li>Testimonials from cancer survivors</li>
        <li>Nutritional guidance for cancer prevention</li>
        <li>Information booths on various types of cancer</li>
      </ul>
      
      <h2>Expert Talks</h2>
      <p>Our medical specialists delivered informative presentations on various aspects of cancer:</p>
      
      <ul>
        <li>Dr. Salau Ibrahim, Consultant Cardiologist, spoke about the link between lifestyle choices and cancer risk</li>
        <li>Dr. R.O. Adeyemi, Consultant Obstetrics and Gynecology, discussed cervical and breast cancer screening</li>
        <li>Dr. Ugochi Odu, Consultant Family Physician, presented on the importance of regular check-ups for early detection</li>
      </ul>
      
      <h2>Community Impact</h2>
      <p>The event saw over 200 attendees from the local community, with 150 individuals receiving free cancer screenings. Several cases requiring further investigation were identified, potentially saving lives through early detection.</p>
      
      <h2>Ongoing Commitment</h2>
      <p>Alliance Hospital remains committed to cancer awareness and prevention beyond World Cancer Day. We offer comprehensive cancer screening packages year-round and have established a cancer support group that meets monthly at our facility.</p>
      
      <p>For more information about our oncology services or to schedule a cancer screening, please contact our Oncology Department at +234 8097142623.</p>
      
      <p>Remember, early detection saves lives. Make regular cancer screenings a part of your healthcare routine.</p>
    `,
    coverImage: "/images/blogs/world-cancer-day.jpg",
    category: "Events",
    author: {
      name: "Dr. Salau Ibrahim",
      role: "Consultant Cardiologist",
      avatar: "/images/doctors/dr-salau-ibrahim.jpg",
    },
    publishedAt: "2023-02-06T00:00:00Z",
    tags: ["cancer awareness", "world cancer day", "health screening", "oncology"],
  },
  {
    id: "5",
    title: "The Management of Alliance Hospital Abuja Rewards Staff Excellence",
    slug: "management-rewards-staff-excellence",
    excerpt: "Alliance Hospital recognizes and rewards outstanding staff performance.",
    content: `
      <p>In recognition of exceptional dedication and service, the Management of Alliance Hospital Abuja recently honored one of its staff members for outstanding performance and commitment to excellence.</p>
      
      <h2>Celebrating Excellence</h2>
      <p>During a special ceremony held at the hospital premises, Mr. John Okafor, a Senior Nurse in our Intensive Care Unit, was recognized for his exceptional dedication to patient care and his innovative contributions to improving hospital protocols.</p>
      
      <h2>Award and Recognition</h2>
      <p>Mr. Okafor received:</p>
      <ul>
        <li>A certificate of excellence</li>
        <li>A financial reward</li>
        <li>Recognition as "Employee of the Quarter"</li>
        <li>Additional professional development opportunities</li>
      </ul>
      
      <h2>Management's Statement</h2>
      <p>Speaking at the ceremony, the Chief Medical Director stated: "Mr. Okafor exemplifies the values and standards we uphold at Alliance Hospital. His dedication to patient care, willingness to go above and beyond, and his innovative thinking have not only improved patient outcomes but have also inspired his colleagues. We are proud to have him as part of our team."</p>
      
      <h2>Staff Excellence Program</h2>
      <p>This recognition is part of Alliance Hospital's Staff Excellence Program, designed to identify, celebrate, and reward outstanding performance among our staff. The program aims to:</p>
      <ul>
        <li>Recognize exceptional contributions</li>
        <li>Motivate staff to maintain high standards</li>
        <li>Foster a culture of excellence</li>
        <li>Improve overall patient care and satisfaction</li>
      </ul>
      
      <h2>Join Our Team</h2>
      <p>Alliance Hospital is always looking for dedicated healthcare professionals to join our team. If you are passionate about healthcare and committed to excellence, visit our Careers page to learn about current opportunities.</p>
      
      <p>We believe that recognizing and rewarding excellence is essential to maintaining our position as a leading healthcare provider in Nigeria.</p>
    `,
    coverImage: "/images/blogs/staff-recognition.jpg",
    category: "Hospital News",
    author: {
      name: "HR Department",
      role: "Alliance Hospital",
    },
    publishedAt: "2022-11-18T00:00:00Z",
    tags: ["staff recognition", "excellence", "employee rewards"],
  },
  {
    id: "6",
    title: "World Kidney Day: Understanding Kidney Health",
    slug: "world-kidney-day-understanding-kidney-health",
    excerpt: "Alliance Hospital marks World Kidney Day with educational initiatives on kidney health.",
    content: `
      <p>In observance of World Kidney Day, Alliance Hospital organized a comprehensive awareness program focused on kidney health, prevention of kidney disease, and treatment options.</p>
      
      <h2>The Importance of Kidney Health</h2>
      <p>Our kidneys play a crucial role in maintaining overall health by filtering waste products from the blood, regulating blood pressure, producing hormones, and maintaining the body's chemical balance. Despite their importance, kidney disease often progresses silently until significant damage has occurred.</p>
      
      <h2>Key Activities</h2>
      <p>Our World Kidney Day program included:</p>
      <ul>
        <li>Free kidney function screenings for over 100 community members</li>
        <li>Educational seminars on kidney disease prevention</li>
        <li>Dietary consultations focusing on kidney-friendly nutrition</li>
        <li>Testimonials from kidney transplant recipients</li>
        <li>Information sessions on our kidney transplant program</li>
      </ul>
      
      <h2>Expert Insights</h2>
      <p>Dr. Kofarmata Ameera Yakubu, our Nephrologist, shared valuable insights during the main seminar: "Kidney disease is often preventable through lifestyle modifications such as maintaining a healthy blood pressure, controlling blood sugar levels, staying hydrated, and avoiding excessive use of certain medications. Regular screening is essential, especially for those with risk factors such as diabetes, hypertension, or a family history of kidney disease."</p>
      
      <h2>Our Kidney Care Services</h2>
      <p>Alliance Hospital offers comprehensive kidney care services including:</p>
      <ul>
        <li>Advanced diagnostic testing</li>
        <li>Management of chronic kidney disease</li>
        <li>Dialysis services</li>
        <li>Kidney transplant program</li>
        <li>Nutritional counseling for kidney patients</li>
      </ul>
      
      <h2>Prevention Tips</h2>
      <p>To maintain kidney health, our experts recommend:</p>
      <ul>
        <li>Stay hydrated by drinking adequate water daily</li>
        <li>Maintain healthy blood pressure and blood sugar levels</li>
        <li>Reduce salt intake</li>
        <li>Exercise regularly</li>
        <li>Avoid smoking and excessive alcohol consumption</li>
        <li>Use over-the-counter pain medications cautiously</li>
        <li>Get regular kidney function tests if you have risk factors</li>
      </ul>
      
      <p>For more information about our kidney care services or to schedule a kidney function test, please contact our Nephrology Department at +234 8097142623.</p>
    `,
    coverImage: "/images/blogs/world-kidney-day.jpg",
    category: "Events",
    author: {
      name: "Dr. Kofarmata Ameera Yakubu",
      role: "Medical Officer",
      avatar: "/images/doctors/dr-kofarmata-ameera-yakubu.jpg",
    },
    publishedAt: "2021-03-11T00:00:00Z",
    tags: ["kidney health", "world kidney day", "nephrology", "health awareness"],
  },
]

export function getBlogPosts() {
  return blogPosts
}

export function getFeaturedBlogPosts() {
  return blogPosts.filter((post) => post.featured)
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: BlogCategory) {
  return blogPosts.filter((post) => post.category === category)
}

export function getRecentBlogPosts(count = 3) {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count)
}
