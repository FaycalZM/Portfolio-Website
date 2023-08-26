import { FaHtml5, FaCss3Alt, FaReact, FaJava } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoTailwindCss, BiLogoCPlusPlus } from 'react-icons/bi'
import { SiCsharp, SiTailwindcss } from 'react-icons/si'

const Data = [
    {
        name: 'HTML5',
        progress: '85%',
        icon: <FaHtml5 className='text-xl' />
    },
    {
        name: 'CSS3',
        progress: '87.5%',
        icon: <FaCss3Alt className='text-xl' />
    },
    {
        name: 'JS',
        progress: '60%',
        icon: <BiLogoJavascript className='text-xl' />
    },
    {
        name: 'ReactJS',
        progress: '80%',
        icon: <FaReact className='text-xl' />
    },
    {
        name: 'Tailwindcss',
        progress: '72.5%',
        icon: <SiTailwindcss className='text-xl' />
    },
    {
        name: 'C',
        progress: '60%',
        icon: <BiLogoCPlusPlus className='text-xl' />
    },
    {
        name: 'JAVA',
        progress: '55%',
        icon: <FaJava className='text-xl' />
    },
    {
        name: 'C#',
        progress: '60%',
        icon: <SiCsharp className='text-xl' />
    },
]

export default Data