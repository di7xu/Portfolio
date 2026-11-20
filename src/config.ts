export interface ProjectItem {
    id: number;
    title: string;
    category: string;
    technologies: string;
    image: string;
    description: string;
    link?: string;
    downloadUrl?: string;
    downloadLabel?: string;
    githubUrl?: string;
}

export const config: {
    developer: {
        name: string;
        fullName: string;
        title: string;
        description: string;
    };
    social: {
        github: string;
        email: string;
        location: string;
    };
    about: {
        title: string;
        description: string;
    };
    experiences: Array<{
        position: string;
        company: string;
        period: string;
        location: string;
        description: string;
        responsibilities: string[];
        technologies: string[];
    }>;
    projects: ProjectItem[];
    contact: {
        email: string;
        github: string;
        linkedin: string;
        twitter: string;
        facebook: string;
        instagram: string;
        youtube: string;
    };
    skills: {
        develop: {
            title: string;
            description: string;
            details: string;
            tools: string[];
        };
        design: {
            title: string;
            description: string;
            details: string;
            tools: string[];
        };
    };
} = {
    developer: {
        name: "Dilip",
        fullName: "Dilip Kumar",
        title: "Electronics Engineer | AI & Software Enthusiast",
        description: "Electronics Engineering student exploring Electronics, AI, and Software Development. I enjoy building practical projects, learning new technologies, and creating digital content."
    },
    social: {
        github: "di7xu",
        email: "dk2017044@hotmail.com",
        location: "Patna, India"
    },
    about: {
        title: "About Me",
        description: "I am a 2nd-year Electronics Engineering student at Government Polytechnic Patna-7. I am learning programming, AI, and software development. I enjoy building practical electronics and coding projects, especially with Python. I am also interested in video editing and creative digital content."
    },
    experiences: [
        {
            position: "Diploma in Electronics Engineering",
            company: "Government Polytechnic Patna-7",
            period: "2025 - Present",
            location: "Patna, Bihar, India",
            description: "Currently studying Electronics Engineering and learning programming, AI, software development, and practical electronics.",
            responsibilities: [
                "Studying core electronics, circuit design, and electronic components",
                "Learning programming in Python, C, C++, Kotlin, and Java",
                "Building practical electronics toolkits and software applications",
                "Exploring Generative AI, prompt engineering, and modern developer tools"
            ],
            technologies: ["Electronics", "Python", "Kotlin", "C", "C++", "Circuit Design", "AI Basics"]
        },
        {
            position: "Secondary Education (10th)",
            company: "R.S.L.N. Vidya Mandir, Balua Bazar, Supaul, Bihar",
            period: "Completed",
            location: "Supaul, Bihar, India",
            description: "Completed secondary education with a strong foundation in science, mathematics, and foundational computer skills.",
            responsibilities: [
                "Built strong academic foundation in science, physics, and mathematics",
                "Developed early curiosity and passion for technology and electronics",
                "Participated in school academic, digital, and creative activities"
            ],
            technologies: ["Science", "Mathematics", "Computer Basics"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "CampusCare",
            category: "Full-Stack Web & Android",
            technologies: "React 19, TypeScript, Express, Supabase (PostgreSQL), Kotlin, Jetpack Compose",
            image: "/images/campuscare.png",
            description: "Unified AI-driven campus grievance and student safety platform featuring cryptographic anonymity, facility maintenance tracking, and an official native Android student app.",
            link: "https://cmpscare.vercel.app",
            downloadUrl: "https://cmpscare.vercel.app/CampusCare-v1.0-student.apk",
            downloadLabel: "Download APK (v1.0)"
        },
        {
            id: 2,
            title: "The Royal Rasoi",
            category: "Web / AI Concierge",
            technologies: "React 19, TypeScript, Motion, Groq Cloud, Qwen LLM",
            image: "/images/royal_rasoi.jpg",
            description: "Luxury restaurant dining web platform featuring 'Shahi Khansama', an ultra-fast AI dining concierge with strict culinary guardrails and mobile-first glassmorphic UI.",
            link: "https://royal-rasoi-beta.vercel.app/",
            githubUrl: "https://github.com/di7xu/Royal-resturant"
        },
        {
            id: 3,
            title: "ElectroKit – Electronics Toolkit",
            category: "Android / Electronics",
            technologies: "Android, Kotlin, Firebase, Material Design 3",
            image: "/images/electrokit.webp",
            description: "An all-in-one electronics engineering toolkit for students featuring resistor color codes, SMD resistor codes, capacitor & inductor codes, Ohm's Law, power, and number system calculators.",
            link: "https://github.com/di7xu/ElectroKit",
            downloadUrl: "https://github.com/di7xu/ElectroKit/raw/main/Build_Releases_APK/ElectroKit_v4.0.2.apk",
            downloadLabel: "Download APK (v4.0.2)",
            githubUrl: "https://github.com/di7xu/ElectroKit"
        },
        {
            id: 4,
            title: "AutoClip (Clipper)",
            category: "AI / Automation / Python",
            technologies: "Python, FFmpeg, OpenCV, YouTube Data API",
            image: "/images/autoclip.jpg",
            description: "Automated media processing pipeline that detects speakers and facecams in long-form livestreams, slices highlights, renders 4K vertical clips, and publishes YouTube Shorts automatically.",
            link: "https://github.com/di7xu/Clipper",
            githubUrl: "https://github.com/di7xu/Clipper"
        },
        {
            id: 5,
            title: "CoderGift – Birthday Surprise",
            category: "Creative Web / Audio & 3D",
            technologies: "Vanilla JS, Web Audio API, Canvas Confetti, CSS3 3D",
            image: "/images/codergift.jpg",
            description: "An aesthetic interactive surprise website featuring procedural Lo-Fi vinyl music via Web Audio API, real microphone candle blowing detection, and 3D wax seal unboxing.",
            link: "https://codergift.vercel.app",
            githubUrl: "https://github.com/di7xu/Bday-Wish"
        },
        {
            id: 6,
            title: "MediRoute",
            category: "Healthcare / Web App",
            technologies: "React, TypeScript, Node.js, Express, Hospital Matching Algorithm",
            image: "/images/mediroute.png",
            description: "Emergency healthcare facility matching & navigation application focused on Patna, Bihar. Prioritizes verified clinical capabilities (trauma, cath lab, burn unit) over pure distance."
        },
        {
            id: 7,
            title: "Practical Electronics & Circuits",
            category: "Electronics / Hardware",
            technologies: "Analog & Digital Circuits, Sensors, Hardware Prototyping",
            image: "/images/electronics_circuits.webp",
            description: "Hands-on electronics engineering experiments focusing on circuit prototyping, component testing, sensor interfacing, and practical hardware design.",
            githubUrl: "https://github.com/di7xu"
        },
        {
            id: 8,
            title: "Python Turtle Projects",
            category: "Python / Graphics",
            technologies: "Python, Turtle Graphics, Algorithms, Math",
            image: "/images/python_turtle.webp",
            description: "Creative graphics, algorithmic patterns, and interactive programming experiments created while mastering Python fundamentals.",
            githubUrl: "https://github.com/di7xu"
        }
    ],
    contact: {
        email: "dk2017044@hotmail.com",
        github: "https://github.com/di7xu",
        linkedin: "https://www.linkedin.com/in/di7xu",
        twitter: "",
        facebook: "",
        instagram: "https://www.instagram.com/di7xu",
        youtube: "https://www.youtube.com/@di7xu"
    },
    skills: {
        develop: {
            title: "ELECTRONICS & CODE",
            description: "Electronics engineering, Python & software development",
            details: "Studying electronics engineering while developing strong programming fundamentals across Python, Kotlin, C, C++, Java, HTML/CSS, and Rust. Built Android tools like ElectroKit and practical electronics projects.",
            tools: ["Python", "Java", "C", "C++", "Kotlin", "Rust", "HTML", "CSS", "Android Studio", "VS Code"]
        },
        design: {
            title: "AI & CREATIVE TECH",
            description: "Generative AI, video editing & digital content creation",
            details: "Leveraging Generative AI, AI-assisted development, and prompt engineering alongside video editing with CapCut and VN, and visual design in Canva.",
            tools: ["Generative AI", "AI-assisted Dev", "Prompt Engineering", "Video Editing", "CapCut", "VN", "Canva", "Git", "GitHub"]
        }
    }
};
