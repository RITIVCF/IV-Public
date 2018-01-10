import React from 'react';
import {mount} from 'react-mounter';

//layouts
import {MainLayout} from '../imports/ui/containers/MainLayout.jsx';
import {SignIn} from '../imports/ui/containers/SignIn.jsx';

import RequestUpdateForm from '/imports/ui/components/PrayerWall/RequestUpdateForm';

//Wrappers
import Home from '../imports/ui/pages/Home.jsx';
import About from '../imports/ui/pages/About.jsx';
import Events from '../imports/ui/pages/Events.jsx';
import Churches from '../imports/ui/pages/Churches.jsx';
import SGSignUp from '../imports/ui/pages/SgSignUp.jsx';
import ChurchSignUp from '../imports/ui/pages/ChurchSignUp.jsx';
import Prayer from '../imports/ui/pages/Prayer.jsx';
import Contact from '../imports/ui/pages/Contact.jsx';
import MemberWrapper from '../imports/ui/pages/Member.jsx';
import NotFound from '../imports/ui/pages/NotFound.jsx';


function scrollTop(){
	window.scrollTo(0, 0);
}
FlowRouter.triggers.enter([scrollTop]);

FlowRouter.route('/',{
	action() {
		mount(MainLayout, {
			content: (<Home />)
		})
	}
});

FlowRouter.route('/about',{
	action() {
		mount(MainLayout, {
			content: (<About />)
		})
	}
});

FlowRouter.route('/gatherings',{
	action() {
		mount(MainLayout, {
			content: (<Events />)
		})
	}
});

FlowRouter.route('/churches',{
	action() {
		mount(MainLayout, {
			content: (<Churches />)
		})
	}
});

FlowRouter.route('/prayer',{
	action() {
		mount(MainLayout, {
			content: (<Prayer />)
		})
	}
});

FlowRouter.route('/prayerwall/:requestID', {
	action(params) {
		Meteor.call("publishPrayerRequest",{requestID: params.requestID});
		mount(MainLayout, {
			content: (<div className="container"><RequestUpdateForm requestID={params.requestID} /></div>)
		})
	}
});

FlowRouter.route('/contact',{
	action() {
		mount(MainLayout, {
			content: (<Contact />)
		})
	}
});

FlowRouter.route('/becomeamember',{
	action() {
		mount(MainLayout, {
			content: (<MemberWrapper />)
		})
	}
});

FlowRouter.route('/sgsignup/:sgid',{
	action(params) {
		mount(MainLayout, {
			content: (<SGSignUp sgid={params.sgid} />)
		})
	}
});

FlowRouter.route('/churchsignup/:chid/:uid',{
	action(params) {
		mount(MainLayout, {
			content: (<ChurchSignUp chid={params.chid} uid={params.uid} />)
		})
	}
});

FlowRouter.notFound = {
  action() {
    mount(MainLayout, {
				content: (<NotFound />)
			}
		)
  }
};
