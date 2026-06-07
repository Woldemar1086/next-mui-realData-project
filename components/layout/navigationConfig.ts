import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SettingsIcon from '@mui/icons-material/Settings';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export const NavigationItems = [
    {
        title: 'Dashboard',
        path: '/',
        icon: DashboardIcon
    },
    {
        title: 'Transactions',
        path: '/transactions',
        icon: CurrencyExchangeIcon
    },
    {
        title: 'Live feed',
        path: '/feed',
        icon: RssFeedIcon
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: SettingsIcon
    },
]