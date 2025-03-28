import { Briefcase, Calendar, GraduationCap } from "lucide-react"

const workExperience = [
  {
    id: 1,
    role: "IT Intern",
    company: "JHCSC Library",
    duration: "February 2025 - June 2025",
    description: [
      "Developed a QR code scanning system to streamline book tracking and borrowing processes",
      "Integrated QR code generation and scanning using JavaScript and PHP",
      "Implemented a MySQL database to store book details, borrower information, and transaction history",
      "Designed and developed a Library Inventory System for efficient book cataloging and stock management",
      "Automated book check-in/check-out processes, reducing manual work by 50%",
      "Conducted system testing, debugging, and performance optimization for smooth operation",
      "Provided training to library staff on using both the QR code scanner and inventory system",
    ],
  },
]

const education = [
  {
    id: 2,
    degree: "Bachelor of Science in Information Technology",
    institution: "Josefina Herrera Cerelles State College",
    duration: "2022 - 2025",
    description:
      "Specialized in Web and Mobile Development, Database Management, and System Analysis. Worked on various projects involving PHP, React Native, and MySQL.",
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-full bg-primary/10">
              <Briefcase className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-semibold">Work Experience</h3>
          </div>

          <div className="space-y-12">
            {workExperience.map((job) => (
              <div key={job.id} className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-primary/70"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-medium">{job.role}</h4>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>{job.duration}</span>
                  </div>
                </div>
                <p className="text-lg text-primary mb-2">{job.company}</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-full bg-primary/10">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>

          <div className="space-y-12">
            {education.map((edu) => (
              <div key={edu.id} className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-primary/70"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-medium">{edu.degree}</h4>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                <p className="text-lg text-primary mb-2">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 border border-primary/10 rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                <div>
                  <h4 className="font-medium">Javascript Certificate</h4>
                  <p className="text-muted-foreground">freecodecamp</p>
                </div>
                <span className="text-muted-foreground">2023</span>
              </div>

              <div className="flex justify-between items-center p-4 border border-primary/10 rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                <div>
                  <h4 className="font-medium">CERTIFICATE OF ATTENDANCE_ICT Learning and Certification Summit</h4>
                  <p className="text-muted-foreground">ILCDB EPMD</p>
                </div>
                <span className="text-muted-foreground">2023</span>
              </div>

              <div className="flex justify-between items-center p-4 border border-primary/10 rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                <div>
                  <h4 className="font-medium">Koha ILS Certification</h4>
                  <p className="text-muted-foreground">Koha</p>
                </div>
                <span className="text-muted-foreground">2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

