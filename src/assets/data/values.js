import AndroidIcon from '@mui/icons-material/Android';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import StorageIcon from '@mui/icons-material/Storage';
import AirIcon from '@mui/icons-material/Air';
import GitHubIcon from '@mui/icons-material/GitHub';
import BugReportIcon from '@mui/icons-material/BugReport';
import SpeedIcon from '@mui/icons-material/Speed';

const HARD_SKILLS = [
    {
        icon: <AndroidIcon className='icon' />,
        title: 'Senior Android Developer',
        description: 'Proficient in Kotlin, with extensive experience in Android development. Proven track record of delivering high-quality Android applications for well-known brands.'
    },
    {
        icon: <ArchitectureIcon className='icon' />,
        title: 'Architectural Patterns',
        description: 'Understanding and implementation of architectural patterns like MVVM, MVP and MVI for robust app architecture.'
    },
    {
        icon: <StorageIcon className='icon' />,
        title: 'Database Management',
        description: 'Proficient both with relational and non-relational databases such as SQLite, PostgreSQL, MongoDB, Room, Realm.'
    },
    {
        icon: <AirIcon className='icon' />,
        title: 'Reactive Programming',
        description: 'Great with reactive programming and concurrency design for managing asynchronous data streams.'
    },
    {
        icon: <GitHubIcon className='icon' />,
        title: 'Git and Version Control',
        description: 'Skill in using Git for version control, collaboration, and code management.'
    },
    {
        icon: <BugReportIcon className='icon' />,
        title: 'Testing and Debugging',
        description: 'Expertise in unit testing, UI testing, and debugging tools to ensure app stability and quality.'
    },
    {
        icon: <SpeedIcon className='icon' />,
        title: 'Performance Optimization',
        description: 'Ability to optimize app performance, reduce resource consumption, and improve responsiveness.'
    }
];

const SOFT_SKILLS = [
    {
        icon: '',
        title: 'Leadership and Team Management',
        description: 'Successfully led and motivated dynamic teams, establishing coding standards and best practices to improve code quality and maintainability. Mentored junior developers for professional growth.'
    },
    {
        icon: '',
        title: 'Problem Solving',
        description: 'Strong ability to identify and resolve technical challenges, ensuring seamless integration and enhancing user experiences.'
    },
    {
        icon: '',
        title: 'Communication',
        description: 'Excellent communication skills, both within cross-functional teams and with clients, fostering positive working relationships.'
    },
    {
        icon: '',
        title: 'Continuous Improvement',
        description: 'Commitment to continuous professional and personal growth, proactively seeking opportunities to enhance skills and stay updated with industry trends'
    },
    {
        icon: '',
        title: 'Independence and Proactivity',
        description: 'Demonstrated ability to take initiative and work independently, leading to successful project outcomes and client satisfaction.'
    },
    {
        icon: '',
        title: 'Team Building',
        description: 'Proficient in building and managing collaborative teams, driving innovation and excellence in software development.'
    },
    {
        icon: '',
        title: 'Adaptability',
        description: 'The ability to adapt to evolving technologies and industry trends, as the Android ecosystem continuously changes.'
    },
    {
        icon: '',
        title: 'Attention to Detail',
        description: 'Keen attention to detail for bug detection, code quality, and UI/UX refinement.'
    },
    {
        icon: '',
        title: 'Creativity',
        description: 'Creative thinking to find innovative solutions and enhance user experiences.'
    },
    {
        icon: '',
        title: 'Critical Thinking',
        description: 'Critical thinking skills for evaluating and making decisions on technical and design choices.'
    }
];

export const Values = {
    HardSkills: HARD_SKILLS
};