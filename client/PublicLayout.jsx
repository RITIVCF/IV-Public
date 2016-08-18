import React from 'react';

export const PublicLayout = ({content}) => (
	<div className="public-layout">
        <header id="header">
					<a href="/">
						<img src="/images/InterVarsity-RIT-ablogo-color.png" alt={"IVCF logo"} style={{height: 28, verticalAlign: "middle"}} />
						</a>
            <nav id="nav">
							<ul>
                <li class="current"><a href="/about">About</a></li>
                <li class="current"><a href="/ourchapter">Our Chapter</a></li>
								<li class="current"><a href="/calendar">Calendar</a></li>
									<li class="current"><a href="/smallgroups">Small Groups</a></li>
									<li class="current"><a href="/largegroup">Large Group</a></li>
									<li class="current"><a href="/prayer">Prayer</a></li>
									<li class="current"><a href="/localchurches">Local Churches</a></li>
								<li class="button special"><a href="#cta">Questions</a></li>
								<li class="button special"><a href="/forms/member">Become a Member</a></li>
							</ul>
            </nav>
        </header>
        <main>
		    {content}
        </main>
				<section id="cta">
					<header>
        		<h2>Would you like more <strong>Information</strong>?</h2>
        		<p>Email us any questions    | |   Join our mailing list   | |    Fill out our Learn More form</p>
    			</header>
			    <footer>
			        <ul class="buttons">
			            <li><a href="/contactus" class="button"><i class="fa fa-envelope-o"></i> ivcf at rit.edu</a></li>
									<li><a href="/getinvolved" class="button"><i class="fa fa-book"></i> Learn More</a></li>
			        </ul>
			    </footer>
					      <p>This is test text about needing prayer, click on this button to go the the prayer request page: <a href="/prayerrequest"><button>Prayer Request</button></a></p>
				</section>
				<footer>
					<ul class="icons">
        		<li><a href="https://twitter.com/ritivcf" class="icon fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>
        		<li><a href="https://www.facebook.com/ritivcf" class="icon fa-facebook-official" target="_blank"><span class="label">Facebook</span></a></li>
						<li><a href="https://instagram.com/ritivcf" class="icon fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>
						<li><a href="https://www.youtube.com/user/RITivcf" class="icon fa-youtube" target="_blank"><span class="label">YouTube</span></a></li>
    			</ul>
					<span class="copyright">Made with Love, Intervarsity Christian Fellowship at RIT</span>
					<a href="http://localhost:3000"><button>Ivy</button></a>
				</footer>
	</div>
)

/*
<li class="submenu">
	<a href="#">What we do</a>
	<ul>
		<li class="current"><a href="/smallgroups">Small Groups</a></li>
		<li class="current"><a href="/largegroup">Large Group</a></li>
		<li class="current"><a href="/prayer">Prayer</a></li>
		<li class="current"><a href="/localchurches">Local Churches</a></li>
	</ul>
</li>
*/
