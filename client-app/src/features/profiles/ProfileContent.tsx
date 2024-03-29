import * as React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import ProfilePhotos from './ProfilePhotos';
import ProfileFollowings from './ProfileFollowings';
import ProfileActivities from './ProfileActivities';
import ProfileAbout from './ProfileAbout';
    interface Props{
        profile:Profile
    }
export default function ProfileContent({profile}:Props) {
    const {profileStore} = useStore();
    const panes=[       
        {menuItem: 'About', render: () => <ProfileAbout />},
        {menuItem: 'Photos', render:() =><ProfilePhotos profile={profile}/>},
        {menuItem: 'Events', render: () => <ProfileActivities />},
        {menuItem: 'Followers', render: () => <ProfileFollowings />},
        {menuItem: 'Following', render: () => <ProfileFollowings />},
    ];

    return(
        <Tab
            menu={{fluid:true, vertical:true}}
            menuPosition='right'
            panes={panes}
            onTabChange={(e, data) => profileStore.setActiveTab(data.activeIndex)}
        />
    )
};
