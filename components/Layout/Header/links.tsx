import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
const links = [
    {
        href: '/',
        label: 'Home',
        icon: <HomeOutlinedIcon />,
        hide: () => {
            return false;
        },
        divideAfter: false
    },
    {
        href: '/paint-selection',
        label: 'Paint Selection',
        icon: <ColorLensOutlinedIcon />,
        hide: () => {
            return false;
        },
        divideAfter: false
    },
    {
        href: '/portfolio',
        label: 'portfolio',
        icon: <BusinessCenterOutlinedIcon />,
        hide: () => {
            return false;
        },
        divideAfter: false
    },
    {
        href: '/testimonials/testimonials',
        label: 'testimonials',
        icon: <ChatBubbleOutlinedIcon />,
        hide: () => {
            return false;
        },
        divideAfter: false
    },
    {
        href: '/contact-us',
        label: 'contact us',
        icon: <ContactMailOutlinedIcon />,
        hide: () => {
            return false;
        },
        divideAfter: false
    },
];

export default links