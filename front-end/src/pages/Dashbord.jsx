import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSideBar from '../components/Dashboard/DashSideBar';
import DashProfile from '../components/Dashboard/DashProfile';

// import DashPosts from '../components/DashPosts';
// import DashUsers from '../components/DashUsers';
// import DashComments from '../components/DashComments';
// import DashboardComp from '../components/DashboardComp';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSideBar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
   
    </div>
  );
}
