import React from 'react';
import {mount} from 'react-mounter';

//Layouts
import {FormLayout} from './FormLayout.jsx';
import {PublicLayout} from './PublicLayout.jsx';

//Wrappers
import AboutWrapper from './AboutWrapper.jsx';
import MemberWrapper from './member/MemberWrapper.jsx';
import ContactWrapper from './contact/ContactWrapper.jsx';
import IndexWrapper from './Index.jsx';
import SmallGroupWrapper from './smallgroup/SmallGroupWrapper.jsx';
import OurChapterWrapper from './ourchapter/OurChapterWrapper.jsx';
import LargeGroupWrapper from './largegroup/LargeGroupWrapper.jsx';
import PrayerWrapper from './prayer/PrayerWrapper.jsx';
import LocalChurchesWrapper from './localchurches/LocalChurchesWrapper.jsx';
import ContactFormWrapper from './ContactFormWrapper.jsx';
import GetInvolvedWrapper from './getinvolved/GetInvolvedWrapper.jsx';
import EventCalendarWrapper from './events/EventCalendarWrapper.jsx';
import PrayerRequest from './PrayerRequests.jsx';
import RSVPWrapper from './events/forms/RSVP.jsx';


FlowRouter.route('/',{
	action() {
		mount(PublicLayout, {
			content: (<IndexWrapper />)
		})
	}
});


FlowRouter.route('/about', {
	action() {
		mount(PublicLayout, {
				content: (<AboutWrapper />)
			}
		)
	}
});

FlowRouter.route('/ourchapter',{
	action() {
		mount(PublicLayout, {
			content: (<OurChapterWrapper />)
		})
	}
});

FlowRouter.route('/calendar',{
	action() {
		mount(PublicLayout, {
			content: (<EventCalendarWrapper />)
		})
	}
});

FlowRouter.route('/smallgroups', {
	action() {
		mount(PublicLayout, {
				content: (<SmallGroupWrapper />)
			}
		)
	}
});

FlowRouter.route('/prayer', {
	action() {
		mount(PublicLayout, {
				content: (<PrayerWrapper />)
			}
		)
	}
});

FlowRouter.route('/largegroup', {
	action() {
		mount(PublicLayout, {
				content: (<LargeGroupWrapper />)
			}
		)
	}
});

FlowRouter.route('/localchurches', {
	action() {
		mount(PublicLayout, {
				content: (<LocalChurchesWrapper />)
			}
		)
	}
});

FlowRouter.route('/contactus', {
	action() {
		mount(PublicLayout, {
				content: (<ContactFormWrapper />)
			}
		)
	}
});

FlowRouter.route('/getinvolved', {
	action() {
		mount(FormLayout, {
				content: (<GetInvolvedWrapper />)
			}
		)
	}
});

FlowRouter.route('/forms/become_a_member/:cid', {
	action(params) {
		mount(FormLayout, {
			content: (<MemberWrapper cid={params.cid} />)
		})
	}
});

FlowRouter.route('/forms/contact', {
	action() {
		mount(FormLayout, {
				content: (<ContactWrapper />)
			}
		)
	}
});

FlowRouter.route('/forms/rsvp/:eid', {
	action(params) {
		mount(FormLayout, {
				content: (<RSVPWrapper eid={params.eid} />)
			}
		)
	}
});

FlowRouter.route('/prayerrequest',{
	action() {
		mount(FormLayout, {
			content: (<PrayerRequest />)
		})
	}
});
